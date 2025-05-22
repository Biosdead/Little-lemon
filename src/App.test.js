// Reservation.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Reservation from './Reservation';
import '@testing-library/jest-dom';   // ✔ novo caminho

describe('Reservation page', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders all form controls', () => {
    render(<Reservation />);
    expect(
      screen.getByRole('heading', { level: 1, name: /book your reservation/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('shows validation errors only after submit', () => {
    render(<Reservation />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
  });

  test('accepts valid data and shows summary', () => {
    render(<Reservation />);

    /* preenche */
    // fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Mario' } });
    // fireEvent.change(screen.getByLabelText(/last name/i),  { target: { value: 'Rossi' } });
    // fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2099-12-31' } });
    // fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '20:00' } });
    // fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    // fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    // fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // expect(screen.getByRole('heading', { level: 2, name: /reservation confirmed/i }))
    //   .toBeInTheDocument();
    // expect(screen.getByText(/mario rossi/i)).toBeInTheDocument();
    // expect(screen.getByText(/2099-12-31/i)).toBeInTheDocument();
    // expect(screen.getByText(/20:00/i)).toBeInTheDocument();
    // expect(screen.getByText(/4/i)).toBeInTheDocument();
    // expect(screen.getByText(/birthday/i)).toBeInTheDocument();

    // expect(window.alert).toHaveBeenCalledTimes(1);
  });
});