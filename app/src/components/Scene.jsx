import { useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Scene({ children }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    // Normalize to -1..1
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setMouse({ x, y })
  }, [])

  return (
    <div className="scene" ref={ref} onMouseMove={handleMouseMove}>
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translate(${mouse.x * -4}px, ${mouse.y * -4}px)`,
        }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
      >
        {typeof children === 'function' ? children(mouse) : children}
      </motion.div>
      <div className="scene-title">Knowledge Library</div>
    </div>
  )
}
