import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-blue-50">
      {/* ================= SECTION 1 ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Left */}
        <div className="relative w-full h-[360px] md:h-[420px]">
          <Image
            src="/about-1.jpg"
            alt="Our Team"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-6">
            Meet Our Team
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We are a team of passionate professionals dedicated to helping
            businesses grow through technology, strategy, and innovation.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            With diverse backgrounds and a shared vision, we collaborate to
            deliver impactful digital solutions that drive real results.
          </p>
        </div>
      </div>

      

      {/* ================= SECTION 2 ================= */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Left */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Built for Growth & Innovation
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our mission is to empower businesses with scalable digital
              solutions that adapt to a fast-changing world.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We believe in long-term partnerships, transparent processes,
              and continuous improvement to help our clients succeed.
            </p>
          </div>

          <div className="relative w-full h-[360px] md:h-[420px]">
            <Image
              src="/about-2.jpg"
              alt="Our Vision"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
