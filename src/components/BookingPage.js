import './BookingPage.css';
import React, { useEffect, useState } from 'react';

const ConfirmedBooking = (props) => {
  return (
    <div className="booking-confirmed">
      <h2>Booking Confirmed</h2>
      <p>Thank you for booking with us. We look forward to seeing you on {props.date} at {props.time}.</p>
    </div>
  );
}

const BookingForm = (props) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  useEffect(() => {
    props.setAvailableTimes({ type: 'update', date: new Date(date) });
  }, [date]);
  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={props.submitForm}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {props.availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder={1} min={1} max={10} id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Book Now" />
    </form>
  );
}

const BookingPage = (props) => {
  return (
    <>
      {/* TODO: add style for booking form */}
      <BookingForm
        availableTimes={props.availableTimes}
        setAvailableTimes={props.setAvailableTimes}
        submitForm={props.submitForm}
      />
    </>
  );
};

export { BookingForm, BookingPage, ConfirmedBooking };
export default BookingPage;