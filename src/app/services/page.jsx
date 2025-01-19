import Image from 'next/image';
import Link from "next/link";
import { Lightbulb, FileSearch, PenTool, Cpu, TestTube, Rocket, RefreshCw } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import ProcessStep from '@/components/ProcessStep';
import heroImage from '../../../public/services.jpg';
import Contact from "../../components/Contact.jsx";
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";

const services =[  {
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
{
  icon: 'Smartphone',
  title: "Mobile App Development",
  description: "Create user-friendly mobile app prototypes that bring your ideas to life and enhance the user experience.",
},
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

const sdlcProcess = [
  { icon: 'Lightbulb', title: "Planning", description: "We start by understanding your needs, defining the project, and making a clear plan." },
  { icon: 'FileSearch', title: "Analysis", description: "We do research to find the best solutions for your project." },
  { icon: 'PenTool', title: "Design", description: "We create simple, easy-to-use designs and prototypes that look great." },
  { icon: 'Cpu', title: "Implementation", description: "Our developers turn the designs into working code that’s efficient and reliable." },
  { icon: 'TestTube', title: "Testing & Integration", description: "We test everything and make sure it all works perfectly together." },
  { icon: 'Rocket', title: "Deployment", description: "We launch your project smoothly, making sure everything runs well online." },
  { icon: 'RefreshCw', title: "Maintenance & Updates", description: "We offer ongoing support, updates, and fixes to keep your project running smoothly." },
];



export default function ServicesPage() {
  return (
    <>
    <Header />
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center overflow-hidden">
      <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage.src})`, // Dynamically reference the imported image
              backgroundAttachment: 'fixed', // Enable fixed positioning
              backgroundPosition:'bottom'
            }}
          ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex justify-center text-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your online presence
            </p>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* SDLC Process Section */}
      <section className="bg-[#0a2816] py-20 px-4 sm:px-6 lg:px-8 m-5 lg:m-10 md:m-10 rounded-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            My Development Process.
          </h2>
          <div className="space-y-6">
            {sdlcProcess.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} totalSteps={sdlcProcess.length} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#04140b] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold tracking-widest mb-2 uppercase text-[#00ff66]">Ready to get started?</p>
            <h2 className="text-4xl font-bold">Let's discuss your project</h2>
          </div>
          <div>
            <Link href="/contact" className="inline-block px-8 py-4 border-2 border-[#00ff66] text-[#00ff66] uppercase text-sm tracking-wider font-semibold 
              hover:bg-[#00ff66] hover:text-black transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-[#04140b]">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    

    <Footer />

    </>
  );
}

