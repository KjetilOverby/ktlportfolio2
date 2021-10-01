import React from "react";

const Sabladregister2Article = () => {
  return (
    <>
      <div className="container">
        <h1 className="header mb">Sagbladregister 2</h1>
        <p>
          Jeg bygger en ny versjon av sagbladregister. Denne gangen er ting
          forbedret og er sikrere mot at uautoriserte får tilgang til data. Prosjektet bruker fortsatt den samme databasen så data trenger man ikke å legge inn på nytt.
        </p>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            place-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Sabladregister2Article;
