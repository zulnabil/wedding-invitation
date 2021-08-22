import { FC } from "react"

import type { MapLocationProps } from "./types/map-location.type"
import { createMarkup } from "@/common/utils/common.util"

import Button from "@/common/components/inputs/button.component"

const SectionMapLocation: FC<MapLocationProps> = ({ embedHtml }) => {
  return (
    <section className="embed-html-wrapper flex justify-center relative h-0 my-10">
      <div dangerouslySetInnerHTML={createMarkup(embedHtml)}></div>
      <Button className="absolute bottom-0 transform translate-y-5 shadow-md">
        Navigate me to location
      </Button>
    </section>
  )
}

export default SectionMapLocation
