import { motion, AnimatePresence } from 'framer-motion'

export default function CategoryIndexCard({ category, visible, onSelectNote, onClose }) {
  return (
    <AnimatePresence>
      {visible && category && (
        <motion.div
          className="index-card"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <div className="index-card-header">
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: category.color,
                flexShrink: 0,
              }}
            />
            <h2>{category.name}</h2>
            <button className="index-card-close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="index-card-list">
            {category.notes.map((note) => (
              <div
                key={note.id}
                className="index-card-note"
                onClick={() => onSelectNote(note)}
              >
                {note.title}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
