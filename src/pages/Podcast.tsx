import { Link } from "react-router-dom";
import podcastLogoLS from "../assets/hopestreams_podcast_logo.png";
import podcastLogoYT from "../assets/hopestreams_podcast_logo.png";
import "./Podcast.css";

const Podcast = () => {
  return (
    <div className="text-background">
      <div style={{ padding: "20px" }}>
        <h1>Podcast</h1>
        <div className="podcast-container">
          <div className="podcast-ls">
            <h3>Listen on Libsyn!</h3>
            <Link to="https://directory.libsyn.com/shows/view/id/hopestreams">
              <img
                src={podcastLogoLS}
                alt="Logo for the Hope Streams podcast on Libsyn"
              />
            </Link>
          </div>
          <div className="podcast-yt">
            <h3>Listen on YouTube!</h3>
            <Link to="https://www.youtube.com/playlist?list=PL94jVU2LUcHjzVJYimoYJzv9FkeHobWzQ">
              <img
                src={podcastLogoYT}
                alt="Logo for the Hope Streams podcast on Libsyn"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
