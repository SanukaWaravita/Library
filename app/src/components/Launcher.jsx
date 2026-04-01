import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Launcher({ categories, onSelectCategory }) {
  const [open, setOpen] = useState(false)

  const handleSelect = (cat) => {
    onSelectCategory(cat)
    setOpen(false)
  }

  return (
    <>
      <button className="launcher-fab" onClick={() => setOpen((o) => !o)}>
        <svg viewBox="0 0 24 24">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="category-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
          >
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="category-panel-item"
                onClick={() => handleSelect(cat)}
              >
                <div
                  className="category-panel-dot"
                  style={{ background: cat.color }}
                />
                <span className="category-panel-name">{cat.name}</span>
                <span className="category-panel-count">
                  {cat.notes.length}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
