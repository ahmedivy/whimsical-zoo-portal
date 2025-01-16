import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnimalCardProps {
  name: string;
  species: string;
  status: "healthy" | "critical" | "attention";
  image: string;
}

export function AnimalCard({ name, species, status, image }: AnimalCardProps) {
  const statusColors = {
    healthy: "bg-green-500",
    critical: "bg-red-500",
    attention: "bg-yellow-500",
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge className={statusColors[status]}>{status}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{species}</p>
      </CardHeader>
    </Card>
  );
}