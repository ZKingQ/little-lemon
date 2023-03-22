import { fireEvent, render, screen } from "@testing-library/react";
import {BookingForm} from './BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingForm
        availableTimes={[]}
        setAvailableTimes={() => {}}
       />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Submit booking form', () => {
  render(<BookingForm
      availableTimes={[]}
      setAvailableTimes={() => {}}
     />);
  const submitButton = screen.getByText("Book Now");
  expect(submitButton).toBeInTheDocument();
  fireEvent.click(submitButton);
})