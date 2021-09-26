import React from "react";

const LogoComponent = () => {
  return (
    <>
      <div className="container">ktl_design</div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");
          .container {
            font-family: "Poiret One", cursive;
            color: #2a3d3c;
            font-size: 1.5rem;
          }
        `}
      </style>
    </>
  );
};

export default LogoComponent;
