#!/usr/bin/env bash
# Syncs note files from the source directories into website/public/notes/
# Run this before building the website so the React app can serve the latest notes.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
PUBLIC_NOTES="$SCRIPT_DIR/public/notes"

# Clean previous copy
rm -rf "$PUBLIC_NOTES"
mkdir -p "$PUBLIC_NOTES"

# Copy note directories (preserving structure)
cp -r "$ROOT_DIR/java" "$PUBLIC_NOTES/java"
cp -r "$ROOT_DIR/javascript" "$PUBLIC_NOTES/javascript"

echo "Notes synced to $PUBLIC_NOTES"
