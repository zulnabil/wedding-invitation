import { FC, MouseEvent, useCallback, useRef, useState } from "react"
import type { SliderProps } from "./types/slider.type"

const Slider: FC<SliderProps> = ({ children, className = "" }) => {
  const sliderReference = useRef<HTMLDivElement>(null)
  const [isScrolling, setScrolling] = useState(false)
  const [clientX, setClientX] = useState(0)
  const [scrollX, setScrollX] = useState(0)

  const handleMouseDown = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      setScrolling(true)
      setClientX(event.clientX)
    },
    [setScrolling, setClientX]
  )

  const handleMouseUp = useCallback(() => {
    setScrolling(false)
  }, [setScrolling])

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (isScrolling && sliderReference.current) {
        const scrollLeft = scrollX + clientX - event.clientX
        sliderReference.current.scrollLeft = scrollLeft
        setScrollX(scrollLeft)
        setClientX(event.clientX)
      }
    },
    [isScrolling, sliderReference, scrollX, clientX, setScrollX, setClientX]
  )

  return (
    <div
      ref={sliderReference}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={`slider-wrapper flex gap-8 w-full whitespace-nowrap overflow-auto ${
        isScrolling ? "cursor-grabbing" : "cursor-grab"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Slider
