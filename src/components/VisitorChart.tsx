import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useVisitors } from "@/hooks/useVisitors";
import { format } from "date-fns";

export function VisitorChart() {
  const { data: visitors, isLoading } = useVisitors();

  const chartData = visitors?.map((visitor) => ({
    name: format(new Date(visitor.visit_date), "EEE"),
    visitors: visitor.count,
  })) || [];

  return (
    <Card className="w-full h-[400px]">
      <CardHeader>
        <CardTitle>Weekly Visitors</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground">Loading chart data...</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visitors" stroke="#2D5A27" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}