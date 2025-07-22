import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Country {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
  flag: string;
}

export const supportedCountries: Country[] = [
  { code: 'NG', name: 'Nigeria', currency: 'NGN', currencySymbol: '₦', flag: '🇳🇬' },
  { code: 'GH', name: 'Ghana', currency: 'GHS', currencySymbol: '₵', flag: '🇬🇭' },
  { code: 'ZA', name: 'South Africa', currency: 'ZAR', currencySymbol: 'R', flag: '🇿🇦' },
  { code: 'KE', name: 'Kenya', currency: 'KES', currencySymbol: 'KSh', flag: '🇰🇪' },
  { code: 'BR', name: 'Brazil', currency: 'BRL', currencySymbol: 'R$', flag: '🇧🇷' },
  { code: 'AR', name: 'Argentina', currency: 'ARS', currencySymbol: '$', flag: '🇦🇷' },
  { code: 'CO', name: 'Colombia', currency: 'COP', currencySymbol: '$', flag: '🇨🇴' },
  { code: 'MX', name: 'Mexico', currency: 'MXN', currencySymbol: '$', flag: '🇲🇽' },
];

interface CountryContextType {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  isLoading: boolean;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};

interface CountryProviderProps {
  children: ReactNode;
}

export const CountryProvider: React.FC<CountryProviderProps> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(supportedCountries[0]); // Default to Nigeria
  const [isLoading, setIsLoading] = useState(true);

  // Auto-detect location and set country
  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Try to get user's location from various sources
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          const detectedCountry = supportedCountries.find(
            country => country.code === data.country_code
          );
          
          if (detectedCountry) {
            setSelectedCountry(detectedCountry);
          }
        }
      } catch (error) {
        console.log('Could not detect location, using default country');
      } finally {
        setIsLoading(false);
      }
    };

    detectCountry();
  }, []);

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry, isLoading }}>
      {children}
    </CountryContext.Provider>
  );
};