import './BookingPage.css';
import React, { useEffect } from 'react';
import { Form, ErrorMessage, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <div className="booking-confirmed">
      <h2>Booking Confirmed</h2>
      <p>Thank you for booking with us. We look forward to seeing you.</p>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

const BookingForm = (props) => {
  const yup = Yup.object({
    date: Yup.date().required('Required'),
    time: Yup.string().required('Required'),
    guests: Yup.number().min(1, 'Min number: 1').max(10, 'Max number: 10').required('Required'),
    occasion: Yup.string().required('Required'),
  });
  const [date, setDate] = React.useState('');
  const {setAvailableTimes} = props;
  useEffect(() => {
    setAvailableTimes({ type: 'update', date: new Date(date) });
  }, [date, setAvailableTimes]);
  return (
    <Formik
      initialValues={{
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'Birthday',
      }}
      validationSchema={yup}
      onSubmit={(values, { setSubmitting }) => {
        props.submitForm(values);
        setSubmitting(false);
      }}
    >
      {formik => (
        <Form className='form'>
          <label htmlFor="res-date">Choose date</label>
          <Field type="date" id="res-date" name="date" 
            onChange={(e) => {
              setDate(e.target.value)
              formik.handleChange(e)
            }}
           />
          <ErrorMessage name="date" />
          <label htmlFor="res-time">Choose time</label>
          <Field as="select" id="res-time" name="time">
            {props.availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </Field>
          <ErrorMessage name="time" />
          <label htmlFor="guests">Number of guests</label>
          <Field type="number" id="guests" name="guests" />
          <ErrorMessage name="guests" />
          <label htmlFor="occasion">Occasion</label>
          <Field as="select" id="occasion" name="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </Field>
          <ErrorMessage name="occasion" />
          <input type="submit" value="Book Now"
            aria-label="Book Now"
            disabled={!formik.isValid}
          />
        </Form>
      )}
    </Formik>
  );
}

const BookingPage = (props) => {
  return (
    <>
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