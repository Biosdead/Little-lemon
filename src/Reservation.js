import ReservationCss from './Reservation.css';
export default function Reservation(){
    return(
//         <form>
//             <h1>Book your Reservation</h1>
//    <label for="res-fname">First Name*</label>
//    <input type="text" id="res-fname"/>
//    <label for="res-lname">Last Name*</label>
//    <input type="text" id="res-lname"/>
//    <label for="res-date">Choose date*</label>
//    <input type="date" id="res-date"/>
//    <label for="res-time">Choose time*</label>
//    <select id="res-time ">
//       <option>17:00</option>
//       <option>18:00</option>
//       <option>19:00</option>
//       <option>20:00</option>
//       <option>21:00</option>
//       <option>22:00</option>
//    </select>
//    <label for="guests">Number of guests*</label>
//    <input type="number" placeholder="1" min="1" max="10" id="guests"/>
//    <label for="occasion">Occasion</label>
//    <select id="occasion">
//       <option>Birthday</option>
//       <option>Anniversary</option>
//       <option>Engagement</option>
//       <option>Wedding</option>
//       <option>Summer Time</option>
//    </select>
//    <input type="submit" value="Make Your reservation"/>
// </form>

<form class="ReservationForm" novalidate>
  <h1>Book your reservation</h1>

  <div class="grid">
    <label for="res-fname">First name<span>*</span></label>
    <input type="text" id="res-fname" required />

    <label for="res-lname">Last name<span>*</span></label>
    <input type="text" id="res-lname" required />

    <label for="res-date">Choose date<span>*</span></label>
    <input type="date" id="res-date" required />

    <label for="res-time">Choose time<span>*</span></label>
    <select id="res-time" required>
      <option value="">—</option>
      <option>17:00</option><option>18:00</option><option>19:00</option>
      <option>20:00</option><option>21:00</option><option>22:00</option>
    </select>

    <label for="guests">Number of guests<span>*</span></label>
    <input type="number" id="guests" min="1" max="10" placeholder="1" required />

    <label for="occasion">Occasion</label>
    <select id="occasion">
      <option value="">—</option>
      <option>Birthday</option><option>Anniversary</option><option>Engagement</option>
      <option>Wedding</option><option>Summer Time</option>
    </select>
  </div>

  <button type="submit">Make your reservation</button>
</form>
    );
}