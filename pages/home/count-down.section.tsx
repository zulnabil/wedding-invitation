const SectionCountdown = () => {
  return (
    <section className="countdown-wrapper flex justify-center flex-wrap">
      <div className="countdown-text p-6 sm:p-10 text-center sm:text-left text-xl sm:text-2xl">
        <p className="text-white">Countdown to happiest day ever</p>
        <p className="jost text-gray-600 text-light">
          Don’t forget to attend, okay?
        </p>
      </div>
      <div className="flex gap-5">
        <div className="h-full bg-black bg-opacity-30 py-6 sm:py-0 w-20 sm:w-28 text-center flex flex-col justify-center">
          <p className="jost text-white text-3xl sm:text-5xl">20</p>
          <p className="jost text-gray-700 text-xl sm:text-2xl text-light">
            days
          </p>
        </div>
        <div className="h-full bg-black bg-opacity-30 py-6 sm:py-0 w-20 sm:w-28 text-center flex flex-col justify-center">
          <p className="jost text-white text-3xl sm:text-5xl">13</p>
          <p className="jost text-gray-700 text-xl sm:text-2xl text-light">
            hours
          </p>
        </div>
        <div className="h-full bg-black bg-opacity-30 py-6 sm:py-0 w-20 sm:w-28 text-center flex flex-col justify-center">
          <p className="jost text-white text-3xl sm:text-5xl">34</p>
          <p className="jost text-gray-700 text-xl sm:text-2xl text-light">
            minutes
          </p>
        </div>
        <div className="h-full bg-black bg-opacity-30 py-6 sm:py-0 w-20 sm:w-28 text-center flex flex-col justify-center">
          <p className="jost text-white text-3xl sm:text-5xl">12</p>
          <p className="jost text-gray-700 text-xl sm:text-2xl text-light">
            seconds
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionCountdown
