import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails";
import "./App.css";

function App() {
  const [show, setShow] = useState([]);

  useEffect(() => {
    async function getShow() {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShow(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    }

    getShow();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home show={show} />} />
        <Route exact path="/summary/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
