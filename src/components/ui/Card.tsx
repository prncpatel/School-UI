import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  gradient = false,
  hoverable = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        relative
        bg-white dark:bg-gray-800
        ${gradient ? 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900' : ''}
        shadow-lg dark:shadow-gray-900/30
        rounded-xl
        border border-gray-200 dark:border-gray-700
        p-6
        transition-all duration-200 ease-in-out
        ${hoverable ? 'hover:shadow-xl dark:hover:shadow-gray-900/50 hover:scale-[1.02]' : ''}
        backdrop-blur-sm
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;