import React from "react";
import CvComponent from "./CvComponent";
import CvTopComponent from "./CvTopComponent";
import Erfaring from "./Erfaring";

const CvMainPage = () => {
  return (
    <>
      <div className="container">
        <CvTopComponent />
        <CvComponent />
        <Erfaring />
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

export default CvMainPage;
