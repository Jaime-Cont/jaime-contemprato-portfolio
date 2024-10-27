import Logo from "../assets/logo.png";
import LinkedInLogo from "../assets/linkedin-logo.svg";
import GitHubLogo from "../assets/github-logo.svg";

function Footer() {
  return (
    <footer>
      <a href="#Jaime">
        <img
          src={Logo}
          alt="Jaime Contemprato logo"
          className="footer-logo"
        ></img>
      </a>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/jm-contemprato/" target="_blank">
          <img
            src={LinkedInLogo}
            alt="LinkedIn logo"
            className="footer-logo-socs"
          ></img>
        </a>
        <a href="https://github.com/Jaime-Cont" target="_blank">
          <img
            src={GitHubLogo}
            alt="GitHub logo"
            className="footer-logo-socs"
          ></img>
        </a>
      </div>
      <p className="open-sans-font">&copy; 2024 Jaime Contemprato</p>
    </footer>
  );
}

export default Footer;
