import React, { useState } from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Connect With Us</h2>
          <p>Reach out to schedule a healing session or ask any questions about our services.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-neutral-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-neutral-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-neutral-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-neutral-700 mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                >
                  <option value="">Select a service</option>
                  <option value="empathic-healing">Empathic Healing</option>
                  <option value="energy-clearing">Energy Clearing</option>
                  <option value="spiritual-guidance">Spiritual Guidance</option>
                  <option value="chakra-balancing">Chakra Balancing</option>
                  <option value="meditation-practices">Meditation Practices</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-neutral-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-heading text-primary-800 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Phone className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-800 mb-1">Phone</h4>
                  <p className="text-neutral-600">(555) 123-4567</p>
                  <p className="text-neutral-500 text-sm">Monday-Friday: 9am-6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Mail className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-800 mb-1">Email</h4>
                  <p className="text-neutral-600">contact@heyokahealer.com</p>
                  <p className="text-neutral-500 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Calendar className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-800 mb-1">Book a Session</h4>
                  <p className="text-neutral-600">Schedule online or by phone</p>
                  <p className="text-neutral-500 text-sm">Virtual and in-person options available</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-100">
              <h4 className="text-lg font-medium text-primary-700 mb-2">Healing Environment</h4>
              <p className="text-neutral-600 mb-4">
                Our healing space is designed to provide a calm, nurturing environment where you can fully relax and open yourself to the healing process.
              </p>
              <p className="text-neutral-600">
                Virtual sessions are conducted in a sacred space with the same intentional energy as our in-person appointments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;