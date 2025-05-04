import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Feather, Moon, Sun, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className="service-card card p-6 relative overflow-hidden group"
    >
      <div className="mb-4 text-secondary-500 bg-secondary-50 p-3 rounded-full inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-neutral-600 mb-4">
        {description}
      </p>
      <Link 
        to={link} 
        className="text-primary-500 font-medium hover:text-primary-700 transition-colors duration-300 inline-flex items-center"
      >
        Learn More
        <svg 
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </motion.div>
  );
};

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: <Heart size={24} />,
      title: "Empathic Healing",
      description: "Connect deeply with your emotions and experiences through guided empathic healing sessions that release emotional blocks.",
      link: "/services#empathic-healing",
      delay: 0.1
    },
    {
      icon: <Feather size={24} />,
      title: "Energy Clearing",
      description: "Clear negative energies and restore balance through intuitive energy work that cleanses your aura and living spaces.",
      link: "/services#energy-clearing",
      delay: 0.2
    },
    {
      icon: <Moon size={24} />,
      title: "Spiritual Guidance",
      description: "Receive intuitive guidance for your spiritual journey with insights tailored to your unique path and purpose.",
      link: "/services#spiritual-guidance",
      delay: 0.3
    },
    {
      icon: <Sun size={24} />,
      title: "Chakra Balancing",
      description: "Restore harmony to your energy centers through personalized chakra balancing and activation techniques.",
      link: "/services#chakra-balancing", 
      delay: 0.4
    },
    {
      icon: <Sparkles size={24} />,
      title: "Meditation Practices",
      description: "Learn powerful meditation techniques to cultivate inner peace, heightened awareness, and spiritual connection.",
      link: "/services#meditation-practices",
      delay: 0.5
    },
  ];

  return (
    <section className="section gradient-bg">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Healing Services</h2>
          <p>Discover the transformative healing modalities offered to support your journey toward wholeness, balance, and spiritual awakening.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;