export default function CollectionsPage() {
  return (
    <main className="bg-[#F5F1E8] text-[#1E1E1E] pt-32">

      {/* HERO */}

      <section className="px-6 md:px-20 pb-20">

        <div className="max-w-5xl">

          <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
            CURATED COLLECTIONS
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            Furniture & Interior
            <br />
            Solutions Built Around Real Use.
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl">
            Curated furniture setups and interior solutions
            designed for homes, hospitality spaces, offices,
            student living and evolving lifestyle environments.
          </p>

        </div>

      </section>

      {/* COLLECTION GRID */}

      <section className="px-6 md:px-20 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}

          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg">

            <img
              src="/images/hero-main.jpg"
              alt="Newlywed Package"
              className="h-[300px] w-full object-cover"
            />

            <div className="p-8">

              <p className="text-[#7ED321] text-sm font-bold tracking-[3px] mb-4">
                HOME COLLECTION
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Newlywed Home Setup
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Curated furniture and interior combinations
                designed for compact modern family living.
              </p>

              <a
                href="https://wa.me/919177000010"
                target="_blank"
                className="inline-block bg-[#7ED321] hover:bg-[#6CB71B] transition px-6 py-3 rounded-full font-semibold text-black"
              >
                Enquire On WhatsApp
              </a>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg">

            <img
              src="/images/hero-main.jpg"
              alt="Student Living"
              className="h-[300px] w-full object-cover"
            />

            <div className="p-8">

              <p className="text-[#7ED321] text-sm font-bold tracking-[3px] mb-4">
                STUDENT LIVING
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Student Room Essentials
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Smart furniture combinations for students,
                compact rooms and practical everyday usage.
              </p>

              <a
                href="https://wa.me/919177000010"
                target="_blank"
                className="inline-block bg-[#7ED321] hover:bg-[#6CB71B] transition px-6 py-3 rounded-full font-semibold text-black"
              >
                Enquire On WhatsApp
              </a>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg">

            <img
              src="/images/hero-main.jpg"
              alt="Office Setup"
              className="h-[300px] w-full object-cover"
            />

            <div className="p-8">

              <p className="text-[#7ED321] text-sm font-bold tracking-[3px] mb-4">
                WORKSPACE
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Office Starter Setup
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Functional office furniture and execution
                solutions for modern work environments.
              </p>

              <a
                href="https://wa.me/919177000010"
                target="_blank"
                className="inline-block bg-[#7ED321] hover:bg-[#6CB71B] transition px-6 py-3 rounded-full font-semibold text-black"
              >
                Enquire On WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}