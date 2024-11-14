import React, { useState, useEffect } from 'react'
import { useSpring, animated, useTransition } from '@react-spring/web'

const ScrollingText = () => {
  const descriptors = ['Software Engineer', 'Developer', 'Programmer', 'Code Enthusiast']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % descriptors.length)
    }, 1500) 
    return () => clearInterval(interval)
  }, [descriptors.length])

  const transitions = useTransition(index, {
    from: { opacity: 0, transform: 'translateY(-80%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(80%)' },
    config: { duration: 1000 },
  })

  return (
    <div style={{ overflow: 'hidden', height: '10px' }}>
      {transitions((style, i) => (
        <animated.div style={{ ...style, position: 'absolute' }}>
          <h2>{descriptors[i]}</h2>
        </animated.div>
      ))}
    </div>
  )
}

export default ScrollingText
