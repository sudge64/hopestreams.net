import './HeroSection.css';
import logo from '../../assets/hopestreams_white_logo.png';

const HeroSection = () => {
  return (
      <div className="hero-section">
        <div className="hero-logo">
          <img src={logo} />
        </div>
      </div>
  );
};

export default HeroSection;
