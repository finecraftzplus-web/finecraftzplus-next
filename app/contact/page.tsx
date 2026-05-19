export default function ContactPage() {
  return (
    <main className="bg-[#F5F1E8] text-[#1E1E1E] pt-32">

      {/* HERO */}

      <section className="px-6 md:px-20 pb-20">

        <div className="max-w-5xl">

          <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
            CONTACT
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            Let’s Build
            <br />
            Something Exceptional.
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl">
            Reach out for bespoke furniture, hospitality interiors,
            commercial execution solutions and customized project discussions.
          </p>

        </div>

      </section>

      {/* CONTACT + FORM */}

      <section className="px-6 md:px-20 pb-16">

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT */}

          <div className="bg-white rounded-[36px] p-10 shadow-lg">

            <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
              GET IN TOUCH
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold mb-10">
              Contact Information
            </h2>

            <div className="space-y-8 text-lg">

              <div>

                <p className="font-semibold mb-2">
                  Phone / WhatsApp
                </p>

                <a
                  href="https://wa.me/919177000010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#7ED321] transition"
                >
                  +91 9177000010
                </a>

              </div>

              <div>

                <p className="font-semibold mb-2">
                  Email
                </p>

                <a
                  href="mailto:finecraftzplus@gmail.com"
                  className="text-gray-700 hover:text-[#7ED321] transition"
                >
                  finecraftzplus@gmail.com
                </a>

              </div>

              <div>

                <p className="font-semibold mb-2">
                  Instagram
                </p>

                <a
                  href="https://www.instagram.com/finecraftz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#7ED321] transition"
                >
                  @finecraftz
                </a>

              </div>

              <div>

                <p className="font-semibold mb-2">
                  Manufacturing Unit
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Finecraftz Manufacturing Unit
                  <br />
                  1-10-303, Street No. 7,
                  <br />
                  Brahmanwadi, Begumpet,
                  <br />
                  Hyderabad, Telangana,
                  <br />
                  India - 500016
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="bg-white rounded-[36px] p-10 shadow-lg">

            <p className="text-[#7ED321] tracking-[4px] text-sm font-bold mb-5">
              ENQUIRY FORM
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold mb-10">
              Start Your Project
            </h2>

            <form
              action="https://formspree.io/f/xaqknarq"
              method="POST"
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7ED321]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7ED321]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7ED321]"
              />

              <select
                name="project_type"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7ED321] bg-white"
              >
                <option>Select Project Type</option>
                <option>Residential Interiors</option>
                <option>Restaurant & Café Interiors</option>
                <option>Pubs & Hospitality</option>
                <option>Office & Workspace</option>
                <option>Retail & Showrooms</option>
                <option>Schools & Institutions</option>
                <option>Bespoke Furniture</option>
                <option>Outdoor Furniture</option>
                <option>Renovation / Remodeling</option>
                <option>Custom Requirement</option>
              </select>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your requirement..."
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#7ED321]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#7ED321] hover:bg-[#6CB71B] transition px-8 py-4 rounded-full font-semibold text-black"
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* MAP SECTION */}

      <section className="px-6 md:px-20 pb-24">

        <div className="rounded-[36px] overflow-hidden shadow-xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.449071186331!2d78.45980927390721!3d17.438207501341545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb937a7c59a233%3A0x42c4355783b7a6b0!2sFinecraftz%20Manufacturing%20Unit!5e0!3m2!1sen!2sin!4v1779179825814!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </section>

    </main>
  );
}