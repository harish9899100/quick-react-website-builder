
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface SearchFiltersProps {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  propertyType: string;
  setPropertyType: (type: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

const SearchFilters = ({
  priceRange,
  setPriceRange,
  propertyType,
  setPropertyType,
  selectedCity,
  setSelectedCity,
}: SearchFiltersProps) => {
  const cities = ["Jaipur", "Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai"];
  const amenities = ["WiFi", "Parking", "AC", "Gym", "Swimming Pool", "Security"];

  const resetFilters = () => {
    setPriceRange([0, 50000]);
    setPropertyType("all");
    setSelectedCity("all");
  };

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Filters
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Reset
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* City Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">City</Label>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Property Type Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Property Type</Label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="room">Room</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
          </Label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={50000}
            min={0}
            step={1000}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>₹0</span>
            <span>₹50,000+</span>
          </div>
        </div>

        {/* Amenities Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Amenities</Label>
          <div className="space-y-2">
            {amenities.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox id={amenity} />
                <Label htmlFor={amenity} className="text-sm">
                  {amenity}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* BHK Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">BHK</Label>
          <div className="grid grid-cols-3 gap-2">
            {["1", "2", "3", "4", "5+"].map((bhk) => (
              <Button key={bhk} variant="outline" size="sm" className="h-8">
                {bhk}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
