export default function AboutPage() {
  return (
    <main className="bg-[#F5F1E8] text-[#1E1E1E] pt-32">

      {/* HERO */}

      <section className="px-6 md:px-20 pb-24">

        <div className="max-w-5xl">

          <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
            ABOUT FINECRAFTZPLUS
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            Built Through Experience,
            <br />
            Relationships & Execution.
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl">
            Rooted in the craftsmanship legacy of FINECRAFTZ,
            FinecraftzPlus carries forward over three decades
            of experience through modern execution, trusted
            partnerships and evolving design environments.
          </p>

        </div>

      </section>

      {/* STORY */}

      <section className="px-6 md:px-20 py-24 bg-[#EFE8DA]">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div>

            <img
              src="/images/hero-main.jpg"
              alt="About FinecraftzPlus"
              className="rounded-[36px] shadow-xl object-cover"
            />

          </div>

          <div>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-8">
              From A Small Workshop In Begumpet
              <br />
              To Pan-India Execution
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              What began as a small workshop in Begumpet nearly
              30 years ago steadily evolved through craftsmanship,
              long-term workforce dedication, trusted vendor ecosystems
              and practical execution expertise.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Built on the strong foundation of FINECRAFTZ,
              FinecraftzPlus represents the next evolution of
              bespoke furniture and interior execution across
              hospitality, commercial and premium residential spaces.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Working closely with architects, consultants,
              businesses and homeowners, the focus remains on
              quality, coordination, detailing and dependable delivery.
            </p>

          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="px-6 md:px-20 py-24">

        <div className="text-center mb-20">

          <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
            OUR FOUNDATION
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            What Continues To Drive Us
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-[32px] p-10 shadow-sm">

            <h3 className="text-2xl font-semibold mb-5">
              Craftsmanship
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Attention to detailing, materials and execution quality
              continues to remain central to every project.
            </p>

          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm">

            <h3 className="text-2xl font-semibold mb-5">
              Reliability
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Long-term relationships are built through practical
              delivery, communication and dependable execution.
            </p>

          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm">

            <h3 className="text-2xl font-semibold mb-5">
              Adaptability
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Every project environment is different. Flexibility,
              coordination and problem-solving remain key strengths.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}