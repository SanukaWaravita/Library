import { useState, useCallback } from 'react'

// States: 'overview' | 'category' | 'note'
export function useAppState() {
  const [mode, setMode] = useState('overview')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedNote, setSelectedNote] = useState(null)

  const selectCategory = useCallback((cat) => {
    setSelectedCategory(cat)
    setSelectedNote(null)
    setMode('category')
  }, [])

  const selectNote = useCallback((note) => {
    setSelectedNote(note)
    setMode('note')
  }, [])

  const goBack = useCallback(() => {
    if (mode === 'note') {
      setSelectedNote(null)
      setMode('category')
    } else if (mode === 'category') {
      setSelectedCategory(null)
      setMode('overview')
    }
  }, [mode])

  const goHome = useCallback(() => {
    setSelectedNote(null)
    setSelectedCategory(null)
    setMode('overview')
  }, [])

  return {
    mode,
    selectedCategory,
    selectedNote,
    selectCategory,
    selectNote,
    goBack,
    goHome,
  }
}
