/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import './footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <a
        href="https://github.com/vaporjawn"
        target="_blank"
        rel="noreferrer"
        className="GitHubLink"
      >
        <img
          src="https://img.shields.io/badge/GitHub-vaporjawn-181717?style=for-the-badge&logo=github"
          alt="GitHub"
          className="GitHubImage"
        />
      </a>
    </footer>
  );
};

export default Footer;
