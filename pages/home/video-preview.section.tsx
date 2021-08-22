import { FC } from "react"

import type { VideoPreviewProps } from "./types/video-preview.type"

import { createMarkup } from "@/common/utils/common.util"

const SectionVideoPreview: FC<VideoPreviewProps> = ({ embedHtml }) => {
  return (
    <section
      className="embed-html-wrapper flex justify-center relative h-0 my-10 mx-14"
      dangerouslySetInnerHTML={createMarkup(embedHtml)}
    ></section>
  )
}

export default SectionVideoPreview
