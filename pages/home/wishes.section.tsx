import { FC } from "react"

import type { WishesProps } from "./types/wishes.type"

const SectionWishes: FC<WishesProps> = ({ wishes }) => {
  return (
    <section className="mt-20 text-center py-20">
      <p className="text-3xl leading-normal">
        Big thanks from us to <span className="text-green">all of you</span>
      </p>
      <div className="card-wrapper flex justify-center gap-8 mt-8">
        {wishes.map(({ name, text }) => (
          <div
            key={name}
            className="card-item p-8 w-64 rounded-lg border border-gray-300 shadow-2xl"
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
