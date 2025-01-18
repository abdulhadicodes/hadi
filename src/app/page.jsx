import Image from "next/image";
import "./globals.css";
import Header from '../components/Header'
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";
import React from 'react';


function Home(){
  return(
    <>
    <Header />
    <Hero />
    <Intro />
    <Services/>
    <TestimonialSection />
    <Contact/>
    <Footer/>
    </>
    
  );
}
export default Home