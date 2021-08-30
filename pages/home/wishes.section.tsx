import { FC } from "react"

import type { WishesProps } from "./types/wishes.type"

const SectionWishes: FC<WishesProps> = ({ wishes }) => {
  return (
    <section className="mt-8 sm:mt-20 text-center py-10 sm:py-20 px-2 sm:px-0">
      <p className="text-2xl sm:text-3xl leading-normal">
        Big thanks from us to <span className="text-green">all of you</span>
      </p>
      <div className="card-wrapper flex justify-center flex-wrap gap-4 sm:gap-8 mt-8">
        {wishes.map(({ name, text }) => (
          <div
            key={name}
            className="card-item p-3 sm:p-8 max-w-64 text-sm sm:text-base rounded-lg border border-gray-300 shadow-2xl"
          >
            <p className="jost">{text}</p>
            <p className="text-gray-400">{name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionWishes
