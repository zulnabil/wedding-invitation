import { FC } from "react"
import { PhotoSliderProps } from "./types/photo-slider.type"

const SectionPhotoSlider: FC<PhotoSliderProps> = ({ images }) => {
  return (
    <section className="slider-image-wrapper flex gap-8 w-full whitespace-nowrap overflow-auto">
      {images.map((image) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={image.alt} {...image} alt={image.alt} />
      ))}
    </section>
  )
}

export default SectionPhotoSlider
