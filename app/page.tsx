export default function Home() {
  return (
    <main className="bg-[#F5F1E8] text-[#1E1E1E]">

      {/* HERO SECTION */}

      <section
        className="relative h-[85vh] md:h-screen bg-cover bg-center flex items-center pt-24"
        style={{
          backgroundImage: "url('/images/hero-main.jpg')",
        }}
      >

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}

        <div className="relative z-10 px-6 md:px-20 max-w-6xl">

          <p className="text-[#7ED321] tracking-[5px] text-xs md:text-sm font-semibold mb-6">
            BESPOKE • EXECUTE • DELIVER
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-6 max-w-3xl">
            Bespoke Furniture &
            <br />
            Interior Execution Specialists
          </h1>

          <p className="text-gray-200 text-base md:text-xl max-w-2xl leading-relaxed mb-10">
            Premium bespoke furniture, hospitality environments,
            commercial interiors and execution solutions crafted
            around experience, functionality and long-term value.
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="/projects"
              className="bg-[#7ED321] hover:bg-[#6CB71B] transition px-8 py-4 rounded-full font-semibold text-black"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold text-white"
            >
              Start Your Project
            </a>

          </div>

        </div>

      </section>

      {/* TRUST SECTION */}

      <section className="py-14 bg-[#EFE8DA] overflow-hidden border-y border-black/5">

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-lg md:text-2xl font-semibold text-[#222] px-6 text-center">

          <span>RBI</span>
          <span>Rasta</span>
          <span>TOQUO</span>
          <span>Bajaj Electronics</span>
          <span>Kefi</span>
          <span>Hospitality Projects</span>
          <span>Commercial Interiors</span>
          <span>Bespoke Furniture</span>

        </div>

      </section>

      {/* FEATURED PROJECTS */}

      <section className="py-24 px-6 md:px-20 bg-[#F5F1E8]">

        <div className="mb-16">

          <p className="text-[#7ED321] tracking-[4px] text-sm font-semibold mb-5">
            FEATURED PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Built Around
            <br />
            Experience & Function
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className="group relative overflow-hidden rounded-[36px] shadow-xl">

            <img
              src="/images/hero-main.jpg"
              alt="Hospitality Project"
              className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 p-8 text-white">

              <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-4">
                HOSPITALITY
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                Premium Restaurant Experience
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Bespoke hospitality interiors designed around ambience,
                flow and customer experience.
              </p>

            </div>

          </div>

          {/* Card 2 */}

          <div className="group relative overflow-hidden rounded-[36px] shadow-xl">

            <img
              src="/images/hero-main.jpg"
              alt="Commercial Workspace"
              className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 p-8 text-white">

              <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-4">
                COMMERCIAL
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                Executive Workspace Solutions
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Practical commercial execution blended with premium
                detailing and functional planning.
              </p>

            </div>

          </div>

          {/* Card 3 */}

          <div className="group relative overflow-hidden rounded-[36px] shadow-xl">

            <img
              src="/images/hero-main.jpg"
              alt="Bespoke Furniture"
              className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 p-8 text-white">

              <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-4">
                BESPOKE
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                Curated Furniture & Detailing
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Crafted furniture and custom detailing solutions built
                around usability and aesthetics.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA STRIP */}

      <section className="py-24 px-6 md:px-20 bg-[#1F1F1F] text-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
              LET’S BUILD SOMETHING EXCEPTIONAL
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Spaces Designed
              <br />
              Around Real Use.
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              From hospitality environments and bespoke furniture
              to commercial execution and curated interiors,
              every project is approached with functionality,
              detailing and long-term value in mind.
            </p>

          </div>

          <div className="flex md:justify-end">

            <a
              href="/contact"
              className="bg-[#7ED321] hover:bg-[#6CB71B] transition px-10 py-5 rounded-full text-black font-semibold text-lg"
            >
              Start Your Project
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}