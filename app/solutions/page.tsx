export default function SolutionsPage() {
  return (
    <main className="bg-[#F5F1E8] text-[#1E1E1E] pt-32">

      {/* HERO */}

      <section className="px-6 md:px-20 pb-20">

        <div className="max-w-5xl">

          <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
            SOLUTIONS
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            Built Around
            <br />
            Real Environments.
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl">
            Curated furniture and interior execution solutions
            tailored across residential, hospitality, commercial,
            institutional and lifestyle environments.
          </p>

        </div>

      </section>

      {/* SOLUTIONS GRID */}

      <section className="px-6 md:px-20 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Residential */}

          <a
            href="https://wa.me/919177000010?text=Hello%20FinecraftzPlus,%20I’m%20interested%20in%20Residential%20Interior%20Solutions."
            target="_blank"
            className="group bg-white rounded-[36px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500"
          >

            <img
              src="/images/hero-main.jpg"
              alt="Residential"
              className="h-[300px] w-full object-cover"
            />

            <div className="p-8">

              <p className="text-[#7ED321] text-sm font-bold tracking-[4px] mb-4">
                RESIDENTIAL
              </p>

              <h2 className="text-3xl font-semibold mb-4">
                1–4 BHK & Villa Packages
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Curated furniture and interior solutions for
                apartments, villas and modern family living.
              </p>

            </div>

          </a>

          {/* Hospitality */}

          <a
            href="https://wa.me/919177000010?text=Hello%20FinecraftzPlus,%20I’m%20interested%20in%20Restaurant%20and%20Hospitality%20Solutions."
            target="_blank"
            className="group bg-white rounded-[36px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500"
          >

            <img
              src="/images/hero-main.jpg"
              alt="Hospitality"
              className="h-[300px] w-full object-cover"
            />

            <div className="p-8">

              <p className="text-[#7ED321] text-sm font-bold tracking-[4px] mb-4">
                HOSPITALITY
              </p>

              <h2 className="text-3xl font-semibold mb-4">
                Restaurants & Cafés
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Interior execution and bespoke hospitality
                environments designed around customer experience.
              </p>

            </div>

          </a>

          {/* Offices */}

          <a
            href="https://wa.me/919177000010?text=Hello%20FinecraftzPlus,%20I’m%20interested%20in%20Office%20Interior%20Solutions."
            target="_blank"
            className="group bg-white rounded-[36px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500"
          >

            <img
              src="/images/hero-main.jpg"
              alt="Office"
              className="h-[300px] w-full object-cover"
            />

            <div className="p-8">

              <p className="text-[#7ED321] text-sm font-bold tracking-[4px] mb-4">
                COMMERCIAL
              </p>

              <h2 className="text-3xl font-semibold mb-4">
                Offices & Workspaces
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Functional workspace execution solutions
                built around productivity and aesthetics.
              </p>

            </div>

          </a>

          {/* Retail */}

          <a
            href="https://wa.me/919177000010?text=Hello%20FinecraftzPlus,%20I’m%20interested%20in%20Retail%20and%20Showroom%20Solutions."
            target="_blank"
            className="group bg-white rounded-[36px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500"
          >

            <img
              src="/images/hero-main.jpg"
              alt="Retail"
              className="h-[300px] w-full object-cover"
            />

            <div className="p-8">

              <p className="text-[#7ED321] text-sm font-bold tracking-[4px] mb-4">
                RETAIL
              </p>

              <h2 className="text-3xl font-semibold mb-4">
                Retail & Showrooms
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Bespoke retail environments crafted around
                display efficiency and customer movement.
              </p>

            </div>

          </a>

          {/* Educational */}

          <a
            href="https://wa.me/919177000010?text=Hello%20FinecraftzPlus,%20I’m%20interested%20in%20School%20and%20Institutional%20Furniture."
            target="_blank"
            className="group bg-white rounded-[36px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500"
          >

            <img
              src="/images/hero-main.jpg"
              alt="Educational"
              className="h-[300px] w-full object-cover"
            />

            <div className="p-8">

              <p className="text-[#7ED321] text-sm font-bold tracking-[4px] mb-4">
                EDUCATIONAL
              </p>

              <h2 className="text-3xl font-semibold mb-4">
                Schools & Institutes
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Furniture and interior solutions for
                educational and institutional environments.
              </p>

            </div>

          </a>

          {/* Pubs */}

          <a
            href="https://wa.me/919177000010?text=Hello%20FinecraftzPlus,%20I’m%20interested%20in%20Pub%20and%20Lounge%20Interiors."
            target="_blank"
            className="group bg-white rounded-[36px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500"
          >

            <img
              src="/images/hero-main.jpg"
              alt="Pubs"
              className="h-[300px] w-full object-cover"
            />

            <div className="p-8">

              <p className="text-[#7ED321] text-sm font-bold tracking-[4px] mb-4">
                LIFESTYLE
              </p>

              <h2 className="text-3xl font-semibold mb-4">
                Pubs & Lounges
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Premium hospitality environments designed
                around ambience, seating and experience.
              </p>

            </div>

          </a>

        </div>

      </section>

    </main>
  );
}