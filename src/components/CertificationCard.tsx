import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  code: string;
  status: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, code, status }) => {
  return (
    <motion.div
      className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-start gap-4">
        <Award className="w-8 h-8 text-white/80" />
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-400">{code}</p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
            status === 'Completed' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
          }`}>
            {status}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;