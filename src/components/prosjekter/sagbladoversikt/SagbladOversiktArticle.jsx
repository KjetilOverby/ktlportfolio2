import React from "react";

const SagbladOversiktArticle = () => {
  return (
    <>
      <div className="container">
      <h1 className="header mb">Sagbladregister 2</h1>
      <p>
          Jeg bygger en ny versjon av sagbladregister. Denne gangen er ting
          forbedret og er sikrere mot at uautoriserte får tilgang til data.
          Prosjektet bruker fortsatt den samme databasen så data trenger man
          ikke å legge inn på nytt. test
        </p>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default SagbladOversiktArticle;
