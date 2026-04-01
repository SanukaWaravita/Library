import { AnimatePresence, motion } from 'framer-motion'
import Scene from './components/Scene'
import CategoryAnchor from './components/CategoryAnchor'
import OrbitingCard from './components/OrbitingCard'
import CategoryIndexCard from './components/CategoryIndexCard'
import FocusedNoteCard from './components/FocusedNoteCard'
import Launcher from './components/Launcher'
import BackgroundEffects from './components/BackgroundEffects'
import { useNotes } from './engine/useNotes'
import { useLayout } from './engine/useLayout'
import { useAppState } from './engine/useAppState'

const MAX_VISIBLE_CARDS = 20

export default function App() {
  const { categories, loading } = useNotes()
  const {
    mode,
    selectedCategory,
    selectedNote,
    selectCategory,
    selectNote,
    goBack,
    goHome,
  } = useAppState()
  const { anchorPositions } = useLayout(categories, mode, selectedCategory)

  if (loading) {
    return (
      <div
        className="scene"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          style={{
            fontSize: 14,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          Loading...
        </motion.div>
      </div>
    )
  }

  return (
    <>
      <Scene>
        {(mouse) => (
          <>
            <BackgroundEffects />

            {categories.map((cat, i) => (
              <CategoryAnchor
                key={cat.name}
                category={cat}
                position={anchorPositions[i]}
                onClick={selectCategory}
                mouse={mouse}
              />
            ))}

            {categories.map((cat, catIdx) => {
              const pos = anchorPositions[catIdx]
              const visibleNotes = cat.notes.slice(0, MAX_VISIBLE_CARDS)
              const isSelectedCat = selectedCategory?.name === cat.name
              const cardVisible =
                mode === 'overview' ||
                (mode === 'category' && isSelectedCat) ||
                (mode === 'note' && isSelectedCat)

              return visibleNotes.map((note, noteIdx) => (
                <OrbitingCard
                  key={note.id}
                  note={note}
                  index={noteIdx}
                  total={visibleNotes.length}
                  anchorX={pos.x}
                  anchorY={pos.y}
                  color={cat.color}
                  visible={cardVisible}
                  onClick={() => {
                    if (mode === 'overview') {
                      selectCategory(cat)
                    } else {
                      selectNote(note)
                    }
                  }}
                  mouse={mouse}
                />
              ))
            })}
          </>
        )}
      </Scene>

      {/* UI overlay — not affected by parallax */}
      <AnimatePresence>
        {mode !== 'overview' && (
          <motion.button
            className="back-btn"
            onClick={goBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            &larr; Back
          </motion.button>
        )}
      </AnimatePresence>

      <CategoryIndexCard
        category={selectedCategory}
        visible={mode === 'category'}
        onSelectNote={selectNote}
        onClose={goBack}
      />

      <FocusedNoteCard
        note={selectedNote}
        visible={mode === 'note'}
        onBack={goBack}
        onClose={goHome}
      />

      <Launcher categories={categories} onSelectCategory={selectCategory} />
    </>
  )
}
