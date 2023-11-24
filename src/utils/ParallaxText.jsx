import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap
} from 'framer-motion'
import { useRef } from 'react'

export const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0)
  const x = useTransform(baseX, v => `${wrap(-20, -50, v)}%`)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })
  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    // if (velocityFactor.get() < 0) {
    // directionFactor.current = -1;
    // } else if (velocityFactor.get() > 0) {
    // directionFactor.current = 1;
    // }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })
  return (
    <motion.div className='flex flex-row gap-24' style={{ x }}>
      {children}
      {children}
    </motion.div>
  )
}
