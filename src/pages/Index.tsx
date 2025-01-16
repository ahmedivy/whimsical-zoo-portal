import { Users, ArrowRight, DollarSign, Calendar } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { AnimalCard } from "@/components/AnimalCard";
import { VisitorChart } from "@/components/VisitorChart";
import { ActivityFeed } from "@/components/ActivityFeed";
import { Button } from "@/components/ui/button";
import { useAnimals } from "@/hooks/useAnimals";
import { useVisitors } from "@/hooks/useVisitors";

const Index = () => {
  const { data: animals, isLoading: isLoadingAnimals } = useAnimals();
  const { data: visitors } = useVisitors();

  const todayVisitors = visitors?.[visitors.length - 1]?.count || 0;
  const totalAnimals = animals?.length || 0;

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
            value={todayVisitors.toString()}
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Total Animals"
            value={totalAnimals.toString()}
            icon={<ArrowRight className="h-4 w-4 text-muted-foreground" />}
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
          {isLoadingAnimals ? (
            <p className="text-muted-foreground">Loading animals...</p>
          ) : (
            animals?.map((animal) => (
              <AnimalCard
                key={animal.id}
                name={animal.name}
                species={animal.species}
                status={animal.status}
                image={animal.image_url || ""}
              />
            ))
          )}
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