import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCountry, supportedCountries } from "@/contexts/CountryContext";

export const CountrySelector = () => {
  const { selectedCountry, setSelectedCountry, isLoading } = useCountry();

  const handleCountryChange = (countryCode: string) => {
    const country = supportedCountries.find(c => c.code === countryCode);
    if (country) {
      setSelectedCountry(country);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <Globe className="h-4 w-4 animate-spin" />
        <span className="text-sm hidden sm:inline">Loading...</span>
      </div>
    );
  }

  return (
    <Select value={selectedCountry.code} onValueChange={handleCountryChange}>
      <SelectTrigger className="w-auto border-none bg-transparent hover:bg-muted/50 transition-colors p-2 h-auto">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="text-sm font-medium hidden sm:inline">
              {selectedCountry.name}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {supportedCountries.map((country) => (
          <SelectItem key={country.code} value={country.code}>
            <div className="flex items-center gap-3">
              <span className="text-lg">{country.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium">{country.name}</span>
                <span className="text-xs text-muted-foreground">
                  {country.currency} ({country.currencySymbol})
                </span>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};