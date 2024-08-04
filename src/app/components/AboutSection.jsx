"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML/CSS/JAVASCRIPT</li>
        <li>MySQL</li>
        <li>PHP</li>
        <li>Visual Basic</li>
        <li>Bootstrap / Tailwind</li>
        <li>Express</li>
        <li>MangoDB</li>
        <li>Node.js</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BTS in Information Systems Development (P-TECH) </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> The Web Development Fundamentals | IBM SkillsBuild</li>
        <li>AI Career Essentials | ALX Africa</li>
        <li>Introduction to Entrepreneurship | Injaaz Al-Maghrib</li>
        <li>Complete Introduction to Cybersecurity 2024 | Udemy</li>
        <li>The AI Fundamentals – IBM SkillsBuild</li>
        <li>Oracle MySQL Practionner</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "Awards",
    content: (
      <ul className="list-disc pl-2">
        <li>3rd Place - AI & youth inclusion Hackathon - first edition </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/desktop.png"
          width={500}
          height={500}
          alt="desktop image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Junior full stack web developer with a passion for creating
            interactive and responsive web applications. I excel at Problem
            solving and creative thinking, I am also a quick learner and I am
            always looking to expand my knowledge and skill set. I am excited to
            work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Awards")}
              active={tab === "Awards"}
            >
              {" "}
              Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
