import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import CommandSection from '../components/CommandSection';
import Head from 'next/head'


const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <Head>
        <title>Niome</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <CommandSection />
      <InfoSection {...homeObjTwo}/>
      <Services />
      <Footer />
    </>
  )
}

export default Index;