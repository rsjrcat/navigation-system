import { useState } from "react";
import SEO from "../components/SEO";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Thank you for reaching out! We will get back to you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch | Medent Technologies"
        description="Contact Medent Technologies for web development, mobile apps, and custom software solutions. Get a free quote today!"
        keywords="contact medent technologies, web development quote, app development inquiry, software development contact"
      />

      <div className="bg-black text-white min-h-screen">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5DAA4D] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3E7B2F] rounded-full blur-3xl opacity-15"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Get in <span className="text-[#5DAA4D]">Touch</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Have a project in mind? Let's discuss how we can help bring your vision to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#5DAA4D] p-3 rounded-xl">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+918696403065"
                        className="text-gray-400 hover:text-[#5DAA4D] transition-colors"
                      >
                        +91 8696403065
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#5DAA4D] p-3 rounded-xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:hello@medenttechnologies.com"
                        className="text-gray-400 hover:text-[#5DAA4D] transition-colors break-all"
                      >
                        hello@medenttechnologies.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#5DAA4D] p-3 rounded-xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-gradient-to-br from-[#5DAA4D]/10 to-[#3E7B2F]/10 rounded-2xl p-8 border border-[#5DAA4D]/20">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-400">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-[#5DAA4D] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-[#5DAA4D] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-[#5DAA4D] focus:outline-none transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-[#5DAA4D] focus:outline-none transition-colors"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-[#5DAA4D] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#5DAA4D] to-[#3E7B2F] hover:from-[#6FC85C] hover:to-[#4E8C3B] px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
