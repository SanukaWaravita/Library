import { useState, useEffect } from 'react'

// Flatten the nested content.json into a simple array of notes per category
function flattenFiles(children, categoryName) {
  const files = []
  for (const child of children) {
    if (child.type === 'file') {
      files.push({
        id: child.path,
        title: child.name,
        path: child.path,
        category: categoryName,
      })
    } else if (child.type === 'folder' && child.children) {
      files.push(...flattenFiles(child.children, categoryName))
    }
  }
  return files
}

const CATEGORY_COLORS = {
  JavaScript: '#f0db4f',
  Java: '#f89820',
  'System Analysis & Design': '#4fc3f7',
  'Misc / Inbox': '#a78bfa',
}

export function useNotes() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('./content.json')
      .then((r) => r.json())
      .then((data) => {
        const cats = data.categories.map((cat) => ({
          name: cat.name,
          path: cat.path,
          color: CATEGORY_COLORS[cat.name] || '#888',
          notes: flattenFiles(cat.children || [], cat.name),
        }))
        setCategories(cats)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load content.json', err)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export async function fetchMarkdown(path) {
  const res = await fetch(`./${path}`)
  if (!res.ok) throw new Error(`Failed to fetch ${path}`)
  return res.text()
}
