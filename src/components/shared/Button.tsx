import React from 'react';
import { colors } from '../../constants/colors';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  onClick,
}) => {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors';
  
  const variantStyles = {
    primary: `bg-[${colors.primary}] text-white hover:bg-[${colors.primaryHover}]`,
    secondary: `bg-[${colors.secondary}] text-white hover:bg-[${colors.secondaryHover}]`,
    outline: `border-2 border-[${colors.primary}] text-[${colors.primary}] hover:bg-[${colors.primary}] hover:text-white`,
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;