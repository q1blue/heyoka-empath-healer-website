import React from 'react';
import { motion } from 'framer-motion';
import { Award, Book, Heart, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary-800 mb-4"
              >
                About the Healer
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-neutral-700 mb-6"
              >
                Discover the journey, philosophy, and unique empathic abilities that guide my healing practice as a Heyoka empath.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Heyoka Empath Healer portrait"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>My Healing Journey</h2>
            <p>The path that led me to become a Heyoka empath healer and spiritual guide.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-neutral-700"
                >
                  My journey as a healer began in early childhood, though I didn't understand my experiences at the time. I always felt others' emotions intensely, often becoming overwhelmed in crowds or during emotional situations. This sensitivity made me feel different, but I later came to recognize it as my empathic gift.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-neutral-700"
                >
                  At age 28, I experienced a profound spiritual awakening during a meditation retreat. This transformative experience opened my consciousness to the true nature of my empathic abilities and revealed my purpose as a Heyoka—a spiritual mirror who reflects others' emotions and energies back to them for healing.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-neutral-700"
                >
                  This revelation led me to study various healing modalities intensively, beginning with Reiki and expanding to energy work, chakra balancing, and indigenous healing traditions. I spent several years training with spiritual teachers across different cultures, integrating diverse approaches into my unique healing practice.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-neutral-700"
                >
                  As a Heyoka empath, I serve as both a mirror and a catalyst for others' healing. When clients work with me, they often see reflected aspects of themselves they've been unable or unwilling to confront. This mirroring creates opportunities for profound healing, as we can only heal what we acknowledge and embrace.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-neutral-700"
                >
                  My approach is intuitive and heart-centered, tailoring each healing session to the individual's unique needs and spiritual journey. I believe in creating a safe, sacred space where transformation can occur naturally through compassionate reflection, gentle guidance, and energetic support.
                </motion.p>
              </div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-primary-50 p-6 rounded-lg border border-primary-100 mb-8"
              >
                <h3 className="text-xl font-heading text-primary-800 mb-4">My Philosophy</h3>
                <p className="text-neutral-700 mb-3">
                  I believe that all healing is ultimately self-healing, facilitated by creating the right conditions for the body, mind, and spirit to realign with their natural state of wholeness.
                </p>
                <p className="text-neutral-700">
                  As a Heyoka empath, I don't "fix" people—I help them see themselves clearly so they can recognize their own innate healing abilities and spiritual wisdom.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary-50 p-6 rounded-lg border border-secondary-100"
              >
                <h3 className="text-xl font-heading text-secondary-800 mb-4">Certifications</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-center">
                    <Award size={16} className="text-secondary-500 mr-2" />
                    Reiki Master Certification
                  </li>
                  <li className="flex items-center">
                    <Award size={16} className="text-secondary-500 mr-2" />
                    Advanced Energy Healing Practitioner
                  </li>
                  <li className="flex items-center">
                    <Award size={16} className="text-secondary-500 mr-2" />
                    Certified Meditation Instructor
                  </li>
                  <li className="flex items-center">
                    <Award size={16} className="text-secondary-500 mr-2" />
                    Crystal Healing Certification
                  </li>
                  <li className="flex items-center">
                    <Award size={16} className="text-secondary-500 mr-2" />
                    Sound Therapy Practitioner
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>What Sets Me Apart</h2>
            <p>Understanding the unique qualities of a Heyoka Empath Healer and how they benefit your healing journey.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-heading text-primary-800 mb-3">Heyoka Mirroring</h3>
              <p className="text-neutral-600">
                As a Heyoka, I naturally mirror others' emotions and energies, helping them recognize patterns and blocks they may not see themselves.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-heading text-primary-800 mb-3">Intuitive Guidance</h3>
              <p className="text-neutral-600">
                My empathic abilities allow me to sense exactly what each person needs at a given moment, providing truly personalized healing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-heading text-primary-800 mb-3">Sacred Space</h3>
              <p className="text-neutral-600">
                I create a uniquely safe energetic environment where deep healing can occur naturally without forcing or rushing the process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-heading text-primary-800 mb-3">Integrative Approach</h3>
              <p className="text-neutral-600">
                I draw from multiple healing traditions and modalities, creating a comprehensive approach that addresses all aspects of your being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Practices */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary-800 mb-6">My Personal Practices</h2>
              <p className="text-neutral-700 mb-4">
                As a healer, I maintain my own spiritual and energetic wellbeing through daily practices that keep me grounded, clear, and connected to source energy.
              </p>
              <p className="text-neutral-700 mb-6">
                Each morning begins with meditation and energy clearing to prepare my energetic field for the day's healing work. I practice regular energy shielding and grounding techniques that allow me to connect deeply with clients without taking on their emotional or energetic burdens.
              </p>
              <p className="text-neutral-700 mb-6">
                I believe that a healer must be committed to their own ongoing healing journey. I continue to work with my own teachers and mentors, constantly deepening my practice and expanding my understanding of energy, consciousness, and spiritual development.
              </p>
              <p className="text-neutral-700">
                These practices ensure that when you work with me, you're connecting with someone who embodies the principles I teach and can hold space for your transformation from a place of genuine wholeness and integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Meditation practice"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading mb-6"
          >
            Begin Your Healing Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto mb-8"
          >
            I invite you to experience the transformative power of working with a Heyoka empath healer. Together, we can navigate your path to healing, balance, and spiritual growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a href="/services" className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-white">
              Explore Services
            </a>
            <a href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white">
              Book a Session
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;