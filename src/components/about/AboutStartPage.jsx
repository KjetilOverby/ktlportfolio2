import React from "react";
import AboutImageSection from "./AboutImageSection";

const AboutStartPage = () => {
  return (
    <>
      <div className="container">
        <AboutImageSection />
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
          }
        `}
      </style>
    </>
  );
};

export default AboutStartPage;
