/* eslint-disable react/prop-types */
export default function ShowSummary({ shows }) {
  return (
    <div>
      <h2>{shows.show.name}</h2>
      <p>{shows.show.summary}</p>
      {/* Add movie ticket booking form here */}
    </div>
  );
}
