import Image from "next/image"

import FormGift from "@/modules/form-gift/components/form-gift.component"

const Footer = () => {
  return (
    <footer className="footer text-center px-28 pt-16 pb-24 relative">
      <div className="absolute top-36 left-20">
        <Image
          alt="maps"
          src="/images/icon-love.svg"
          height={130}
          width={140}
        />
      </div>
      <h1 className="text-7xl text-white leading-normal">make them happier</h1>
      <p className="jost text-2xl text-white">
        you can send them special gift by fill this form below
      </p>
      <FormGift />
    </footer>
  )
}

export default Footer
