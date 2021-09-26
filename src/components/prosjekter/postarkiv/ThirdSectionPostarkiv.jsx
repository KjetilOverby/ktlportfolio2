import React from "react";
import secondCalculator from "../../../../assets/postarkiv/secondCalculator.png";
import firstcalculator from "../../../../assets/postarkiv/firstcalculator.png";

import thirdcalculator from "../../../../assets/postarkiv/thirdcalculator.png";
import fourthcalculator from "../../../../assets/postarkiv/fourthcalculator.png";
import mkv3 from "../../../../assets/postarkiv/mkv3.jpg";
import ringer from "../../../../assets/postarkiv/ringer.jpg";
import Image from "next/image";

const ThirdSectionPostarkiv = () => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1 className="header">PROGRAMMERING</h1>
          <hr />
        </div>
        <div className="a1-container">
          <p className="text mb">
            Etter at jeg har lært en del om programmering så prøver jeg meg på å
            lage postkalkulatoren med Javascript. Februar 2019 begynner jeg å
            teste ut forskjellige ting for å få kalkulatoren til å fungere. Det
            går ikke så bra enda. Begrensninger i mine programmeringsferdigheter
            gjør også at jeg må gå over til mer studier før jeg kan fortsette.
          </p>
          <Image src={firstcalculator} />
          <p className="image-text">
            Her er en av de første forsøkene på å lage post kalkulatoren.
          </p>
        </div>
        <div className="a2-container">
          <p className="text mb">
            Desember 2019 begynner jeg helt på nytt i et forsøk på å lage en
            fungerende post kalkulator app. Jeg begynner å få ting til å fungere
            og jeg publiserer appen som en nettside. Etter at jeg tester den på
            jobb så må det en del forbedringer å rettinger til. Foreløpig er det
            bare jeg som bruker appen.
          </p>
          <Image src={secondCalculator} />
          <p className="text" style={{ marginTop: "2rem" }}>
            8 februar 2020 tas appen i bruk, også for andre som bygger poster.
            Denne appen har ikke noen database, dermed kan man ikke lagre og
            slette poster. Jeg kodet inn nye poster og publiserte på nytt hver
            gang nye poster ble lagt inn.
          </p>
        </div>
        <div className="a3-container">
          <Image src={thirdcalculator} />
          <p className="image-text">Her ser man utviklingen av appen.</p>
          <Image src={fourthcalculator} />
          <br />
        </div>
      </div>
      <style jsx>
        {`
        
        .background {
          width: 100%;
          filter: blur(5px);
          grid-column: 1/-1;
          grid-row: 1/-1;
        }
        .container {
          display: grid;
          grid-template-areas:
            "h . ."
            "a1 a2 a3"
            "img img img";
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 5rem auto auto;
          grid-column-gap: 3rem;
          margin-top: 12rem
        }
        .a1-container {
          grid-area: a1;
        }
        .a2-container {
          grid-area: a2;
        }
        .a3-container {
          grid-area: a3;
        }
       
        .header-container {
          grid-area: h;
        }
       
        .img-container {
          grid-area: img;
          display: grid;
          grid-template-columns: repeat(12, minmax(2rem, 1fr));
          grid-template-rows: repeat(12, minmax(2rem, 1fr));
        }
        .img1 {
          grid-column: 2/8;
          grid-row: 2/8;
          transform: rotate(12deg);
        }
        .img2 {
          grid-column: 6/12;
          grid-row: 6/12;
          transform: rotate(-14deg);
        }
        }
       
        hr {
          border-bottom: 1px solid var(--primarytext);
        }
        @media screen and (max-width: 875px) {
           .container {
              grid-template-areas:
            "h h h"
            "a1 a1 a1"
            "a2 a2 a2"
            "a3 a3 a3"
            "img img img";
          grid-template-columns: 1fr;
          grid-template-rows: 5rem auto auto;
          grid-column-gap: 3rem;
           } 
        }
      `}
      </style>
    </>
  );
};

export default ThirdSectionPostarkiv;
