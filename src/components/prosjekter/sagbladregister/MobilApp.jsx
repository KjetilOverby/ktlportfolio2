import React from "react";
import Image from "next/image";
import mobileScreens3 from "../../../../assets/sagbladregister/mobilescreens3.jpg";

const MobilApp = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">Mobil App</h1>
        <p className="mt text mobile-text">
          Jeg har også drevet litt med React Native der man kan lage Native
          apper til mobil og legge ut på App store eller Google play. Jeg lagde
          sagbladregister også med React Native. Native appen blir aldri lagt ut
          på Google Play eller App Store, men jeg får brukt den på min egen
          mobil. På backend siden legger jeg inn telling på vrak og hvor mange
          blad som er innom service. Dette oppdaterer seg automatisk når man
          legger inn det samme som jeg gjorde på Access appen. Mobil appen og
          webapplikasjonen er koblet til den samme databasen.
        </p>
        <div className="img-container mt">
          <Image src={mobileScreens3} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            place-items: center;
            margin: 6rem 10rem;
          }
          .mobile-text {
            text-align: center;
          }
          @media screen and (max-width: 1000px) {
            .container {
              margin: 6rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default MobilApp;
