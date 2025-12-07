import { getOneCamper } from "@/lib/api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import CamperDetails from "@/components/CamperDetails/CamperDetails";

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
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CamperDetails id={id} />
      </HydrationBoundary>
    </div>
  );
};

export default oneCamper;
