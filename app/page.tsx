export default function HomePage() {

  const brands = [
    "/brands/rasta-logo.png",
    "/brands/kefi-logo.png",
    "/brands/jamun-logo.png",
    "/brands/dasara-logo.png",
    "/brands/rbi-logo.png",
    "/brands/bajaj-logo.png",
    "/brands/ascendas-logo.png",
    "/brands/airtel-logo.png",
    "/brands/flipspaces-logo.png",
    "/brands/happi-logo.png",
    "/brands/airo-logo.png",
    "/brands/utk-logo.png",
  ];

  return (
    <main className="bg-[#F5F1E8] text-[#1E1E1E] overflow-hidden">

      {/* HERO SECTION */}

      <section
        className="relative h-screen flex items-center px-6 md:px-20"
        style={{
          backgroundImage: "url('/images/hero-main.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-5xl text-white">

          <p className="text-[#7ED321] tracking-[5px] text-sm md:text-base font-bold mb-6 uppercase">
            FinecraftzPlus
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight font-semibold mb-8">
            Bespoke Furniture &
            <br />
            Interior Execution Specialists
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
            Hospitality, commercial and premium residential
            execution solutions crafted around detailing,
            experience and functionality.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/projects"
              className="bg-[#7ED321] hover:bg-[#6CB71B] transition px-8 py-4 rounded-full font-semibold text-black"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

      {/* CLIENTS / PARTNERS */}

      <section className="py-20 bg-white">

        <div className="text-center mb-14">

          <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-4">
            TRUSTED BY
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Hospitality, Commercial &
            <br />
            Retail Collaborations
          </h2>

        </div>

        <div className="px-6 md:px-20">

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">

            {brands.map((logo, index) => (

              <div
                key={index}
                className="flex items-center justify-center"
              >

                <img
                  src={logo}
                  alt="brand"
                  className="max-h-20 md:max-h-24 w-auto object-contain transition duration-300"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ABOUT PREVIEW */}

      <section className="px-6 md:px-20 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
              OUR STORY
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
              Rooted In Craftsmanship.
              <br />
              Built For Modern Spaces.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Rooted in the craftsmanship legacy of FINECRAFTZ,
              FinecraftzPlus carries forward over three decades
              of experience through modern execution,
              trusted partnerships and evolving design environments.
            </p>

            <a
              href="/about"
              className="inline-block bg-[#7ED321] hover:bg-[#6CB71B] transition px-8 py-4 rounded-full font-semibold text-black"
            >
              Learn More
            </a>

          </div>

          <div>

            <img
              src="/images/hero-main.jpg"
              alt="FinecraftzPlus"
              className="rounded-[36px] shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* SOLUTIONS */}

      <section className="px-6 md:px-20 pb-24">

        <div className="mb-16">

          <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
            SOLUTIONS
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Spaces Tailored Across
            <br />
            Diverse Environments.
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Hospitality & Restaurants",
            "Commercial Workspaces",
            "Residential Interiors",
            "Retail & Showrooms",
            "Educational Institutions",
            "Bespoke Furniture",
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[36px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-500"
            >

              <img
                src="/images/hero-main.jpg"
                alt={item}
                className="h-[280px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-semibold leading-tight mb-5">
                  {item}
                </h3>

                <a
                  href="https://wa.me/919177000010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#7ED321] hover:bg-[#6CB71B] transition px-6 py-3 rounded-full font-semibold text-black"
                >
                  Enquire
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}