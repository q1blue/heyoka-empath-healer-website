import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Calendar, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
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
    alert('Thank you for your booking request! We will confirm your appointment soon.');
    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent-800 mb-4"
            >
              Book Your Healing Session
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-neutral-700 mb-8"
            >
              Take the first step on your healing journey by scheduling a session that addresses your unique needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-heading text-neutral-800 mb-6">Schedule Your Session</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-neutral-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-neutral-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-neutral-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-neutral-700 mb-2">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="empathic-healing">Empathic Healing</option>
                        <option value="energy-clearing">Energy Clearing</option>
                        <option value="spiritual-guidance">Spiritual Guidance</option>
                        <option value="chakra-balancing">Chakra Balancing</option>
                        <option value="meditation-practices">Meditation Practices</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-neutral-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-neutral-700 mb-2">Preferred Time</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400"
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (9am-12pm)</option>
                        <option value="afternoon">Afternoon (12pm-4pm)</option>
                        <option value="evening">Evening (4pm-7pm)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-neutral-700 mb-2">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400"
                      placeholder="Please share any specific concerns or questions you have about your session."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-accent-500 text-white py-3 px-6 rounded-md hover:bg-accent-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                    >
                      Request Booking
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-neutral-50 p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-heading text-neutral-800 mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="bg-accent-100 p-3 rounded-full mr-4">
                      <Phone className="text-accent-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800">Phone</h4>
                      <p className="text-neutral-600">(555) 123-4567</p>
                      <p className="text-sm text-neutral-500">Monday-Friday: 9am-6pm</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-accent-100 p-3 rounded-full mr-4">
                      <Mail className="text-accent-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800">Email</h4>
                      <p className="text-neutral-600">contact@heyokahealer.com</p>
                      <p className="text-sm text-neutral-500">We'll respond within 24 hours</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-accent-100 p-3 rounded-full mr-4">
                      <MapPin className="text-accent-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800">Location</h4>
                      <p className="text-neutral-600">123 Healing Path</p>
                      <p className="text-neutral-600">Serenity Valley, CA 90210</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-heading text-primary-800 mb-6">Session Information</h3>
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Clock className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800">Session Hours</h4>
                      <p className="text-neutral-600">Monday-Friday: 9am-7pm</p>
                      <p className="text-neutral-600">Saturday: 10am-4pm</p>
                      <p className="text-neutral-600">Sunday: Closed</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Calendar className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800">Booking Policy</h4>
                      <p className="text-neutral-600">24-hour advance booking required</p>
                      <p className="text-neutral-600">Free cancellation with 24+ hours notice</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <MessageCircle className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800">Session Formats</h4>
                      <p className="text-neutral-600">In-person sessions available</p>
                      <p className="text-neutral-600">Virtual sessions via secure video call</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>Find Our Healing Space</h2>
            <p>Our center is located in a peaceful setting designed to support your healing journey.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              {/* Map Placeholder - In a real application, this would be an embedded map */}
              <div className="bg-white p-2 rounded-lg shadow-md h-96 overflow-hidden">
                <div className="w-full h-full bg-neutral-200 rounded flex items-center justify-center">
                  <p className="text-neutral-500 text-center px-4">
                    [Map would be displayed here]<br />
                    Directions to 123 Healing Path, Serenity Valley, CA 90210
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-heading text-neutral-800 mb-4">Getting Here</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-neutral-700 mb-2">By Car</h4>
                    <p className="text-neutral-600 text-sm">
                      Ample free parking is available in our private lot. Enter from Harmony Drive.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700 mb-2">Public Transportation</h4>
                    <p className="text-neutral-600 text-sm">
                      Bus routes 12 and 15 stop within a 5-minute walk of our center. The nearest train station is Valley Station (10-minute walk).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700 mb-2">From the Airport</h4>
                    <p className="text-neutral-600 text-sm">
                      We're approximately 25 minutes from International Airport by car. Airport shuttles are available with advance booking.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <h4 className="font-medium text-neutral-700 mb-2">Accessibility</h4>
                  <p className="text-neutral-600 text-sm mb-4">
                    Our center is fully wheelchair accessible with ramp access and accessible restrooms. Please let us know if you require any specific accommodations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about booking and preparing for your healing session.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md mb-6"
            >
              <h3 className="text-lg font-heading font-medium text-neutral-800 mb-2">How do I prepare for my first session?</h3>
              <p className="text-neutral-600">
                For your first session, wear comfortable clothing and try to arrive in a calm state. Avoid alcohol for 24 hours before your appointment and limit caffeine on the day of your session. It's helpful to spend a few minutes before your appointment reflecting on what you hope to address or achieve through our work together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md mb-6"
            >
              <h3 className="text-lg font-heading font-medium text-neutral-800 mb-2">Are virtual sessions as effective as in-person sessions?</h3>
              <p className="text-neutral-600">
                Yes, virtual sessions can be just as effective as in-person sessions. Energy work isn't limited by physical distance, and I use specific techniques for distance healing that allow me to connect with your energy field remotely. For virtual sessions, ensure you have a quiet, private space where you won't be disturbed, a stable internet connection, and a comfortable place to sit or lie down.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md mb-6"
            >
              <h3 className="text-lg font-heading font-medium text-neutral-800 mb-2">How many sessions will I need?</h3>
              <p className="text-neutral-600">
                The number of sessions varies depending on your individual needs and goals. Some clients experience significant shifts after just one session, while others benefit from ongoing work. After your initial session, we'll discuss a recommended approach. Most clients find that a series of 3-6 sessions provides substantial benefit, often with sessions spaced 2-4 weeks apart to allow for integration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-heading font-medium text-neutral-800 mb-2">What payment methods do you accept?</h3>
              <p className="text-neutral-600">
                We accept credit/debit cards, PayPal, and Venmo. Payment is required at the time of booking to secure your appointment. Some services may be eligible for FSA/HSA funds - please check with your provider. We also offer package discounts for clients booking multiple sessions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;