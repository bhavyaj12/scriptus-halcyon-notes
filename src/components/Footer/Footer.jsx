import "./footer.css";

const Footer = () => {
  return (
    <footer className="landing-footer">
      <div className="footer-header">Made with 💜 by Bhavya Joshi</div>
      <ul className="mt-3 disp-inline-flex ul-no-decor footer-social">
        <a href="https://github.com/bhavyaj12" target="_blank">
          <i className="fab fa-github "></i>
        </a>
        <a href="https://twitter.com/bhavzlearn" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/bhavya-joshi-438178184"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </ul>
      <div className="mt-3 copy-right">© All Rights Reserved 2022 Halcyon-Designs</div>
    </footer>
  );
};

export { Footer };
