/* eslint-disable react/prop-types */
import { useState } from "react";

const BookingForm = ({ summary, toggleForm }) => {
  const moviename = `${summary.name}`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleBooking() {
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);

    setName("");
    setEmail("");

    alert("Booking successful!");
  }

  return (
    <div className="Form">
      <h2>Ticket Booking Form</h2>
      <div>
        <label htmlFor="name">Show</label>
        <input type="text" id="moviename" readOnly value={moviename} />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="booking-button">
        <button onClick={handleBooking}>Confirm</button>
        <button onClick={toggleForm}>Cancel</button>
      </div>
    </div>
  );
};

export default BookingForm;
