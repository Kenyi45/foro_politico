import React, { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outline' | 'glass' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  hover?: 'none' | 'lift' | 'glow' | 'scale';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  interactive?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  size = 'md',
  hover = 'lift',
  className = '',
  style,
  onClick,
  interactive = false
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300 overflow-hidden';

  const variantClasses = {
    default: 'bg-white border border-neutral-200 shadow-soft',
    elevated: 'bg-white shadow-large',
    outline: 'bg-transparent border-2 border-neutral-300',
    glass: 'bg-white/70 backdrop-blur-lg border border-white/20 shadow-soft',
    gradient: 'bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 shadow-medium'
  };

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverClasses = {
    none: '',
    lift: 'hover:shadow-xl hover:-translate-y-2',
    glow: 'hover:shadow-glow',
    scale: 'hover:scale-105'
  };

  const interactiveClasses = interactive || onClick ? 'cursor-pointer' : '';

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${hoverClasses[hover]}
    ${interactiveClasses}
    ${className}
  `.trim();

  return (
    <div className={combinedClasses} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

// Sub-components for better composition
export const CardHeader: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <h3 className={`text-xl font-bold text-neutral-900 ${className}`}>
    {children}
  </h3>
);

export const CardDescription: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <p className={`text-neutral-600 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const CardContent: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`mt-6 ${className}`}>
    {children}
  </div>
);

export default Card; 