/**
 * note-card.js — Manages the opened note card (display, drag, resize).
 */

const NoteCard = (() => {
    let el, header, body, titleEl;
    let isDragging = false, isResizing = false;
    let dragOffsetX, dragOffsetY;
    let currentGroup = null;
    let currentFilePath = null;
    let isPositionCustom = false;

    function init() {
        el = document.getElementById('note-card');
        header = document.getElementById('note-card-header');
        body = document.getElementById('note-card-body');
        titleEl = document.getElementById('note-card-title');
        const resizeHandle = document.getElementById('note-card-resize');

        // Drag
        header.addEventListener('mousedown', startDrag);
        header.addEventListener('touchstart', startDragTouch, { passive: false });
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('touchmove', onDragTouch, { passive: false });
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);

        // Resize
        resizeHandle.addEventListener('mousedown', startResize);
        resizeHandle.addEventListener('touchstart', startResizeTouch, { passive: false });
        document.addEventListener('mousemove', onResize);
        document.addEventListener('touchmove', onResizeTouch, { passive: false });
        document.addEventListener('mouseup', stopResize);
        document.addEventListener('touchend', stopResize);

        // Buttons
        document.getElementById('btn-close').addEventListener('click', close);
        document.getElementById('btn-index').addEventListener('click', () => {
            if (currentGroup) App.showGroupIndex(currentGroup);
        });
        document.getElementById('btn-random').addEventListener('click', () => {
            if (currentGroup) App.showRandomNote(currentGroup);
        });

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !el.classList.contains('hidden')) {
                close();
            }
        });
    }

    /**
     * Show the note card with given content
     */
    function show(title, contentHtml, group, filePath) {
        currentGroup = group;
        currentFilePath = filePath;
        titleEl.textContent = title;
        body.innerHTML = contentHtml;
        el.classList.remove('hidden');

        // Reset to center if not custom positioned
        if (!isPositionCustom) {
            el.style.top = '50%';
            el.style.left = '50%';
            el.style.transform = 'translate(-50%, -50%)';
        }

        // Dim background
        document.getElementById('canvas').classList.add('dimmed');
        FloatingCards.highlightCluster(group);
    }

    /**
     * Show loading state
     */
    function showLoading(title, group) {
        show(title, `
            <div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);">
                <div style="text-align:center;">
                    <div class="loading-spinner" style="margin:0 auto 12px;width:28px;height:28px;border:2px solid var(--border);border-top-color:var(--text-secondary);border-radius:50%;animation:spin 0.7s linear infinite;"></div>
                    Loading...
                </div>
            </div>
            <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
        `, group, null);
    }

    /**
     * Close the note card
     */
    function close() {
        el.classList.add('hidden');
        body.innerHTML = '';
        currentGroup = null;
        currentFilePath = null;
        isPositionCustom = false;

        // Reset transform for next open
        el.style.top = '50%';
        el.style.left = '50%';
        el.style.transform = 'translate(-50%, -50%)';
        el.style.width = '';
        el.style.height = '';

        document.getElementById('canvas').classList.remove('dimmed');
        FloatingCards.resetHighlight();
    }

    function isOpen() {
        return !el.classList.contains('hidden');
    }

    function getGroup() { return currentGroup; }
    function getFilePath() { return currentFilePath; }

    // ─── Drag ───
    function startDrag(e) {
        if (e.target.closest('.note-btn')) return;
        isDragging = true;
        const rect = el.getBoundingClientRect();
        // Switch from transform centering to absolute positioning
        el.style.transform = 'none';
        el.style.top = rect.top + 'px';
        el.style.left = rect.left + 'px';
        isPositionCustom = true;
        dragOffsetX = e.clientX - rect.left;
        dragOffsetY = e.clientY - rect.top;
    }

    function startDragTouch(e) {
        if (e.target.closest('.note-btn')) return;
        const t = e.touches[0];
        isDragging = true;
        const rect = el.getBoundingClientRect();
        el.style.transform = 'none';
        el.style.top = rect.top + 'px';
        el.style.left = rect.left + 'px';
        isPositionCustom = true;
        dragOffsetX = t.clientX - rect.left;
        dragOffsetY = t.clientY - rect.top;
        e.preventDefault();
    }

    function onDrag(e) {
        if (!isDragging) return;
        el.style.left = (e.clientX - dragOffsetX) + 'px';
        el.style.top = (e.clientY - dragOffsetY) + 'px';
    }

    function onDragTouch(e) {
        if (!isDragging) return;
        const t = e.touches[0];
        el.style.left = (t.clientX - dragOffsetX) + 'px';
        el.style.top = (t.clientY - dragOffsetY) + 'px';
        e.preventDefault();
    }

    function stopDrag() {
        isDragging = false;
    }

    // ─── Resize ───
    function startResize(e) {
        isResizing = true;
        // Ensure we're in absolute mode
        const rect = el.getBoundingClientRect();
        el.style.transform = 'none';
        el.style.top = rect.top + 'px';
        el.style.left = rect.left + 'px';
        isPositionCustom = true;
        e.preventDefault();
    }

    function startResizeTouch(e) {
        isResizing = true;
        const rect = el.getBoundingClientRect();
        el.style.transform = 'none';
        el.style.top = rect.top + 'px';
        el.style.left = rect.left + 'px';
        isPositionCustom = true;
        e.preventDefault();
    }

    function onResize(e) {
        if (!isResizing) return;
        const rect = el.getBoundingClientRect();
        const w = Math.max(320, e.clientX - rect.left);
        const h = Math.max(200, e.clientY - rect.top);
        el.style.width = w + 'px';
        el.style.height = h + 'px';
    }

    function onResizeTouch(e) {
        if (!isResizing) return;
        const t = e.touches[0];
        const rect = el.getBoundingClientRect();
        const w = Math.max(320, t.clientX - rect.left);
        const h = Math.max(200, t.clientY - rect.top);
        el.style.width = w + 'px';
        el.style.height = h + 'px';
        e.preventDefault();
    }

    function stopResize() {
        isResizing = false;
    }

    return { init, show, showLoading, close, isOpen, getGroup, getFilePath };
})();
