import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useVisitors() {
  return useQuery({
    queryKey: ["visitors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("visitors")
        .select("*")
        .order("visit_date", { ascending: true })
        .limit(7);

      if (error) throw error;
      return data;
    },
  });
}