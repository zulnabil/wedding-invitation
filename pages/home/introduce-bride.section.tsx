import { FC } from "react"
import Image from "next/image"
import type { IntroduceBrideProps } from "./types/introduce-bride.type"

const SectionIntroduceBride: FC<IntroduceBrideProps> = ({ male, female }) => {
  return (
    <section className="introduce-bride text-center p-24">
      <h1 className="text-6xl leading-normal">
        we are getting <span className="text-green">married</span>
      </h1>
      <p className="jost text-gray-400">and build our new live</p>
      <div className="jost bride-wrapper mt-16 flex justify-around items-center">
        <div className="bride-card m-6">
          <Image alt="female" src={female.photo} height={345} width={371} />
          <p className="text-4xl mt-10">{female.name}</p>
          <p className="text-gray-400 mt-3">{female.childOrder}</p>
          <p className="text-gray-400">{female.parents}</p>
        </div>
        <div className="bride-card m-6">
          <Image alt="male" src={male.photo} height={345} width={371} />
          <p className="text-4xl mt-10">{male.name}</p>
          <p className="text-gray-400 mt-3">{male.childOrder}</p>
          <p className="text-gray-400">{male.parents}</p>
        </div>
      </div>
    </section>
  )
}

export default SectionIntroduceBride
