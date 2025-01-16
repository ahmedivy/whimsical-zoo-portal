import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useActivities } from "@/hooks/useActivities";
import { format } from "date-fns";

export function ActivityFeed() {
  const { data: activities, isLoading } = useActivities();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {isLoading ? (
            <p className="text-sm text-muted-foreground">Loading activities...</p>
          ) : (
            activities?.map((activity) => (
              <div key={activity.id} className="mb-4 last:mb-0">
                <p className="text-sm font-medium">{activity.description}</p>
                <p className="text-xs text-muted-foreground">
                  {format(new Date(activity.created_at), "PPp")}
                </p>
              </div>
            ))
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}