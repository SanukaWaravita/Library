/**
 * floating-cards.js — Creates and positions mini card clusters on the canvas.
 */

const FloatingCards = (() => {
    const canvas = () => document.getElementById('canvas');
    let clusters = {};  // group -> { el, cards[], cx, cy, radius }

    /**
     * Initialize floating cards from manifest data
     */
    function init(categories) {
        const c = canvas();
        c.innerHTML = '';
        clusters = {};

        const positions = computeClusterPositions(categories.length);

        categories.forEach((cat, i) => {
            const pos = positions[i];
            const fileCount = cat.fileCount;
            // Limit displayed mini cards for performance
            const displayCount = Math.min(fileCount, 30);
            const radius = Math.max(80, Math.min(160, 50 + displayCount * 3));

            // Create cluster boundary
            const clusterEl = document.createElement('div');
            clusterEl.className = 'cluster';
            clusterEl.dataset.group = cat.path;
            clusterEl.style.width = radius * 2 + 'px';
            clusterEl.style.height = radius * 2 + 'px';
            clusterEl.style.left = (pos.x - radius) + 'px';
            clusterEl.style.top = (pos.y - radius) + 'px';

            // Label
            const label = document.createElement('div');
            label.className = 'cluster-label';
            label.textContent = cat.name;
            clusterEl.appendChild(label);

            c.appendChild(clusterEl);

            // Create mini cards
            const cards = [];
            for (let j = 0; j < displayCount; j++) {
                const card = createMiniCard(cat.path);
                // Random position within cluster circle
                const angle = Math.random() * Math.PI * 2;
                const dist = Math.random() * (radius - 35);
                const cx = pos.x + Math.cos(angle) * dist - 28;
                const cy = pos.y + Math.sin(angle) * dist - 19;
                card.style.left = cx + 'px';
                card.style.top = cy + 'px';

                // Random float animation
                const animIdx = (j % 3) + 1;
                const dur = 5 + Math.random() * 4;
                const delay = Math.random() * -8;
                card.style.animation = `float-${animIdx} ${dur}s ${delay}s ease-in-out infinite`;

                // Slight random rotation
                const rot = (Math.random() - 0.5) * 8;
                card.style.transform = `rotate(${rot}deg)`;

                c.appendChild(card);
                cards.push(card);
            }

            clusters[cat.path] = { el: clusterEl, cards, cx: pos.x, cy: pos.y, radius };
        });
    }

    /**
     * Compute cluster center positions based on viewport size
     */
    function computeClusterPositions(count) {
        const w = window.innerWidth;
        const h = window.innerHeight - 48; // minus navbar
        const positions = [];

        if (count <= 2) {
            const gap = w / (count + 1);
            for (let i = 0; i < count; i++) {
                positions.push({ x: gap * (i + 1), y: h * 0.45 });
            }
        } else if (count <= 4) {
            // 2x2 grid layout
            const cols = 2;
            const rows = Math.ceil(count / cols);
            const gx = w / (cols + 1);
            const gy = h / (rows + 1);
            for (let i = 0; i < count; i++) {
                const col = i % cols;
                const row = Math.floor(i / cols);
                positions.push({
                    x: gx * (col + 1),
                    y: gy * (row + 1),
                });
            }
        } else {
            // Spread evenly
            const cols = 3;
            const rows = Math.ceil(count / cols);
            const gx = w / (cols + 1);
            const gy = h / (rows + 1);
            for (let i = 0; i < count; i++) {
                const col = i % cols;
                const row = Math.floor(i / cols);
                positions.push({
                    x: gx * (col + 1),
                    y: gy * (row + 1),
                });
            }
        }

        return positions;
    }

    /**
     * Create a mini card DOM element
     */
    function createMiniCard(group) {
        const card = document.createElement('div');
        card.className = 'mini-card';
        card.dataset.group = group;
        card.innerHTML = `
            <div class="mini-card-lines">
                <div class="mini-card-line"></div>
                <div class="mini-card-line"></div>
                <div class="mini-card-line"></div>
            </div>
        `;
        return card;
    }

    /**
     * Highlight a specific cluster, dim others
     */
    function highlightCluster(groupPath) {
        Object.keys(clusters).forEach(key => {
            const cl = clusters[key];
            if (key === groupPath) {
                cl.el.classList.add('highlight');
                cl.cards.forEach(c => { c.style.opacity = '1'; });
            } else {
                cl.el.classList.remove('highlight');
                cl.cards.forEach(c => { c.style.opacity = '0.3'; });
            }
        });
    }

    /**
     * Reset all clusters to normal state
     */
    function resetHighlight() {
        Object.keys(clusters).forEach(key => {
            const cl = clusters[key];
            cl.el.classList.remove('highlight');
            cl.cards.forEach(c => { c.style.opacity = '1'; });
        });
    }

    /**
     * Recalculate on resize
     */
    function handleResize(categories) {
        init(categories);
    }

    return { init, highlightCluster, resetHighlight, handleResize };
})();
