import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-md relative testimonial-quote"
    >
      <p className="text-neutral-700 mb-6 italic">
        {quote}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-medium text-neutral-800">{name}</p>
          <p className="text-neutral-500 text-sm">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Working with the Heyoka Empath Healer has been transformative. The energy clearing sessions helped me release years of emotional baggage I didn't even know I was carrying.",
      name: "Sarah Johnson",
      title: "Yoga Instructor",
      delay: 0.1
    },
    {
      quote: "The spiritual guidance I received was incredibly accurate and insightful. It helped me navigate a challenging life transition with grace and understanding.",
      name: "Michael Chen",
      title: "Business Owner",
      delay: 0.2
    },
    {
      quote: "After just three chakra balancing sessions, I experienced a profound shift in my energy. My chronic anxiety has decreased significantly, and I feel more grounded than ever.",
      name: "Amara Wilson",
      title: "Teacher",
      delay: 0.3
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Healing Stories</h2>
          <p>Hear from those who have experienced transformation through our empathic healing sessions and spiritual guidance.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;