import React from "react";
import Image from "next/image";
import sagblaregisterNew from "../../../../assets/sagbladregister/sagbladregisterNew.png";

const Utgave2 = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">Oppgradering sagbladregister</h1>
        <p className="mt text mobile-text">
          Med mer kunnskap på backend så begynner jeg på en ny sagblad app.
          Backend kode er nå med Node.js og Express som rammeverk. Bruker også
          Mongo DB kommandoer i Node. I den forrige appen så hentet jeg bare
          innholdet i databasen og brukte JavaScript til å filtrere ut data som
          skal vises.
        </p>
        <div className="img-container mt">
          <Image src={sagblaregisterNew} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            place-items: center;
            margin: 3rem 10rem;
          }
          .mobile-text {
            text-align: center;
          }
          @media screen and (max-width: 1000px) {
            .container {
              margin: 3rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Utgave2;
