/**
 * app.js — Orchestrator. Ties together all modules.
 */

const App = (() => {
    let manifest = null;

    async function init() {
        // Load manifest
        try {
            const resp = await fetch('content.json');
            manifest = await resp.json();
        } catch (e) {
            console.error('Failed to load content.json', e);
            return;
        }

        // Init modules
        FloatingCards.init(manifest.categories);
        Launcher.init(manifest.categories);
        NoteCard.init();

        // Handle resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (!NoteCard.isOpen()) {
                    FloatingCards.init(manifest.categories);
                }
            }, 250);
        });
    }

    /**
     * Called when user selects a group from the launcher
     */
    function selectGroup(groupPath) {
        FloatingCards.highlightCluster(groupPath);
        showGroupIndex(groupPath);
    }

    /**
     * Show the index card for a group (list of all notes)
     */
    function showGroupIndex(groupPath) {
        const cat = manifest.categories.find(c => c.path === groupPath);
        if (!cat) return;

        const html = buildIndexHtml(cat.children, groupPath);
        NoteCard.show(cat.name + ' — Index', html, groupPath, null);
    }

    /**
     * Build index HTML from children tree
     */
    function buildIndexHtml(children, groupPath) {
        let html = '<div class="index-list">';

        for (const item of children) {
            if (item.type === 'folder') {
                html += '<div class="index-list-group">';
                html += `<div class="index-list-group-title">${item.name}</div>`;
                html += buildIndexItems(item.children, groupPath);
                html += '</div>';
            } else {
                html += buildIndexItemButton(item, groupPath);
            }
        }

        html += '</div>';
        return html;
    }

    function buildIndexItems(children, groupPath) {
        let html = '';
        for (const item of children) {
            if (item.type === 'folder') {
                html += `<div class="index-list-group-title" style="margin-top:8px;font-size:10px;opacity:0.7;">${item.name}</div>`;
                html += buildIndexItems(item.children, groupPath);
            } else {
                html += buildIndexItemButton(item, groupPath);
            }
        }
        return html;
    }

    function buildIndexItemButton(item, groupPath) {
        return `<button class="index-list-item" data-path="${item.path}" data-group="${groupPath}"
                    onclick="App.openNote('${item.path}', '${groupPath}')">${item.name}</button>`;
    }

    /**
     * Open a specific note
     */
    async function openNote(filePath, groupPath) {
        const name = filePath.split('/').pop().replace(/\.md$/, '').replace(/_/g, ' ');
        NoteCard.showLoading(name, groupPath);

        try {
            const html = await MarkdownEngine.render(filePath);
            NoteCard.show(name, `<article class="markdown-body">${html}</article>`, groupPath, filePath);
        } catch (err) {
            NoteCard.show(name, `
                <div style="padding:24px;text-align:center;color:var(--text-secondary);">
                    <p style="font-size:16px;margin-bottom:8px;">Could not load this note.</p>
                    <p style="font-size:13px;color:var(--text-muted);">${err.message}</p>
                </div>
            `, groupPath, filePath);
        }
    }

    /**
     * Open a random note from the same group
     */
    function showRandomNote(groupPath) {
        const cat = manifest.categories.find(c => c.path === groupPath);
        if (!cat) return;

        const allFiles = flattenFiles(cat.children);
        if (allFiles.length === 0) return;

        // Avoid showing the same note
        const current = NoteCard.getFilePath();
        let candidates = allFiles.filter(f => f.path !== current);
        if (candidates.length === 0) candidates = allFiles;

        const random = candidates[Math.floor(Math.random() * candidates.length)];
        openNote(random.path, groupPath);
    }

    /**
     * Flatten all files from a tree
     */
    function flattenFiles(children) {
        const files = [];
        for (const item of children) {
            if (item.type === 'file') {
                files.push(item);
            } else if (item.children) {
                files.push(...flattenFiles(item.children));
            }
        }
        return files;
    }

    return { init, selectGroup, showGroupIndex, openNote, showRandomNote };
})();

document.addEventListener('DOMContentLoaded', App.init);
