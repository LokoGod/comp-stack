import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center mt-7">
        <p className="py-6">
          Need to find the latest technologies that are being used in Swe-Lankan
          companies?
          <br />
          You came to the right place
        </p>
        <Link to="/contributions" className="btn btn-primary">
          Pitch in
        </Link>
      </div>
      <Card />
    </>
  );
};

export default Home;
