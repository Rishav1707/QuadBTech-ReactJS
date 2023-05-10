/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import ShowSummary from "../components/ShowSummary";
import { useParams } from "react-router-dom";

function ShowDetails() {
  const { id } = useParams();
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    async function getSummary() {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setSummary(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    }

    getSummary();
  }, [id]);

  return <>{summary && <ShowSummary summary={summary} />}</>;
}

export default ShowDetails;
