import './BookingPage.css';
import Footer from './Footer';
import Headers from './Header';
import Nav from './Nav';

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder={1} min={1} max={10} id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" defaultValue="Make Your reservation" />
    </form>
  );
}

const BookingPage = () => {
  return (
    <>
      <Headers />
      <Nav />
      {/* TODO: add style for booking form */}
      <BookingForm />
      <Footer />
    </>
  );
};

export default BookingPage;