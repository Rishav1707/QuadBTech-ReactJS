/* eslint-disable react/prop-types */
import ShowSummary from "../components/ShowSummary";

function ShowDetails({ show }) {
  return <div>{show && <ShowSummary shows={show} />}</div>;
}

export default ShowDetails;
