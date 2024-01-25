import instagramLogo from "../../assets/instagram-white-icon.svg";
import youtubeLogo from "../../assets/youtube-white-icon.svg";

import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__banner">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdN5W6ckPVynQEssYN4JPOZtLHas3h0vRSdfFcWPypgnwjwJw/viewform"
          target="blank"
        >
          Join the community
        </a>
        🔔
      </div>
      <div className="header__container">
        <div className="header__intro">
          <h1 className="header__title">DevCheck</h1>
          <h2>
            By{" "}
            <a href="https://twitter.com/ManuCastrillonM" target="blank">
              Marian Villa
            </a>{" "}
            &{" "}
            <a href="https://twitter.com/Marianvilla" target="blank">
              Manu Castrillon
            </a>
          </h2>
          <p>
            In our podcast, we share meaningful conversations about being women
            and Latinx in tech, embracing global opportunities, and geeking out
            about transformative technologies.
          </p>
        </div>
        <div className="header__social">
          <a
            className="header__social-link"
            href="https://www.instagram.com/devcheck.co"
          >
            <img src={instagramLogo} alt="link to instagram profile" />
          </a>
          <a className="header__social-link" href="www.youtube.com">
            <img src={youtubeLogo} alt="link to YouTube channel" />
          </a>
        </div>
      </div>
    </header>
  );
}
