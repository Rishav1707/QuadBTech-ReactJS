/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ShowList({ shows }) {
  return (
    <div className="mainSection">
      {shows.map((show) => (
        <div key={show.show.id} className="showList">
          {show.show.image && (
            <img src={show.show.image.medium} className="showImage" />
          )}
          <h2>{show.show.name}</h2>
          <p>{show.show.genres}</p>
          <Link to="/summary">
            <button>View Summary</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
