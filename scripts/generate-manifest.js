#!/usr/bin/env node
/**
 * generate-manifest.js
 * Walks the Library directory and produces content.json
 *
 * Usage: node scripts/generate-manifest.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'content.json');

// Directories to skip
const SKIP = new Set(['.git', 'node_modules', 'plans', 'scripts', 'styles', 'documents', 'assets', '.claude', 'claude_code']);

// Top-level categories in desired order
const CATEGORY_META = {
    'javascript':                  { name: 'JavaScript',               icon: 'js' },
    'java':                        { name: 'Java',                     icon: 'java' },
    'system_analysis_and_design':  { name: 'System Analysis & Design', icon: 'sad' },
    'inbox[insta]':                { name: 'Misc / Inbox',             icon: 'misc' },
};

function walk(dir, base) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const children = [];

    // Sort: directories first, then files, both alphabetical
    const dirs = entries.filter(e => e.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));
    const files = entries.filter(e => e.isFile() && e.name.endsWith('.md'))
        .filter(e => e.name.toLowerCase() !== 'readme.md')
        .sort((a, b) => a.name.localeCompare(b.name));

    for (const d of dirs) {
        if (SKIP.has(d.name)) continue;
        const subChildren = walk(path.join(dir, d.name), base);
        if (subChildren.length > 0) {
            children.push({
                name: formatName(d.name),
                path: path.relative(base, path.join(dir, d.name)),
                type: 'folder',
                children: subChildren,
            });
        }
    }

    for (const f of files) {
        children.push({
            name: formatName(f.name.replace(/\.md$/, '')),
            path: path.relative(base, path.join(dir, f.name)),
            type: 'file',
        });
    }

    return children;
}

function formatName(name) {
    // Strip leading number prefix like "01-" or "01_"
    let clean = name.replace(/^\d{1,2}[-_]/, '');
    // Replace hyphens/underscores with spaces
    clean = clean.replace(/[-_]/g, ' ');
    // Capitalize first letter of each word
    return clean.replace(/\b\w/g, c => c.toUpperCase()).trim();
}

function countFiles(node) {
    if (node.type === 'file') return 1;
    return (node.children || []).reduce((sum, c) => sum + countFiles(c), 0);
}

// Build the manifest
const categories = [];
let totalFiles = 0;

for (const [dirName, meta] of Object.entries(CATEGORY_META)) {
    const dirPath = path.join(ROOT, dirName);
    if (!fs.existsSync(dirPath)) continue;

    const children = walk(dirPath, ROOT);
    const fileCount = children.reduce((sum, c) => sum + countFiles(c), 0);
    totalFiles += fileCount;

    categories.push({
        name: meta.name,
        path: dirName,
        icon: meta.icon,
        fileCount,
        children,
    });
}

// Also add root-level .md files (index.md, etc.)
const rootFiles = fs.readdirSync(ROOT, { withFileTypes: true })
    .filter(e => e.isFile() && e.name.endsWith('.md') && e.name.toLowerCase() !== 'readme.md')
    .map(e => ({
        name: formatName(e.name.replace(/\.md$/, '')),
        path: e.name,
        type: 'file',
    }));

const manifest = {
    categories,
    rootFiles,
    totalFiles,
    generatedAt: new Date().toISOString(),
};

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2));
console.log(`Generated ${OUTPUT}`);
console.log(`  Categories: ${categories.length}`);
console.log(`  Total files: ${totalFiles}`);
