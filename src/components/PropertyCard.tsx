
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Star, Home } from "lucide-react";

interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
  isVerified: boolean;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={`https://images.unsplash.com/${property.image}?auto=format&fit=crop&w=500&q=80`}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-white/90 text-primary">
            {property.type}
          </Badge>
          {property.isVerified && (
            <Badge className="bg-green-500 text-white">
              Verified
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-white/90 font-bold">
            ₹{property.price.toLocaleString()}/month
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{property.rating}</span>
            <span className="text-xs text-muted-foreground">({property.reviews})</span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}, {property.city}</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span>{property.bedrooms} BHK</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{property.bathrooms} Bath</span>
            </div>
            <span>{property.area} sq ft</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {property.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {property.features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{property.features.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button size="sm" className="flex-1">
            Contact Owner
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
