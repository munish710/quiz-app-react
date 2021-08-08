import React from "react";
import error_404 from "../assets/illustrations/error_404.svg";
const Error = () => {
  return (
    <section className="section page hero">
      <div className="section-center hero-center">
        <div className="hero-image-container">
          <img src={error_404} alt="questions" className="hero-image" />
        </div>
        <div className="hero-info">
          <h3>Page not Found</h3>
          <p>Sorry, the page you are looking for is not available.</p>
          <button className="btn">Go Back</button>
        </div>
      </div>
    </section>
  );
};

export default Error;
