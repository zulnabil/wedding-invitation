const SectionCountdown = () => {
  return (
    <section className="countdown-wrapper flex justify-center">
      <div className="countdown-text p-10">
        <p className="text-white text-2xl">Countdown to happiest day ever</p>
        <p className="jost text-gray-600 text-2xl text-light">
          Don’t forget to attend, okay?
        </p>
      </div>
      <div className="countdown-number flex gap-5">
        <div className="countdown-number-item h-full bg-black bg-opacity-30 w-28 text-center flex flex-col justify-center">
          <p className="jost text-white text-5xl">20</p>
          <p className="jost text-gray-700 text-2xl text-light">days</p>
        </div>
        <div className="countdown-number-item h-full bg-black bg-opacity-30 w-28 text-center flex flex-col justify-center">
          <p className="jost text-white text-5xl">13</p>
          <p className="jost text-gray-700 text-2xl text-light">hours</p>
        </div>
        <div className="countdown-number-item h-full bg-black bg-opacity-30 w-28 text-center flex flex-col justify-center">
          <p className="jost text-white text-5xl">34</p>
          <p className="jost text-gray-700 text-2xl text-light">minutes</p>
        </div>
        <div className="countdown-number-item h-full bg-black bg-opacity-30 w-28 text-center flex flex-col justify-center">
          <p className="jost text-white text-5xl">12</p>
          <p className="jost text-gray-700 text-2xl text-light">seconds</p>
        </div>
      </div>
    </section>
  )
}

export default SectionCountdown
