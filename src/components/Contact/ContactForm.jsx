import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic here
  };

  return (
    <section
      id="contacts"
      className="relative p-10 m-2.5 border-2 border-gray-100 rounded-3xl overflow-hidden bg-slate-950/70 shadow-xl shadow-black/20"
    >
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/dhgojtmbf/image/upload/v1772386850/Background_rzyxms.avif')] bg-cover animate-gradient bg-fixed opacity-40"
      >
      </div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 text-center text-gray-100"
      >
        <h2 className="font-pacifico text-3xl mb-6">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto text-left text-slate-300 space-y-4"
        >
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label htmlFor="name" className="block mb-1 text-gray-100">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-slate-700 rounded-2xl bg-slate-900/80 text-white placeholder:text-slate-500 focus:border-slate-400 focus:ring-2 focus:ring-slate-500 outline-none"
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label htmlFor="email" className="block mb-1 text-gray-100">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-slate-700 rounded-2xl bg-slate-900/80 text-white placeholder:text-slate-500 focus:border-slate-400 focus:ring-2 focus:ring-slate-500 outline-none"
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label htmlFor="message" className="block mb-1 text-gray-100">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-3 border border-slate-700 rounded-2xl bg-slate-900/80 h-32 resize-none text-white placeholder:text-slate-500 focus:border-slate-400 focus:ring-2 focus:ring-slate-500 outline-none"
            />
          </motion.div>

          {/* Animated Submit Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center">
            <Button type="submit">Send Message</Button>
          </motion.div>
        </form>

        {/* Back to Home Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 text-center"
        >
          <Button href="#home">Back to Home</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactForm;