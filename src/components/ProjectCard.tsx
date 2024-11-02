import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Activity, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'cloud':
        return <Cloud className="w-8 h-8" />;
      case 'activity':
        return <Activity className="w-8 h-8" />;
      case 'code':
        return <Code className="w-8 h-8" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-4 text-white/80">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ProjectCard;