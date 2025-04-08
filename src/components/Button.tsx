import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  type = 'button',
  onClick,
  className = '',
  external = false,
}: ButtonProps) => {
  // Style variants
  const variantStyles = {
    primary: 'bg-red-700 text-white hover:bg-red-800',
    secondary: 'bg-yellow-500 text-black hover:bg-yellow-600',
    outline: 'bg-transparent border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white'
  };
  
  // Size variants
  const sizeStyles = {
    small: 'py-1 px-4 text-sm',
    medium: 'py-2 px-6 text-base',
    large: 'py-3 px-8 text-lg'
  };
  
  // Base styles
  const baseStyles = 'inline-block font-bold rounded-full transition-colors duration-300 text-center';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // External link case
  if (href && external) {
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyles}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  // Internal link case
  if (href && !external) {
    return (
      <Link href={href} className={buttonStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  // Button case (no href)
  return (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;