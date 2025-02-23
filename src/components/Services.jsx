'use client'

import { motion } from "framer-motion";
import { Monitor, ShoppingCart, Search } from 'lucide-react'
import seo from '../../public/seo.jpeg'
import webDev from '../../public/website-development.jpeg'
import Ecom from '../../public/e-commerce.jpeg'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    icon: 'Code',
    title: "Web Development",
    description: "Custom websites made for your business, using the latest technology for top performance.",
  },
  {
    icon: 'ShoppingCart',
    title: "E-Commerce Solutions",
    description: "Strong online stores that offer smooth shopping and boost sales.",
  },
  {
    icon: 'Search',
    title: "SEO Optimization",
    description: "Boost your website’s visibility and bring it to the top in search to attract more visitors.",
  },
  // {
  //   icon: 'Smartphone',
  //   title: "Mobile App Development",
  //   description: "Create user-friendly mobile app prototypes that bring your ideas to life and enhance the user experience.",
  // },
  {
    icon: 'Palette',
    title: "UI/UX Design",
    description: "Easy-to-use and attractive interfaces that boost user engagement and satisfaction.",
  },
  {
    icon: 'Megaphone',
    title: "Digital Marketing",
    description: "Complete digital marketing plans to improve your online presence and drive growth.",
  },
];


export default function ServicesSection() {
  return (
    <section className="w-full bg-[#04140b] py-16 md:py-24 flex flex-col items-center">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <div className="text-center space-y-4 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#00ff66] font-semibold"
          >
            Crafting digital solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            What I Provide
          </motion.h2>
        </div>

        <section className=" py-20 px-4 sm:px-6 lg:px-8 -mt-14 flex flex-col items-center">
        <div className="max-w-7xl mx-auto ">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      </div>
    </section>
  );
}

