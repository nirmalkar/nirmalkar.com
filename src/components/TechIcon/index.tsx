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
import { SiFirebase } from '@react-icons/all-files/si/SiFirebase';
import { SiGraphql } from '@react-icons/all-files/si/SiGraphql';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiJest } from '@react-icons/all-files/si/SiJest';
import { SiMaterialUi } from '@react-icons/all-files/si/SiMaterialUi';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeProvider';

type TechIconsPropsType = {
  name: string;
  size?: number;
  color?: string;
};

const defaultIconProps = (color: string) => ({
  style: { color },
  'aria-hidden': true,
});

function TechIcons({ name, size = 24, color }: TechIconsPropsType) {
  const { theme } = useContext(ThemeContext);
  const iconColor = color || theme?.colors?.oppositePrimary || '#ffffff';
  const iconProps = {
    size,
    title: name,
    ...defaultIconProps(iconColor),
  };

  switch (name.toLowerCase()) {
    case 'javascript':
      return <SiJavascript {...iconProps} />;
    case 'typescript':
      return <SiTypescript {...iconProps} />;
    case 'reactjs':
      return <FaReact {...iconProps} />;
    case 'vue':
      return <FaVuejs {...iconProps} />;
    case 'jest':
      return <SiJest {...iconProps} />;
    case 'python':
      return <FaPython {...iconProps} />;
    case 'nodejs':
      return <FaNodeJs {...iconProps} />;
    case 'postgresql':
      return <DiPostgresql {...iconProps} />;
    case 'docker':
      return <FaDocker {...iconProps} />;
    case 'git':
      return <FaGit {...iconProps} />;
    case 'aws':
      return <FaAws {...iconProps} />;
    case 'graphql':
      return <SiGraphql {...iconProps} />;
    case 'adonisjs':
      return <SiAdonisjs {...iconProps} />;
    case 'antdesign':
      return <AiOutlineAntDesign {...iconProps} />;
    case 'bootstrap':
      return <FaBootstrap {...iconProps} />;
    case 'sass':
      return <FaSass {...iconProps} />;
    case 'html':
      return <FaHtml5 {...iconProps} />;
    case 'css':
      return <FaCss3 {...iconProps} />;
    case 'mui':
      return <SiMaterialUi {...iconProps} />;
    case 'tailwind':
      return <SiTailwindcss {...iconProps} />;
    case 'nextjs':
      return <SiNextDotJs {...iconProps} />;
    case 'firebase':
      return <SiFirebase {...iconProps} />;
    default:
      return null;
  }
}

export default TechIcons;
