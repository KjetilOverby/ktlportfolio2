import React from "react";
import Image from 'next/image'
import charts from '../../../../assets/sagbladoversikt/charts.jpg'

const Sabladregister2Article = () => {
  return (
    <>
      <div className="container">
        <h1 className="header mb">Sagbladregister 2</h1>

        <Image src={charts} />
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
