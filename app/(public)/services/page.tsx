import Image from "next/image";

const services = [
  {
    title: "Digital Strategy",
    description:
      "We help businesses define clear digital strategies that align with their goals and drive sustainable growth.",
  },
  {
    title: "Web & App Development",
    description:
      "From corporate websites to scalable applications, we build reliable and high-performance digital products.",
  },
  {
    title: "UI/UX Design",
    description:
      "We design intuitive and engaging user experiences that convert users into loyal customers.",
  },
  {
    title: "Data & Analytics",
    description:
      "We transform data into insights to support smarter business decisions and measurable outcomes.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Secure, scalable, and optimized cloud solutions to support modern business operations.",
  },
  {
    title: "Consulting & Support",
    description:
      "Ongoing consulting and technical support to ensure your digital solutions continue to perform.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-white">
      {/* ================= INTRO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Our Services
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We provide end-to-end digital services designed to help your business
          grow, innovate, and stay competitive in a digital-first world.
        </p>
      </div>

      {/* ================= SERVICES GRID ================= */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We combine technical expertise, business insight, and creative
            thinking to deliver solutions that make a real impact.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our collaborative approach ensures transparency, efficiency,
            and long-term success for our partners.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[360px] md:h-[420px]">
          <Image
            src="/services.jpg"
            alt="Our Services"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to build digital solutions that move your
            business forward.
          </p>

          <a
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold px-8 py-4 rounded-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
