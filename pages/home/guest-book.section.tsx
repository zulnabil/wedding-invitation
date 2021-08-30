import FormGuestBook from "@/modules/form-guest-book/components/form-guest-book.component"
import { useCallback, useState } from "react"

const SectionGuestBook = () => {
  const [isShow, setShow] = useState(false)

  const handleShow = useCallback((): void => {
    setShow((prevState) => !prevState)
  }, [setShow])

  return (
    <section className="mt-16 sm:mt-32 text-center">
      <h1 className="text-3xl sm:text-6xl leading-normal">
        guest book, <span className="text-green">please</span>
      </h1>
      <p className="jost text-gray-400 text-sm sm:text-base">
        so we’ll know if you attend to our wedding
      </p>
      {isShow && <FormGuestBook />}
      <button
        className={`bg-green text-white py-3 px-8 rounded-full m-4 jost ${
          isShow && "hidden"
        }`}
        onClick={handleShow}
      >
        Fill guest book form
      </button>
    </section>
  )
}

export default SectionGuestBook
