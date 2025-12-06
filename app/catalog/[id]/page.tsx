import { getOneCamper } from "@/lib/api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import CamperHeader from "@/components/CamperDetails/CamperHeader";
import Features from "@/components/CamperDetails/Features";
import Reviews from "@/components/CamperDetails/Reviews";
import BookingForm from "@/components/CamperDetails/BookingForm";

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
      <h1>Page Details</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CamperHeader id={id} />;
        <Features />
        <Reviews />
        <BookingForm />
      </HydrationBoundary>
    </div>
  );
};

export default oneCamper;
