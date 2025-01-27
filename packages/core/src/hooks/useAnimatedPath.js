// import { interpolateString } from 'd3-interpolate'
import { useEffect, useMemo, useRef } from 'react'
import { useSpring, to } from '@react-spring/web'
import { useMotionConfig } from '../motion'

const usePrevious = value => {
    const ref = useRef()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

export const useAnimatedPath = path => {
    const { animate, config: springConfig } = useMotionConfig()

    const previousPath = usePrevious(path)
    const interpolator = useMemo(() => '', [])

    const { value } = useSpring({
        from: { value: 0 },
        to: { value: 1 },
        reset: true,
        config: springConfig,
        immediate: !animate,
    })

    return to(value, interpolator)
}
