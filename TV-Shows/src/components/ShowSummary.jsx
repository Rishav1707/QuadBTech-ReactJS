/* eslint-disable react/prop-types */
import { useState } from "react";
import BookingForm from "./BookingForm";

export default function ShowSummary({ summary }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function toggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  return (
    <div className="mainSummary">
      {summary.image && (
        <img src={summary.image.medium} className="showImage" />
      )}
      <h2>{summary.name}</h2>
      <p className="summary">{summary.summary}</p>
      {!isFormOpen ? (
        <button onClick={toggleForm}>Book Now</button>
      ) : (
        <BookingForm summary={summary} toggleForm={toggleForm} />
      )}
    </div>
  );
}
