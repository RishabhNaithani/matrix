'use client';

import Image from 'next/image';
import React from 'react';
import { Socials } from '@/constants/social';

const Navbar = () => {
  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
          <Image
            src="/VeritexLogo.png"
            alt="logo"
            width={70}
            height={70}
            className='cursor-pointer hover:animate-slowspin'
          />
          <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
            Matrixhive Innovations
          </span>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-100'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <button onClick={() => scrollToSection('service')} className='cursor-pointer'>About us</button>
            <button onClick={() => scrollToSection('skills')} className='cursor-pointer'>Contact</button>
            <button onClick={() => scrollToSection('projects')} className='cursor-pointer'>Projects</button>
            <button onClick={() => scrollToSection('achievements')} className='cursor-pointer'>Achievements</button>
          </div>
        </div>

        <div className='flex flex-row gap-5'>
          {Socials.map((social) => (
            <a 
              key={social.name} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-pointer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
