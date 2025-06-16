
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Home, Users, Star } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import FeaturedCities from "@/components/FeaturedCities";
import { mockProperties } from "@/data/mockData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [propertyType, setPropertyType] = useState("all");

  const filteredProperties = mockProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === "all" || property.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesType = propertyType === "all" || property.type === propertyType;
    
    return matchesSearch && matchesCity && matchesPrice && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Find Your Perfect Home
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover amazing rooms and flats for rent in Jaipur and other major cities. 
              Your dream home is just a click away.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by location, property name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Button size="lg" className="h-12 px-8">
                  <Search className="mr-2 h-5 w-5" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <FeaturedCities onCitySelect={setSelectedCity} />

      {/* Search Results Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <SearchFilters
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                propertyType={propertyType}
                setPropertyType={setPropertyType}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
              />
            </div>

            {/* Property Listings */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {filteredProperties.length} Properties Found
                  {selectedCity !== "all" && ` in ${selectedCity}`}
                </h2>
                <Badge variant="secondary" className="text-sm">
                  {filteredProperties.length} results
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="text-center py-12">
                  <Home className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or explore other cities.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">10,000+</h3>
              <p className="text-primary-foreground/80">Properties Listed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-primary-foreground/80">Cities Covered</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">25,000+</h3>
              <p className="text-primary-foreground/80">Happy Tenants</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">4.8★</h3>
              <p className="text-primary-foreground/80">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
