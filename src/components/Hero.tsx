import picture from "../assets/jaime-contemprato.jpg";
import htmlLogo from "../assets/html-5-logo.svg";
import cssLogo from "../assets/css-3-logo.svg";
import jsLogo from "../assets/javascript-logo.svg";
import tsLogo from "../assets/typescript-logo.svg";
import reactLogo from "../assets/react-logo.svg";

function Hero() {
  return (
    <>
      <div className="hero" id="Jaime">
        <div className="hero-text">
          <h1 className="heroName header-text danfo-font">Jaime Contemprato</h1>
          <h2 className="heroTitle montserrat-font">Front End Developer</h2>
          <p className="heroDescription open-sans-font">
            <span className="bold">BS Information Technology graduate </span>
            specializing in software development, with a current focus on
            <span className="bold"> responsive front-end development</span>. A
            fast learner and a dedicated hard worker, I approach challenges with
            a logical mindset to deliver clean, user-friendly, and efficient
            solutions. Passionate about crafting intuitive interfaces and
            continuously improving my skills in the evolving tech landscape.
          </p>
          <h2 className="heroTitle montserrat-font">My Current Tech Stack:</h2>
          <div className="techStack">
            <img className="techImg" src={htmlLogo} alt="HTML logo"></img>
            <img className="techImg" src={cssLogo} alt="CSS logo"></img>
            <img className="techImg" src={jsLogo} alt="JavaScript logo"></img>
            <img className="techImg" src={tsLogo} alt="React logo"></img>
            <img className="techImg" src={reactLogo} alt="React logo"></img>
          </div>
        </div>
        <img
          className="hero-picture"
          src={picture}
          alt="Jaime Contemprato software developer picture"
        ></img>
      </div>
      <hr></hr>
    </>
  );
}

export default Hero;
