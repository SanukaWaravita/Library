import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fetchMarkdown } from '../engine/useNotes'
import { renderMarkdown } from '../engine/markdown'

export default function FocusedNoteCard({ note, visible, onBack, onClose }) {
  const [html, setHtml] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!note) return
    setLoading(true)
    setHtml('')
    fetchMarkdown(note.path)
      .then((md) => {
        setHtml(renderMarkdown(md))
        setLoading(false)
      })
      .catch(() => {
        setHtml('<p style="opacity:0.5">Failed to load note.</p>')
        setLoading(false)
      })
  }, [note])

  return (
    <AnimatePresence>
      {visible && note && (
        <motion.div
          className="focused-card"
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 40 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <div className="focused-card-header">
            <button className="focused-card-btn" onClick={onBack}>
              &larr; Index
            </button>
            <h2>{note.title}</h2>
            <button className="focused-card-btn" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="focused-card-body">
            {loading ? (
              <div className="focused-card-loading">Loading...</div>
            ) : (
              <div
                className="markdown-body"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
