import { AiOutlineAntDesign } from '@react-icons/all-files/ai/AiOutlineAntDesign';
import { DiPostgresql } from '@react-icons/all-files/di/DiPostgresql';
import { FaAws } from '@react-icons/all-files/fa/FaAws';
import { FaBootstrap } from '@react-icons/all-files/fa/FaBootstrap';
import { FaCss3 } from '@react-icons/all-files/fa/FaCss3';
import { FaDocker } from '@react-icons/all-files/fa/FaDocker';
import { FaGit } from '@react-icons/all-files/fa/FaGit';
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5';
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs';
import { FaPython } from '@react-icons/all-files/fa/FaPython';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { FaSass } from '@react-icons/all-files/fa/FaSass';
import { FaVuejs } from '@react-icons/all-files/fa/FaVuejs';
import { SiAdonisjs } from '@react-icons/all-files/si/SiAdonisjs';
import { SiGraphql } from '@react-icons/all-files/si/SiGraphql';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiJest } from '@react-icons/all-files/si/SiJest';
import { SiMaterialUi } from '@react-icons/all-files/si/SiMaterialUi';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import React from 'react';

type TechIconsPropsType = {
  name: string;
  size?: number;
};

function TechIcons({ name, size = 30 }: TechIconsPropsType) {
  switch (name.toLowerCase()) {
    case 'javascript':
      return <SiJavascript title={name} size={size} />;
    case 'typescript':
      return <SiTypescript title={name} size={size} />;
    case 'reactjs':
      return <FaReact title={name} size={size} />;
    case 'vue':
      return <FaVuejs title={name} size={size} />;
    case 'jest':
      return <SiJest title={name} size={size} />;
    case 'python':
      return <FaPython title={name} size={size} />;
    case 'nodejs':
      return <FaNodeJs title={name} size={size} />;
    case 'postgresql':
      return <DiPostgresql title={name} size={size} />;
    case 'docker':
      return <FaDocker title={name} size={size} />;
    case 'git':
      return <FaGit title={name} size={size} />;
    case 'aws':
      return <FaAws title={name} size={size} />;
    case 'graphql':
      return <SiGraphql title={name} size={size} />;
    case 'adonisjs':
      return <SiAdonisjs title={name} size={size} />;
    case 'antdesign':
      return <AiOutlineAntDesign title={name} size={size} />;
    case 'bootstrap':
      return <FaBootstrap title={name} size={size} />;
    case 'sass':
      return <FaSass title={name} size={size} />;
    case 'html':
      return <FaHtml5 title={name} size={size} />;
    case 'css':
      return <FaCss3 title={name} size={size} />;
    case 'mui':
      return <SiMaterialUi title={name} size={size} />;
    case 'tailwind':
      return <SiTailwindcss title={name} size={size} />;
    default:
      return null;
  }
}

export default TechIcons;
