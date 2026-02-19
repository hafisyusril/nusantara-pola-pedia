import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="bg-white">
      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Have a question, project idea, or want to collaborate?
          We’d love to hear from you.
        </p>
      </div>

      {/* ================= CONTACT CONTENT ================= */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Contact Information
            </h2>

            <p className="text-gray-600 mb-6">
              Reach out to us through any of the following channels.
              Our team will respond as soon as possible.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Address:</strong> Jakarta, Indonesia
              </li>
              <li>
                <strong>Email:</strong> pedia@company.com
              </li>
              <li>
                <strong>Phone:</strong> +62 812-3456-7890
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let’s Build Something Great Together
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Whether you’re a startup or an established business,
            we’re ready to help you take the next step.
          </p>
        </div>
      </div>
    </section>
  );
}
