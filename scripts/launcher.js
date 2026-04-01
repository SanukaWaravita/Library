/**
 * launcher.js — Bottom-right circular button and category panel.
 */

const Launcher = (() => {
    let btn, panel;
    let isOpen = false;

    const DOT_CLASS = {
        'javascript': 'js',
        'java': 'java',
        'system_analysis_and_design': 'sad',
        'inbox[insta]': 'misc',
    };

    function init(categories) {
        btn = document.getElementById('launcher-btn');
        panel = document.getElementById('launcher-panel');
        const list = document.getElementById('launcher-list');

        // Build category items
        list.innerHTML = '';
        for (const cat of categories) {
            const item = document.createElement('button');
            item.className = 'launcher-item';
            item.dataset.group = cat.path;
            item.innerHTML = `
                <span class="launcher-dot ${DOT_CLASS[cat.path] || 'misc'}"></span>
                <span>${cat.name}</span>
                <span class="launcher-item-count">${cat.fileCount}</span>
            `;
            item.addEventListener('click', () => {
                close();
                App.selectGroup(cat.path);
            });
            list.appendChild(item);
        }

        btn.addEventListener('click', toggle);

        // Close panel on outside click
        document.addEventListener('click', (e) => {
            if (isOpen && !e.target.closest('.launcher')) {
                close();
            }
        });
    }

    function toggle() {
        if (isOpen) close();
        else open();
    }

    function open() {
        panel.classList.remove('hidden');
        isOpen = true;
    }

    function close() {
        panel.classList.add('hidden');
        isOpen = false;
    }

    return { init, close };
})();
