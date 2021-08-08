import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" footer">
      <div className="section-center footer-center">
        <p>
          Made with <span className="code">&lt;/&gt;</span> by Munish Thakur
        </p>
        <div className="footer-icons">
          <a href="" target="_blank" className="footer-icon">
            <AiOutlineGithub />
          </a>
          <a href="" target="_blank" className="footer-icon">
            <AiOutlineLinkedin />
          </a>
          <a href="" target="_blank" className="footer-icon">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
