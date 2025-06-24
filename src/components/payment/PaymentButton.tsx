import React from 'react';
import { UserPlus } from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext';

export interface PaymentButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  description: string;
  customerEmail: string;
  onSuccess?: (registrationResult: any) => void;
  onError?: (error: any) => void;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  className = '',
  description,
  customerEmail,
  onSuccess,
  onError
}) => {
  const { t } = useLanguage();

  const handleRegistration = async () => {
    try {
      // Simulate registration process
      const registrationResult = {
        success: true,
        email: customerEmail,
        description,
        registeredAt: new Date().toISOString(),
        registrationId: `FORUM-${Date.now()}`
      };

      setTimeout(() => {
        onSuccess?.(registrationResult);
      }, 1000);
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Registration button */}
      <Button
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        onClick={handleRegistration}
        icon={<UserPlus className="w-5 h-5" />}
      >
        Registrarse al Foro
      </Button>

      {/* Additional information */}
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600">
          Incluye acceso completo al foro, materiales digitales y certificado
        </p>
        <p className="text-xs text-gray-500">
          Registro gratuito - Únete a la comunidad de jóvenes políticos
        </p>
      </div>
    </div>
  );
};

export default PaymentButton; 