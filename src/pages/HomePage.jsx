/* eslint-disable no-unused-vars */
import Explanation from '@/my_components/Explanation';
import Hero_Header from '@/my_components/Hero-Header';
import Impact from '@/my_components/Impact';
import Navbar from '@/my_components/Navbar_home';
import React from 'react';
import Footer from './footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="min-h-screen bg-gray-100 ">
        <Hero_Header />
      </section>
      <div>
          <section id="what-is-navix" className="flex min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bgs/1.png')" }}>
          <Explanation />
          </section>
          <section id="why-navix" >
          <Impact />
          </section>
          <Footer></Footer></div>
    </div>
  );
};

export default HomePage;