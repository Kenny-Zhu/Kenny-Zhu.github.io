"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Anime Search Engine",
    description: "Search engine utilizing the Jikan v4 API.",
    image: "/images/projects/anime_engine_pic.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kenny-Zhu/AniEngine",
    previewUrl: "https://kenny-zhu.github.io/aniengine-app/",
  },
  {
    id: 2,
    title: "PugTime",
    description: "App dedicated to organizing games for my University's gaming club.",
    image: "/images/projects/pugtime_pic.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://gitlab.cleft.fun/brandon/PugTime",
    previewUrl: "https://gitlab.cleft.fun/brandon/PugTime",
  },
  {
    id: 3,
    title: "Animedoro Study Timer",
    description: "Pomodoro app that also doubles as an anime list.",
    image: "/images/projects/animedoro_pic.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kenny-Zhu/Animedoro-app",
    previewUrl: "https://kenny-zhu.github.io/Animedoro-app/",
  },
  {
    id: 4,
    title: "Weather App",
    description: "Weather app made using React.",
    image: "/images/projects/weather_pic.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Kenny-Zhu/react-weather",
    previewUrl: "https://github.com/Kenny-Zhu/react-weather",
  },
  {
    id: 5,
    title: "Sustainability Analytics Final Project",
    description: "Analysis on the impact of lightrails on PM2.5 pollution levels.",
    image: "/images/projects/FIRE.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/umdfiresa2023/fire-summit-greenlight",
    previewUrl: "https://github.com/umdfiresa2023/fire-summit-greenlight",
  },
  {
    id: 6,
    title: "NEAT Flappy Bird",
    description: "Neural network that learns to play the game Flappy Bird.",
    image: "/images/projects/NEAT_Flappy.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kenny-Zhu/Flappy-Bird-AI",
    previewUrl: "https://github.com/Kenny-Zhu/Flappy-Bird-AI",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/*<div className="text-white flex flex-row justify-center items-center gap-2 py-6">*/}
      {/*  <ProjectTag*/}
      {/*    onClick={handleTagChange}*/}
      {/*    name="All"*/}
      {/*    isSelected={tag === "All"}*/}
      {/*  />*/}
      {/*  <ProjectTag*/}
      {/*    onClick={handleTagChange}*/}
      {/*    name="Web"*/}
      {/*    isSelected={tag === "Web"}*/}
      {/*  />*/}
      {/*  <ProjectTag*/}
      {/*    onClick={handleTagChange}*/}
      {/*    name="Mobile"*/}
      {/*    isSelected={tag === "Mobile"}*/}
      {/*  />*/}
      {/*</div>*/}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
