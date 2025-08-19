"use client";
import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi'; // Using react-icons for consistency

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Get in Touch</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            Have a question, a project idea, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Fades in when the grid is in view
          viewport={{ once: true, amount: 0.3 }} // Animates once, when 30% of it is visible
          transition={{ duration: 0.8 }}
        >
          
          {/* Column 1: Contact Information */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-full">
                <FiMail className="text-indigo-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">Reach out via email for a quick response.</p>
                <a
                  href="mailto:bishal.22211262@viit.ac.in"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                >
                  bishal.22211262@viit.ac.in
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-slate-800 p-3 rounded-full">
                <FiMapPin className="text-indigo-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400">I'm currently based in:</p>
                <p className="text-indigo-400">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
          
          {/* Column 2: Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg ">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Bishal Kumar Gupta"
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}