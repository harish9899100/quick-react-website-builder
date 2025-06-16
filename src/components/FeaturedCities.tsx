
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeaturedCitiesProps {
  onCitySelect: (city: string) => void;
}

const FeaturedCities = ({ onCitySelect }: FeaturedCitiesProps) => {
  const cities = [
    {
      name: "Jaipur",
      image: "photo-1487958449943-2429e8be8625",
      properties: "2,500+",
      avgPrice: "₹15,000",
      description: "Pink City with royal heritage"
    },
    {
      name: "Delhi",
      image: "photo-1472396961693-142e6e269027",
      properties: "5,000+",
      avgPrice: "₹25,000",
      description: "Capital city with endless opportunities"
    },
    {
      name: "Mumbai",
      image: "photo-1721322800607-8c38375eef04",
      properties: "8,000+",
      avgPrice: "₹35,000",
      description: "Financial capital of India"
    },
    {
      name: "Bangalore",
      image: "photo-1582562124811-c09040d0a901",
      properties: "4,500+",
      avgPrice: "₹20,000",
      description: "Silicon Valley of India"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Top Cities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover amazing properties in India's most popular rental destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <Card 
              key={city.name} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              onClick={() => onCitySelect(city.name)}
            >
              <div className="relative">
                <img
                  src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={city.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-xl">{city.name}</h3>
                  <p className="text-white/80 text-sm">{city.description}</p>
                </div>
                <Badge className="absolute top-3 right-3 bg-white/90 text-primary">
                  {city.properties} properties
                </Badge>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg. Rent</span>
                  <span className="font-semibold text-primary">{city.avgPrice}/month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCities;
