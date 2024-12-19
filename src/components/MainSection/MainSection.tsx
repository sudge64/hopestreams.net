import { Link } from "react-router-dom";
import "./MainSection.css";
import wades from "../../assets/stephen_and_crystal_wade.png";

const MainSection = () => {
  return (
    <div className="main-section-background">
      <div className="main-section">
        <div className="text">
          <h1>Welcome to</h1><h1>Hope Streams</h1>
          <br />
          <p>
            <em>Connecting the generations to the Father <br/>and each other.</em>
          </p>
          <p>
            <b>
              <i>
                Start well.
                <br />
                Live well.
                <br />
                Recover well.
                <br />
                Build well.
                <br />
                Finish well.
                <br />
                <br />
              </i>
            </b>
          </p>
          <Link to="https://thelivinghopeblog.com/about/">
            <button className="read-more">Read More</button>
          </Link>
        </div>
        <div className="image">
          <img src={wades} alt="People smiling" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
