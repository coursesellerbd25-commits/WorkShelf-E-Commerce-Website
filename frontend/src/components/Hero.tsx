const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 md:gap-14 md:px-8 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        {/* Left */}
        <div>
          <h1 className="max-w-xl text-[36px] font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Everything Your Workspace Needs
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-500 md:mt-6 md:text-lg md:leading-7">
            Office essentials, business supplies,
            <br />
            and books in one place.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
            <button className="h-11 rounded-lg bg-blue-600 px-8 text-sm font-semibold text-white transition hover:bg-blue-700">
              Shop Now
            </button>

            <button className="h-11 rounded-lg border border-blue-600 px-8 text-sm font-semibold text-blue-600 transition hover:bg-blue-50">
              Explore Books
            </button>
          </div>

          <p className="mt-6 text-xs text-slate-400 md:mt-10 md:text-sm">
            Trusted by students, professionals, and businesses.
          </p>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <div className="flex h-48 w-full max-w-sm items-center justify-center rounded-2xl bg-slate-200 text-xl font-medium text-slate-500 md:h-72 md:max-w-md lg:h-[360px]">
            Hero Image
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;