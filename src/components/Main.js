import React, {useReducer} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage, {ConfirmedBooking} from './BookingPage';
import { fetchAPI, submitAPI } from '../utils/API'

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'update':
      return fetchAPI(action.date);
    default:
      return state;
  }
};
const initializeTimes = () => {
  return fetchAPI(new Date());
};

function Main() {
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();
  const submitForm = (values) => {
    if (submitAPI(values)) {
      navigate('/booking/confirmed');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage 
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        submitForm={submitForm}
       />}></Route>
      <Route path="/booking/confirmed" element={<ConfirmedBooking />}></Route>
    </Routes>
  )
}

export {updateTimes, initializeTimes};
export default Main;