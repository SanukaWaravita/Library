import { motion } from 'framer-motion'

export default function CategoryAnchor({ category, position, onClick, mouse }) {
  const parallaxX = (mouse?.x || 0) * 6
  const parallaxY = (mouse?.y || 0) * 6

  return (
    <motion.div
      className="anchor"
      onClick={() => onClick(category)}
      animate={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        scale: position.scale,
        opacity: position.opacity,
        filter: `blur(${position.blur}px)`,
        x: parallaxX - 32,
        y: parallaxY - 32,
      }}
      transition={{ type: 'spring', stiffness: 80, damping: 22 }}
    >
      <div
        className="anchor-sphere"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${category.color}, ${category.color}88 60%, transparent)`,
        }}
      />
      <span className="anchor-label" style={{ color: category.color }}>
        {category.name}
      </span>
      <span className="anchor-count">{category.notes.length} notes</span>
    </motion.div>
  )
}
