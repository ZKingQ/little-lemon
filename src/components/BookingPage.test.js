import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BookingForm } from './BookingPage';
import { act } from "react-dom/test-utils";

describe('BookingForm', () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingForm
      availableTimes={[]}
      setAvailableTimes={jest.fn()}
    />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  })

  test('Test form submit and validation', async () => {
    render(<BookingForm
      availableTimes={[]}
      setAvailableTimes={jest.fn()}
    />);
    const submitButton = screen.getByText("Book Now");
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);
    const dateError = await screen.findByText("Required");
    expect(dateError).toBeInTheDocument();
  });
});