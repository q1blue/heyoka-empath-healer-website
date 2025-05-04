import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  delay: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date, author, category, image, delay }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <div className="mb-3 flex items-center">
          <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded">
            {category}
          </span>
          <div className="flex items-center text-sm text-neutral-500 ml-auto">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-heading font-semibold mb-2 hover:text-primary-600 transition-colors duration-300">
          <Link to="#">{title}</Link>
        </h3>
        <p className="text-neutral-600 mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 mr-2">
              <User size={16} />
            </div>
            <span className="text-sm text-neutral-600">{author}</span>
          </div>
          <Link to="#" className="text-primary-600 font-medium text-sm flex items-center hover:text-primary-700 transition-colors duration-300">
            Read More
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "Understanding the Heyoka Empath: The Spiritual Mirror",
      excerpt: "Explore the unique traits and spiritual significance of the Heyoka empath, often described as the most powerful type of empath in indigenous traditions.",
      date: "June 15, 2025",
      author: "Sara Lightworker",
      category: "Spiritual Growth",
      image: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      delay: 0.1
    },
    {
      title: "5 Essential Energy Clearing Practices for Empaths",
      excerpt: "Discover practical techniques to protect your energy, clear negativity, and maintain your empathic gifts without becoming overwhelmed by others' emotions.",
      date: "May 28, 2025",
      author: "Sara Lightworker",
      category: "Energy Work",
      image: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      delay: 0.2
    },
    {
      title: "The Connection Between Chakra Balancing and Emotional Health",
      excerpt: "Learn how maintaining balanced energy centers can positively impact your emotional wellbeing and help you process difficult feelings more effectively.",
      date: "May 10, 2025",
      author: "Michael Healer",
      category: "Chakra Work",
      image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      delay: 0.3
    },
    {
      title: "Shadow Work: Embracing Your Whole Self for Healing",
      excerpt: "Explore the importance of integrating your shadow aspects for complete healing and how a Heyoka empath can help facilitate this transformative process.",
      date: "April 22, 2025",
      author: "Sara Lightworker",
      category: "Emotional Healing",
      image: "https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      delay: 0.4
    },
    {
      title: "Meditation for Beginners: Simple Practices to Start Your Journey",
      excerpt: "Start your meditation practice with these accessible techniques designed specifically for beginners who want to experience the benefits of mindfulness.",
      date: "April 5, 2025",
      author: "Michael Healer",
      category: "Meditation",
      image: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      delay: 0.5
    },
    {
      title: "The Healing Power of Crystal Energy: A Beginner's Guide",
      excerpt: "Discover how crystals can support your healing journey, enhance your energy work, and complement other spiritual practices for greater wellbeing.",
      date: "March 18, 2025",
      author: "Sara Lightworker",
      category: "Crystal Healing",
      image: "https://images.pexels.com/photos/1573236/pexels-photo-1573236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      delay: 0.6
    }
  ];

  const categories = [
    "Spiritual Growth",
    "Energy Work",
    "Chakra Work",
    "Emotional Healing",
    "Meditation",
    "Crystal Healing",
    "Empathic Abilities",
    "Self-Care"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary-800 mb-4"
            >
              Healing Insights Blog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-neutral-700 mb-8"
            >
              Wisdom, guidance, and practical insights to support your healing journey and spiritual growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-xl mx-auto"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 w-full rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <BlogPost 
                    key={index}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    author={post.author}
                    category={post.category}
                    image={post.image}
                    delay={post.delay}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="inline-flex rounded-md shadow">
                  <a href="#" className="px-4 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                    Previous
                  </a>
                  <a href="#" className="px-4 py-2 border-t border-b border-neutral-300 bg-white text-sm font-medium text-primary-600 hover:bg-primary-50">
                    1
                  </a>
                  <a href="#" className="px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                    2
                  </a>
                  <a href="#" className="px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                    3
                  </a>
                  <a href="#" className="px-4 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                    Next
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md mb-8"
              >
                <h3 className="text-xl font-heading text-neutral-800 mb-4 border-b border-neutral-200 pb-2">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link 
                        to="#" 
                        className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors duration-300"
                      >
                        <ChevronRight size={16} className="mr-2 text-primary-400" />
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Featured Post */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md mb-8"
              >
                <h3 className="text-xl font-heading text-neutral-800 mb-4 border-b border-neutral-200 pb-2">
                  Featured Post
                </h3>
                <div>
                  <img 
                    src="https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="The Path of the Empath: Navigating Life as a Highly Sensitive Person"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-lg font-heading font-medium mb-2 hover:text-primary-600 transition-colors duration-300">
                    <Link to="#">The Path of the Empath: Navigating Life as a Highly Sensitive Person</Link>
                  </h4>
                  <p className="text-neutral-600 text-sm mb-3">
                    Discover strategies for thriving as an empath in a world that can sometimes feel overwhelming to your sensitive nature.
                  </p>
                  <Link to="#" className="text-primary-600 font-medium text-sm flex items-center hover:text-primary-700 transition-colors duration-300">
                    Read Full Article
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
              
              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-secondary-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-heading text-secondary-800 mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-neutral-700 mb-4">
                  Get the latest articles, healing insights, and special offers delivered directly to your inbox.
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:border-secondary-300"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-secondary-500 text-white py-2 px-4 rounded-md hover:bg-secondary-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;