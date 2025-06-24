import { useEffect, useState } from 'react';

interface LocationInfo {
  countryCode: string;
  currency: string;
  currencySymbol: string;
  baseAmount: number;
}

const DEFAULT_LOCATION: LocationInfo = {
  countryCode: 'PE',
  currency: 'PEN',
  currencySymbol: 'S/',
  baseAmount: 15000 // 150 soles en centavos
};

export const useLocation = () => {
  const [locationInfo, setLocationInfo] = useState<LocationInfo>(DEFAULT_LOCATION);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        // Determinar la moneda y el monto basado en el país
        let currency = 'PEN';
        let currencySymbol = 'S/';
        let baseAmount = 15000; // 150 soles en centavos

        if (data.country_code === 'PE') {
          currency = 'PEN';
          currencySymbol = 'S/';
          baseAmount = 15000; // 150 soles en centavos
        } else {
          currency = 'USD';
          currencySymbol = '$';
          baseAmount = 20000; // 200 dólares en centavos
        }

        setLocationInfo({
          countryCode: data.country_code,
          currency,
          currencySymbol,
          baseAmount
        });
      } catch (err) {
        console.error('Error detecting location:', err);
        setError('No se pudo detectar la ubicación');
        // Usar valores por defecto en caso de error
        setLocationInfo(DEFAULT_LOCATION);
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  return { locationInfo, isLoading, error };
};

export const formatAmount = (amount: number, currency: string): string => {
  const formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  });

  return formatter.format(amount / 100);
}; 