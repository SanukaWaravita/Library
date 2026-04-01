/**
 * markdown-engine.js — Fetch, parse, and render markdown files.
 */

const MarkdownEngine = (() => {
    const cache = new Map();

    /**
     * Fetch and parse a markdown file, return HTML string
     */
    async function render(filePath) {
        const md = await fetchFile(filePath);
        return parseMarkdown(md, filePath);
    }

    /**
     * Fetch with caching
     */
    async function fetchFile(filePath) {
        if (cache.has(filePath)) return cache.get(filePath);

        const resp = await fetch(filePath);
        if (!resp.ok) throw new Error(`Could not load ${filePath} (${resp.status})`);
        const text = await resp.text();
        cache.set(filePath, text);
        return text;
    }

    /**
     * Parse markdown to HTML
     */
    function parseMarkdown(md, filePath) {
        if (typeof marked !== 'undefined') {
            marked.setOptions({
                breaks: true,
                gfm: true,
            });

            // Custom renderer for syntax highlighting
            const renderer = new marked.Renderer();
            const origCode = renderer.code;
            renderer.code = function({ text, lang }) {
                if (typeof hljs !== 'undefined' && lang && hljs.getLanguage(lang)) {
                    const highlighted = hljs.highlight(text, { language: lang }).value;
                    return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
                }
                if (typeof hljs !== 'undefined') {
                    const highlighted = hljs.highlightAuto(text).value;
                    return `<pre><code class="hljs">${highlighted}</code></pre>`;
                }
                return `<pre><code>${escapeHtml(text)}</code></pre>`;
            };

            // Rewrite relative image paths
            renderer.image = function({ href, title, text }) {
                let src = href;
                if (src && !src.startsWith('http') && !src.startsWith('/')) {
                    const baseDir = filePath.substring(0, filePath.lastIndexOf('/'));
                    src = baseDir ? baseDir + '/' + src : src;
                }
                const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
                return `<img src="${src}" alt="${escapeHtml(text || '')}"${titleAttr} loading="lazy">`;
            };

            return marked.parse(md, { renderer });
        }

        // Fallback
        return `<pre class="markdown-raw">${escapeHtml(md)}</pre>`;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    return { render };
})();
