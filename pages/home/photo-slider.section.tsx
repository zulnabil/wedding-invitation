import { FC } from "react"
import { PhotoSliderProps } from "./types/photo-slider.type"
import Slider from "@/common/components/utils/slider.component"

const SectionPhotoSlider: FC<PhotoSliderProps> = ({ images }) => {
  return (
    <section>
      <Slider>
        {images.map((image) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={image.alt} {...image} alt={image.alt} />
        ))}
      </Slider>
    </section>
  )
}

export default SectionPhotoSlider
