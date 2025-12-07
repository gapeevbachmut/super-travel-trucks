const BookingForm = () => {
  return <h1>Booking Form</h1>;
};

export default BookingForm;

//  BookingForm
// •	Форма (Formik + Yup), поля: name, email, dateFrom, dateTo, notes.
// •	При сабміті: якщо бекенд не має endpoint — симулюємо успіх і показуємо toast (react-toastify). Якщо є endpoint — POST на нього.
// Після успішної відправки показуєм повідомлення: “Бронювання прийнято”.
