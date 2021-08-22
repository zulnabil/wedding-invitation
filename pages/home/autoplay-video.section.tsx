import { FC } from "react"
import Image from "next/image"

import type { AutoPlayProps } from "./types/auto-play.type"

const SectionAutoPlayVideo: FC<AutoPlayProps> = ({
  maleNickname,
  femaleNickname,
  date,
  time,
}) => {
  return (
    <section className="relative">
      <Image
        src="/images/bg1.jpg"
        alt="bg-1"
        layout="responsive"
        height={802}
        width={1440}
      />
      <div className="absolute top-0 text-center text-white w-full h-full">
        <div className="absolute top-10 w-full jost">
          <p className="font-light">Wedding Invitation</p>
        </div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl text-white w-full">
          {femaleNickname} & {maleNickname}
        </h1>
        <div className="absolute bottom-24 w-full jost">
          <p className="font-light">will be held at</p>
          <p className="font-medium">
            {date}, {time}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionAutoPlayVideo
