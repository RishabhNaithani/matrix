"use client";
import Image from "next/image";
import React from "react";

import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 z-50 cursor-pointer relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start my-4 md:my-0">
            <div className="flex flex-row items-center">
              <Image src="/VeritexLogo.png" alt="Company Logo" width={45} height={45} className="mr-3" />
              <div className="font-bold text-lg">Matrixhive Innovations Pvt. Ltd.</div>
            </div>
    
            <p className="text-sm my-2.5">Email: matrixhive.info@gmail.com</p>
            <p className="text-sm">Phone: +91 73475-36599</p>
            <p className="text-sm">Phone: +91 95011-38548</p>
          </div>
          
          
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start my-4 md:my-0">
            <div className="font-bold text-base">Community</div>
            <a href="https://www.instagram.com/matrixhive.innovations/?igsh=MWN2dWt0ODg3MjE3NQ%3D%3D#" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-2.5 cursor-pointer">
              <RxInstagramLogo />
              <span className="text-sm ml-1.5">Instagram</span>    
            </a>
            <a href="https://www.linkedin.com/company/matrixhive.in/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-2.5 cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-sm ml-1.5">LinkedIn</span>    
            </a>
          </div>
        </div>
<br />  
        <div className="mb-5 text-sm text-center">
          &copy; Matrixhive Innovations Company 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer;
