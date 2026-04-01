import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getOrbitalPosition } from '../engine/useLayout'

export default function OrbitingCard({
  note,
  index,
  total,
  anchorX,
  anchorY,
  color,
  visible,
  onClick,
  mouse,
}) {
  const [time, setTime] = useState(Date.now())
  const rafRef = useRef()

  useEffect(() => {
    const tick = () => {
      setTime(Date.now())
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  // Convert anchor percentage to approximate pixel values
  const ax = (anchorX / 100) * window.innerWidth
  const ay = (anchorY / 100) * window.innerHeight

  // Scale radius based on total notes (more notes = wider orbit)
  const radiusX = 100 + Math.min(total, 20) * 8
  const radiusY = 60 + Math.min(total, 20) * 5

  const pos = getOrbitalPosition(index, total, ax, ay, time, radiusX, radiusY)

  const parallaxX = (mouse?.x || 0) * 10
  const parallaxY = (mouse?.y || 0) * 10

  return (
    <motion.div
      className="orbit-card"
      onClick={() => onClick(note)}
      animate={{
        left: pos.x + parallaxX - 55,
        top: pos.y + parallaxY - 16,
        opacity: visible ? 0.7 : 0,
        scale: visible ? 1 : 0.6,
      }}
      transition={{ type: 'tween', duration: 0.8, ease: 'easeInOut' }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div className="orbit-card-dot" style={{ background: color }} />
      <div className="orbit-card-title">{note.title}</div>
    </motion.div>
  )
}
