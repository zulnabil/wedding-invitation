import { FC } from "react"
import Image from "next/image"

import type { DatePlaceProps } from "./types/date-place.type"

const SectionDatePlace: FC<DatePlaceProps> = ({ place, date, time }) => {
  return (
    <section className="p-8 text-center">
      <h1 className="mt-32 text-6xl leading-normal text-gray-800">
        our wedding
      </h1>
      <p className="jost text-gray-400">will be held at</p>
      <div className="address-date-wrapper flex justify-around">
        <div className="address-container flex items-start gap-4 mt-20">
          <Image
            alt="icon-address"
            src="/images/icon-address.svg"
            height={32}
            width={32}
          />
          <div className="address-text w-96 text-left">
            <p className="text-xl">{place.title}</p>
            <p className="jost text-light">{place.address}</p>
          </div>
        </div>
        <div className="address-container flex items-start gap-4 mt-20">
          <Image
            alt="icon-address"
            src="/images/icon-address.svg"
            height={32}
            width={32}
          />
          <div className="address-text w-96 text-left">
            <p className="text-xl">Date & Time</p>
            <p className="jost text-light">
              {date} - {time}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionDatePlace
