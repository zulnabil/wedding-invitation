import { FC, MouseEvent, useRef, useState } from "react"
import { PhotoSliderProps } from "./types/photo-slider.type"

const SectionPhotoSlider: FC<PhotoSliderProps> = ({ images }) => {
  const sliderReference = useRef<HTMLDivElement>(null)
  const [isScrolling, setScrolling] = useState(false)
  const [clientX, setClientX] = useState(0)
  const [scrollX, setScrollX] = useState(0)

  const handleMouseDown = (event: MouseEvent<HTMLElement>) => {
    setScrolling(true)
    setClientX(event.clientX)
  }

  const handleMouseUp = () => {
    setScrolling(false)
  }

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (isScrolling && sliderReference.current) {
      const scrollLeft = scrollX + clientX - event.clientX
      sliderReference.current.scrollLeft = scrollLeft
      setScrollX(scrollLeft)
      setClientX(event.clientX)
    }
  }

  return (
    <section
      ref={sliderReference}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={`slider-wrapper flex gap-8 w-full whitespace-nowrap overflow-auto ${
        isScrolling ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      {images.map((image) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={image.alt} {...image} alt={image.alt} />
      ))}
    </section>
  )
}

export default SectionPhotoSlider
