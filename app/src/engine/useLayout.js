import { useMemo } from 'react'

// Distribute 4 anchors in a balanced layout across the viewport
export function useLayout(categories, mode, selectedCategory) {
  const anchorPositions = useMemo(() => {
    if (categories.length === 0) return []

    // Base positions as percentages of viewport
    const basePositions = [
      { x: 25, y: 30 },
      { x: 75, y: 30 },
      { x: 25, y: 70 },
      { x: 75, y: 70 },
    ]

    return categories.map((cat, i) => {
      const base = basePositions[i] || { x: 50, y: 50 }
      const isSelected = selectedCategory?.name === cat.name

      if (mode === 'category' || mode === 'note') {
        if (isSelected) {
          return { ...base, x: 50, y: 45, scale: 1.1, opacity: 1, blur: 0 }
        }
        // Push non-selected anchors to edges
        return {
          x: base.x < 50 ? base.x - 10 : base.x + 10,
          y: base.y < 50 ? base.y - 10 : base.y + 10,
          scale: 0.7,
          opacity: 0.3,
          blur: 3,
        }
      }

      return { ...base, scale: 1, opacity: 1, blur: 0 }
    })
  }, [categories, mode, selectedCategory])

  return { anchorPositions }
}

// Compute orbital positions for note cards around an anchor
export function getOrbitalPosition(index, total, anchorX, anchorY, time, radiusX = 120, radiusY = 80) {
  const angleStep = (2 * Math.PI) / Math.max(total, 1)
  const baseAngle = index * angleStep
  const speed = 0.0002 + (index % 5) * 0.00005
  const angle = baseAngle + time * speed

  // Vary radius slightly per card for organic feel
  const rVariance = 1 + (index % 3) * 0.15
  const x = anchorX + radiusX * rVariance * Math.cos(angle)
  const y = anchorY + radiusY * rVariance * Math.sin(angle)

  return { x, y }
}
