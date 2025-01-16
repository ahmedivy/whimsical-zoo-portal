import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Activity {
  id: number;
  description: string;
  time: string;
}

const activities: Activity[] = [
  { id: 1, description: "Lion feeding scheduled", time: "2 minutes ago" },
  { id: 2, description: "New penguin arrived", time: "1 hour ago" },
  { id: 3, description: "Veterinary check-up completed", time: "2 hours ago" },
  { id: 4, description: "Habitat maintenance", time: "3 hours ago" },
  { id: 5, description: "School tour booked", time: "5 hours ago" },
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {activities.map((activity) => (
            <div key={activity.id} className="mb-4 last:mb-0">
              <p className="text-sm font-medium">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}