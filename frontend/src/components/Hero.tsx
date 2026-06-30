const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div>
          <h1 className="max-w-xl text-5xl font-bold leading-tight text-slate-900">
            Everything Your Workspace Needs
          </h1>

          <p className="mt-6 max-w-md text-lg leading-7 text-slate-500">
            Office essentials, business supplies,
            <br />
            and books in one place.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
              Shop Now
            </button>

            <button className="rounded-lg border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
              Explore Books
            </button>
          </div>

          <p className="mt-10 text-sm text-slate-400">
            Trusted by students, professionals, and businesses.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="flex h-[360px] w-full max-w-md items-center justify-center rounded-2xl bg-slate-200 text-3xl font-medium text-slate-500">
            Hero Image
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;