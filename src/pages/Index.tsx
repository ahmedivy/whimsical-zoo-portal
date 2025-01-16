import { Users, Paw, DollarSign, Calendar } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { AnimalCard } from "@/components/AnimalCard";
import { VisitorChart } from "@/components/VisitorChart";
import { ActivityFeed } from "@/components/ActivityFeed";
import { Button } from "@/components/ui/button";

const animals = [
  {
    name: "Leo",
    species: "African Lion",
    status: "healthy" as const,
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&h=600&fit=crop",
  },
  {
    name: "Luna",
    species: "Polar Bear",
    status: "attention" as const,
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&h=600&fit=crop",
  },
  {
    name: "Raja",
    species: "Bengal Tiger",
    status: "healthy" as const,
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&h=600&fit=crop",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary">Zoo Dashboard</h1>
          <div className="space-x-4">
            <Button variant="outline">Export Report</Button>
            <Button>Add Animal</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Daily Visitors"
            value="1,234"
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Total Animals"
            value="156"
            icon={<Paw className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Revenue"
            value="$12,345"
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Events Today"
            value="8"
            icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.name} {...animal} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <VisitorChart />
          </div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default Index;