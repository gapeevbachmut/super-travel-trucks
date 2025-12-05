"use client";

import { getOneCamper } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

type Props = {
  id: string;
};
//id передав пропсом
const OneCamperClient = ({ id }: Props) => {
  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => getOneCamper(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error || !camper) return <p>Some error..</p>;

  return (
    <div>
      One Camper Client page
      <h2>Назва{camper.name}</h2>
      <p>Локація{camper.location}</p>
      <p>Тип{camper.form}</p>
      <p>КП{camper.transmission}</p>
      <p>Паливо{camper.engine}</p>
    </div>
  );
};

export default OneCamperClient;
