const SectionGuestBook = () => {
  return (
    <section className="mt-16 sm:mt-32 text-center">
      <h1 className="text-3xl sm:text-6xl leading-normal">
        guest book, <span className="text-green">please</span>
      </h1>
      <p className="jost text-gray-400 text-sm sm:text-base">
        so we’ll know if you attend to our wedding
      </p>
      <button className="bg-green text-white py-3 px-8 rounded-full m-4 jost">
        Fill guest book form
      </button>
    </section>
  )
}

export default SectionGuestBook
