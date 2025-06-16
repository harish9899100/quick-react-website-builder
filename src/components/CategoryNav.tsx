
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategoryNavProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryNav = ({ selectedCategory, onCategorySelect }: CategoryNavProps) => {
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "electronics", name: "Electronics" },
    { id: "clothing", name: "Fashion" },
    { id: "home", name: "Home & Garden" },
    { id: "books", name: "Books" },
    { id: "sports", name: "Sports & Outdoors" },
    { id: "beauty", name: "Beauty & Personal Care" },
    { id: "toys", name: "Toys & Games" },
    { id: "automotive", name: "Automotive" },
  ];

  return (
    <div className="bg-secondary/50 border-b">
      <div className="container mx-auto px-4">
        <ScrollArea className="w-full">
          <div className="flex space-x-2 py-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onCategorySelect(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CategoryNav;
