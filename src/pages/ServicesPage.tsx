import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Feather, Moon, Sun, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-secondary-800 mb-4"
              >
                Healing Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-neutral-700 mb-6"
              >
                Discover a range of healing modalities designed to support your spiritual, emotional, and energetic wellbeing.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/6663467/pexels-photo-6663467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Healing services"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>Healing Modalities</h2>
            <p>Each service is personalized to address your unique needs and support your individual healing journey.</p>
          </motion.div>

          {/* Empathic Healing */}
          <div id="empathic-healing" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-20"
            >
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <Heart className="text-accent-500 mr-3" size={28} />
                  <h3 className="text-2xl font-heading text-neutral-800">Empathic Healing</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  As a Heyoka empath, I offer a unique form of emotional and energetic healing that works through empathic mirroring. During these sessions, I create a safe container where you can explore challenging emotions with support and without judgment.
                </p>
                <p className="text-neutral-700 mb-4">
                  Through this mirroring process, you'll gain clarity about emotional patterns, energy blocks, and subconscious beliefs that may be limiting your wellbeing. I then guide you through releasing these patterns and replacing them with more supportive energies.
                </p>
                <p className="text-neutral-700 mb-6">
                  Empathic healing is particularly effective for those experiencing emotional distress, feeling stuck in negative patterns, or seeking deeper self-understanding. Many clients report feeling a profound sense of relief, clarity, and emotional lightness after sessions.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">Emotional Healing</span>
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">Shadow Work</span>
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">Pattern Release</span>
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">Trauma Support</span>
                </div>
                <Link to="/contact" className="btn-accent">
                  Book Empathic Healing Session
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Empathic healing session"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <div className="bg-white p-4 rounded-lg shadow-lg -mt-10 mx-8 relative">
                  <p className="text-center text-neutral-700">
                    <span className="font-medium">60-minute session:</span> $120<br />
                    <span className="font-medium">90-minute session:</span> $175
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Energy Clearing */}
          <div id="energy-clearing" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-20"
            >
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/4046567/pexels-photo-4046567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Energy clearing session"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <div className="bg-white p-4 rounded-lg shadow-lg -mt-10 mx-8 relative">
                  <p className="text-center text-neutral-700">
                    <span className="font-medium">60-minute session:</span> $100<br />
                    <span className="font-medium">Space clearing:</span> $150+
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-2">
                <div className="flex items-center mb-4">
                  <Feather className="text-primary-500 mr-3" size={28} />
                  <h3 className="text-2xl font-heading text-neutral-800">Energy Clearing</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Energy clearing sessions focus on removing stagnant or negative energies from your personal energy field (aura) and chakra system. Using a combination of intuitive techniques and established energy work modalities, I help clear energetic blocks and restore your natural energetic flow.
                </p>
                <p className="text-neutral-700 mb-4">
                  These sessions may include aura cleansing, chakra balancing, cord cutting (releasing unhealthy energetic connections), and energy field repair. I also provide guidance on maintaining your energetic hygiene between sessions.
                </p>
                <p className="text-neutral-700 mb-6">
                  Additionally, I offer space clearing services for homes and offices to remove negative or stagnant energies from your environment. This service can be particularly beneficial after conflict, illness, or during major life transitions.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Aura Cleansing</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Cord Cutting</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Space Clearing</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Energy Protection</span>
                </div>
                <Link to="/contact" className="btn-primary">
                  Book Energy Clearing Session
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Spiritual Guidance */}
          <div id="spiritual-guidance" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-20"
            >
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <Moon className="text-secondary-500 mr-3" size={28} />
                  <h3 className="text-2xl font-heading text-neutral-800">Spiritual Guidance</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Spiritual guidance sessions offer intuitive insights and practical wisdom to support your spiritual journey. Using my empathic abilities, I connect with your energy to provide guidance that's specifically relevant to your current situation and spiritual development.
                </p>
                <p className="text-neutral-700 mb-4">
                  These sessions may explore questions about your life purpose, spiritual gifts, challenging life transitions, relationship dynamics, or other areas where you're seeking greater clarity and direction.
                </p>
                <p className="text-neutral-700 mb-6">
                  My approach combines intuitive insights with practical, grounded advice that you can apply in your daily life. While honoring your own inner wisdom, I offer perspectives that may help you see situations from a higher spiritual viewpoint.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">Life Purpose</span>
                  <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">Intuitive Insights</span>
                  <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">Spiritual Development</span>
                  <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">Decision Support</span>
                </div>
                <Link to="/contact" className="btn-secondary">
                  Book Spiritual Guidance Session
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Spiritual guidance session"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <div className="bg-white p-4 rounded-lg shadow-lg -mt-10 mx-8 relative">
                  <p className="text-center text-neutral-700">
                    <span className="font-medium">60-minute session:</span> $120<br />
                    <span className="font-medium">30-minute check-in:</span> $65
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chakra Balancing */}
          <div id="chakra-balancing" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-20"
            >
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/8435633/pexels-photo-8435633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Chakra balancing session"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <div className="bg-white p-4 rounded-lg shadow-lg -mt-10 mx-8 relative">
                  <p className="text-center text-neutral-700">
                    <span className="font-medium">60-minute session:</span> $110<br />
                    <span className="font-medium">90-minute deep balancing:</span> $160
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 lg:col-span-2">
                <div className="flex items-center mb-4">
                  <Sun className="text-accent-500 mr-3" size={28} />
                  <h3 className="text-2xl font-heading text-neutral-800">Chakra Balancing</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Chakra balancing sessions focus on harmonizing your body's energy centers to promote physical, emotional, and spiritual wellbeing. When chakras become blocked or imbalanced, we may experience related physical or emotional issues.
                </p>
                <p className="text-neutral-700 mb-4">
                  During a session, I assess each of your seven main chakras, identifying areas of excess, deficiency, or blockage. I then use specific techniques to clear and balance these energy centers, including energy work, sound therapy, crystal healing, and guided visualization.
                </p>
                <p className="text-neutral-700 mb-6">
                  Clients often report feeling more centered, balanced, and energized after chakra balancing sessions. These sessions can help address specific issues related to particular chakras or provide general maintenance for your energy system.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">Energy Balancing</span>
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">Chakra Clearing</span>
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">Sound Therapy</span>
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm">Crystal Healing</span>
                </div>
                <Link to="/contact" className="btn-accent">
                  Book Chakra Balancing Session
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Meditation Practices */}
          <div id="meditation-practices" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
            >
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <Sparkles className="text-primary-500 mr-3" size={28} />
                  <h3 className="text-2xl font-heading text-neutral-800">Meditation Practices</h3>
                </div>
                <p className="text-neutral-700 mb-4">
                  Meditation is a powerful tool for spiritual growth, emotional regulation, and mental clarity. I offer both one-on-one and small group meditation instruction tailored to your experience level and specific goals.
                </p>
                <p className="text-neutral-700 mb-4">
                  For beginners, I provide foundational techniques and guidance to establish a sustainable practice. For experienced meditators, I offer advanced practices and support for deepening your meditation experience.
                </p>
                <p className="text-neutral-700 mb-6">
                  Meditation instruction may include breath awareness techniques, guided visualizations, mantra meditation, loving-kindness practice, chakra meditation, or other approaches depending on your needs and preferences.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Guided Meditation</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Mindfulness Practice</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Breathing Techniques</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Energy Awareness</span>
                </div>
                <Link to="/contact" className="btn-primary">
                  Book Meditation Session
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Meditation practice"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <div className="bg-white p-4 rounded-lg shadow-lg -mt-10 mx-8 relative">
                  <p className="text-center text-neutral-700">
                    <span className="font-medium">Private session:</span> $90<br />
                    <span className="font-medium">Group session (3-6):</span> $45/person
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session Information */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>Session Information</h2>
            <p>Everything you need to know about scheduling, preparing for, and getting the most from your healing sessions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-heading text-primary-800 mb-4">Session Formats</h3>
              <p className="text-neutral-700 mb-4">
                All sessions are available in both in-person and virtual formats. Virtual sessions are conducted via secure video call and are equally effective as in-person healing.
              </p>
              <p className="text-neutral-700">
                For energy work and chakra balancing, I use distance healing techniques that allow me to work with your energy field remotely with your permission.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-heading text-primary-800 mb-4">How to Prepare</h3>
              <p className="text-neutral-700 mb-4">
                For the most beneficial experience, please:
              </p>
              <ul className="list-disc pl-5 text-neutral-700 space-y-2 mb-4">
                <li>Find a quiet, private space where you won't be disturbed</li>
                <li>Avoid alcohol or non-prescription substances for 24 hours before</li>
                <li>Stay hydrated and try to eat lightly before your session</li>
                <li>Wear comfortable clothing</li>
              </ul>
              <p className="text-neutral-700">
                Come with an open mind and heart, but no special experience is required.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-heading text-primary-800 mb-4">Booking & Cancellation</h3>
              <p className="text-neutral-700 mb-4">
                Sessions can be booked online or by phone with a minimum of 24 hours notice. Payment is required at the time of booking to secure your appointment.
              </p>
              <p className="text-neutral-700">
                Cancellations made more than 24 hours in advance will receive a full refund. Late cancellations (less than 24 hours notice) are subject to a 50% cancellation fee.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary-500 to-primary-500 text-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading mb-6"
          >
            Ready to Begin Your Healing Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto mb-8"
          >
            Take the first step toward balance, healing, and spiritual growth by booking your session today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn bg-white text-secondary-600 hover:bg-secondary-50 focus:ring-white">
              Book Your Session
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;