import { useEffect, useState } from "react";
import { fetchGraduateById } from "@/app/lib/firebase/data";
import { Graduate } from "@/app/lib/types";

const useFetchGraduateById = (id: string) => {
  const [graduate, setGraduate] = useState<Graduate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getGraduate = async () => {
      try {
        const data = await fetchGraduateById(id);
        setGraduate(data);
      } catch (err) {
        // Explicitly type the error as Error
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    getGraduate();
  }, [id]);

  return { graduate, loading, error };
};

export default useFetchGraduateById;
