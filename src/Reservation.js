// Reservation.jsx
import React, { useState } from 'react';
import './Reservation.css';

export default function Reservation() {
  /* ---------------- estado dos campos ---------------- */
  const [form, setForm] = useState({
    fName: '',
    lName: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  /* -------------- estado de erros e sucesso ---------- */
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* -------------- helpers de validação --------------- */
  const todayISO = new Date().toISOString().split('T')[0];

  function validate(current) {
    const e = {};

    if (!current.fName.trim())          e.fName  = 'First name is required';
    else if (current.fName.length < 2)  e.fName  = 'Min. 2 characters';

    if (!current.lName.trim())          e.lName  = 'Last name is required';
    else if (current.lName.length < 2)  e.lName  = 'Min. 2 characters';

    if (!current.date)                  e.date   = 'Date is required';
    else if (current.date < todayISO)   e.date   = 'No past dates';

    if (!current.time)                  e.time   = 'Time is required';

    if (current.guests < 1 || current.guests > 10)
                                         e.guests = '1-10 guests only';

    /* occasion é opcional */

    return e;
  }

  /* -------------- handlers --------------------------- */
  const idMap = {
    'res-fname': 'fName',
    'res-lname': 'lName',
    'res-date' : 'date',
    'res-time' : 'time',
    guests     : 'guests',
    occasion   : 'occasion',
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [idMap[id]]: id === 'guests' ? +value : value,
    }));
    if (isSuccess) setIsSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const currentErrors = validate(form);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      setIsSuccess(true);
      window.alert(
        `Reservation confirmed!\n\n` +
          `Name: ${form.fName} ${form.lName}\n` +
          `Date: ${form.date}\nTime: ${form.time}\n` +
          `Guests: ${form.guests}\nOccasion: ${form.occasion || '—'}`
      );
    }
  };

  /* ------------------- JSX --------------------------- */
  return (
    <form className="ReservationForm" noValidate onSubmit={handleSubmit}>
      <h1>Book your reservation</h1>

      <div className="grid">
        {/* First name ------------------------------------------------ */}
        <div className="field">
          <label htmlFor="res-fname">
            First name <span>*</span>
          </label>
          <input
            id="res-fname"
            type="text"
            value={form.fName}
            onChange={handleChange}
            aria-invalid={submitted && errors.fName ? 'true' : 'false'}
          />
          {submitted && errors.fName && <small>{errors.fName}</small>}
        </div>

        {/* Last name ------------------------------------------------- */}
        <div className="field">
          <label htmlFor="res-lname">
            Last name <span>*</span>
          </label>
          <input
            id="res-lname"
            type="text"
            value={form.lName}
            onChange={handleChange}
            aria-invalid={submitted && errors.lName ? 'true' : 'false'}
          />
          {submitted && errors.lName && <small>{errors.lName}</small>}
        </div>

        {/* Date ------------------------------------------------------ */}
        <div className="field">
          <label htmlFor="res-date">
            Choose date <span>*</span>
          </label>
          <input
            id="res-date"
            type="date"
            min={todayISO}
            value={form.date}
            onChange={handleChange}
            aria-invalid={submitted && errors.date ? 'true' : 'false'}
          />
          {submitted && errors.date && <small>{errors.date}</small>}
        </div>

        {/* Time ------------------------------------------------------ */}
        <div className="field">
          <label htmlFor="res-time">
            Choose time <span>*</span>
          </label>
          <select
            id="res-time"
            value={form.time}
            onChange={handleChange}
            aria-invalid={submitted && errors.time ? 'true' : 'false'}
          >
            <option value="">—</option>
            <option>17:00</option><option>18:00</option><option>19:00</option>
            <option>20:00</option><option>21:00</option><option>22:00</option>
          </select>
          {submitted && errors.time && <small>{errors.time}</small>}
        </div>

        {/* Guests ---------------------------------------------------- */}
        <div className="field">
          <label htmlFor="guests">
            Number of guests <span>*</span>
          </label>
          <input
            id="guests"
            type="number"
            min="1"
            max="10"
            value={form.guests}
            onChange={handleChange}
            aria-invalid={submitted && errors.guests ? 'true' : 'false'}
          />
          {submitted && errors.guests && <small>{errors.guests}</small>}
        </div>

        {/* Occasion -------------------------------------------------- */}
        <div className="field">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={form.occasion}
            onChange={handleChange}
          >
            <option value="">—</option>
            <option>Birthday</option><option>Anniversary</option>
            <option>Engagement</option><option>Wedding</option>
            <option>Summer Time</option>
          </select>
        </div>
      </div>

      <button type="submit">Submit</button>

      {/* ---------- Resumo de sucesso -------------- */}
      {isSuccess && (
        <section className="summary">
          <h2>Reservation confirmed!</h2>
          <p>
            <strong>Name:</strong> {form.fName} {form.lName}<br />
            <strong>Date:</strong> {form.date}<br />
            <strong>Time:</strong> {form.time}<br />
            <strong>Guests:</strong> {form.guests}<br />
            <strong>Occasion:</strong> {form.occasion || '—'}
          </p>
        </section>
      )}
    </form>
  );
}