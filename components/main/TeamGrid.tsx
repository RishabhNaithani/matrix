"use client";
import React from "react";
import TeamMember from "../main/TeamMember";

const teamMembers = [
  { name: "Rishabh Naithani", /*role: "Co-Founder"*/ expertise: "CEO", imageSrc: "/rishabh.jpg" },
  { name: "Amandeep", /*role: "CTO"*/ expertise: "COO", imageSrc: "/aman2.jpg" },
  { name: "Prem", /*role: "CAD Designer"*/ expertise: "CAD Modeling", imageSrc: "/prem.jpg" },
  { name: "Arshad Mew", /*role: "Marketing Head"*/ expertise: "Marketing Head", imageSrc: "/arshad.jpg" },
  { name: "Sushant Pandey", /*role: "UX/UI Designer"*/ expertise: "Product Designer", imageSrc: "/sushant.jpg" },
  { name: "Kashish Chopra",/*role: "Project Manager"*/ expertise: "AI Engineer", imageSrc: "/kashish2.jpg" },
];

const TeamGrid = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-40">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            // role={member.role}
            expertise={member.expertise} // Added expertise
            imageSrc={member.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
