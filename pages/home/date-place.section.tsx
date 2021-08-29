import { FC } from "react"
import Image from "next/image"

import type { DatePlaceProps } from "./types/date-place.type"

const SectionDatePlace: FC<DatePlaceProps> = ({ place, date, time }) => {
  return (
    <section className="p-4 sm:p-8 text-center">
      <h1 className="mt-8 sm:mt-32 text-3xl sm:text-6xl leading-normal text-gray-800">
        our wedding
      </h1>
      <p className="jost text-gray-400">will be held at</p>
      <div className="address-date-wrapper flex justify-around flex-wrap">
        <div className="address-container flex items-center sm:items-start gap-4 mt-10 sm:mt-20 flex-col sm:flex-row">
          <Image
            alt="icon-address"
            src="/images/icon-address.svg"
            height={32}
            width={32}
          />
          <div className="address-text max-w-96 sm:w-96 text-center sm:text-left">
            <p className="text-xl">{place.title}</p>
            <p className="jost text-light mt-2">{place.address}</p>
          </div>
        </div>
        <div className="address-container flex items-center sm:items-start gap-4 mt-10 sm:mt-20 flex-col sm:flex-row">
          <Image
            alt="icon-date"
            src="/images/icon-date.svg"
            height={32}
            width={32}
          />
          <div className="address-text max-w-96 sm:w-96 text-center sm:text-left">
            <p className="text-xl">Date & Time</p>
            <p className="jost text-light mt-2">
              {date} - {time}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionDatePlace
