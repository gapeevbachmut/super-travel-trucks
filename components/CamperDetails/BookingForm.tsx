import { Camper } from "@/types/camper";
import css from "./CamperDetails.module.css";

type Props = { camper: Camper };

const BookingForm = ({ camper }: Props) => {
  return (
    <div className={css.containerBookinggggg}>
      <h3>Book your campervan now</h3>
      <p>{camper.name}</p>
    </div>
  );
};

export default BookingForm;
