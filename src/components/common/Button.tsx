import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  loadingText?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';

  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl focus:ring-primary-500/50 hover:shadow-glow',
    secondary: 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg hover:shadow-xl focus:ring-accent-500/50 hover:shadow-glow-accent',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg hover:shadow-xl focus:ring-accent-500/50',
    gold: 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg hover:shadow-xl focus:ring-gold-500/50 hover:shadow-glow-gold',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500/50 bg-transparent',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500/50 bg-transparent'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  const iconElement = icon && (
    <span className={`${iconSizes[size]} ${iconPosition === 'right' ? 'ml-2' : 'mr-2'}`}>
      {icon}
    </span>
  );

  const loadingElement = isLoading && (
    <Loader2 className={`${iconSizes[size]} mr-2 animate-spin`} />
  );

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && loadingElement}
      {!isLoading && iconPosition === 'left' && iconElement}
      
      <span className="relative">
        {isLoading && loadingText ? loadingText : children}
      </span>
      
      {!isLoading && iconPosition === 'right' && iconElement}
    </button>
  );
};

export default Button; 