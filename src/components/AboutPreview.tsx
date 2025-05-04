import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPreview: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Healer portrait"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary-50 border border-secondary-100 p-4 rounded-lg shadow-md w-48 md:w-64">
              <p className="text-secondary-700 text-sm italic">
                "As a Heyoka empath, I mirror others to help them see their true potential and heal their deepest wounds."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-800 mb-6">About the Healer</h2>
            <p className="text-neutral-700 mb-4">
              I am a Heyoka empath—a rare type of empath considered to be the highest form of empathy in indigenous cultures. As a Heyoka, I act as a spiritual mirror, reflecting emotions and energies that others need to confront for healing and growth.
            </p>
            <p className="text-neutral-700 mb-4">
              My journey into healing began after a profound spiritual awakening that revealed my empathic gifts and my purpose as a mirror for others. Through years of training in various healing modalities and spiritual practices, I've developed a unique approach that combines intuitive empathic abilities with energy work and spiritual guidance.
            </p>
            <p className="text-neutral-700 mb-6">
              I'm dedicated to creating a safe, sacred space for your healing journey, where transformation can occur naturally through compassionate reflection and gentle guidance.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <ChevronRight className="text-secondary-500 mr-2" />
                <span className="text-neutral-700">Certified Reiki Master</span>
              </div>
              <div className="flex items-center">
                <ChevronRight className="text-secondary-500 mr-2" />
                <span className="text-neutral-700">Advanced Training in Energy Healing</span>
              </div>
              <div className="flex items-center">
                <ChevronRight className="text-secondary-500 mr-2" />
                <span className="text-neutral-700">15+ Years of Meditation Practice</span>
              </div>
              <div className="flex items-center">
                <ChevronRight className="text-secondary-500 mr-2" />
                <span className="text-neutral-700">Indigenous Wisdom Traditions Study</span>
              </div>
            </div>

            <Link to="/about" className="btn-secondary">
              Learn More About My Journey
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;