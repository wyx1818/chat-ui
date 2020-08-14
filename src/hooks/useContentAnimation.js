import { useSpring } from 'react-spring'

function useContentAnimation(duration = 1000, delay = 300) {
  return useSpring({
    transform: 'translate3d(0px, 0px, 0px)',
    opacity: 1,
    from: { transform: 'translate3d(100px, 0px, 0px)', opacity: 0 },
    config: {
      tension: 140,
      duration,
    },
    delay: delay,
  })
}

export default useContentAnimation
