/* eslint-disable react/prop-types */
import ShowList from "../components/ShowList";
import logo from "../assets/show.png";

function Home({ show }) {
  return (
    <>
      <h1>
        <img src={logo} className="showLogo" />
        Book your Shows Now
      </h1>
      {show && <ShowList shows={show} />}
    </>
  );
}

export default Home;
