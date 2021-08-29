import { FC } from "react"

import type { VideoPreviewProps } from "./types/video-preview.type"

import { createMarkup } from "@/common/utils/common.util"

const SectionVideoPreview: FC<VideoPreviewProps> = ({ embedHtml }) => {
  return (
    <section
      className="embed-html-wrapper flex justify-center relative h-0 mt-4 mb-8 mx-7 sm:mt-10 sm:mb-16 sm:mx-14"
      dangerouslySetInnerHTML={createMarkup(embedHtml)}
    ></section>
  )
}

export default SectionVideoPreview
