import { getOneCamper } from "@/lib/api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import OneCamperClient from "./OneCamper.client";

type Props = { params: Promise<{ id: string }> };

const oneCamper = async ({ params }: Props) => {
  //Отримання id з URL
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["camper", id],
    queryFn: () => getOneCamper(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OneCamperClient id={id} />;
    </HydrationBoundary>
  );
};

export default oneCamper;
