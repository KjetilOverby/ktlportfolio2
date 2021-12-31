import React from "react";
import SagbladOversiktArticle from "./SagbladOversiktArticle";

const SagbladoversiktMainPage = () => {
  return (
    <>
      <div className="container">
        <SagbladOversiktArticle />
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

export default SagbladoversiktMainPage;
