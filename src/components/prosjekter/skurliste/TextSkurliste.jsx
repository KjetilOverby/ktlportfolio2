import React from "react";
import Image from "next/image";
import skurplan1 from "../../../../assets/skurliste/skurplan1.png";
import skurplan2 from "../../../../assets/skurliste/skurplan2.png";

const TextSkurliste = () => {
  return (
    <>
      <div className="container">
        <p className="text text-container pb">
          Skurliste er en enkel app, en utvidelse av appen Postarkiv. Den bruker
          den samme databasen som Postarkiv bruker. Meningen med denne appen er
          at den drar søk etter poster som skal bygges et steg lenger. Planer
          som kommer om hva som skal skjæres i løpet av en uke kommer på en
          såkalt skurliste. Lista legges inn i appen og da kan man klikke rett i
          lista å få den posten som hører til ordren med en gang uten å søke.
        </p>

        <Image src={skurplan1} />
        <p className="image-text">
          På bildet er de grå feltene ordre som er ferdig og den grønne pågår.
          På kolonnen post kan man klikke for å finne posten man skal bygge.
        </p>
        <p className="text text-container pb pt">
          Når man klikker så vil det komme opp et vindu på venstre side som vist
          på bildet under. Grunnen til at man får opp det og ikke kommer rett
          til posten man skal bygge er for at noen ordrer har flere varianter
          med små forskjeller, og man kan også klikke på søk på alle
          bladtykkelser og da kommer posten som er på ordren fram med alle
          bladvarianter som finnes i databasen.{" "}
        </p>
        <Image src={skurplan2} />
      </div>
      <style jsx>
        {`
          .container {
            margin-top: 10rem;
          }
          .text-container {
            margin: 0 20rem;
          }
          @media screen and (max-width: 2100px) {
            .container {
              margin-top: 0;

               {
                /* display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-areas: "a c"; */
              }
            }
            .text-container {
              margin: 0 10rem;
            }
          }
          @media (max-width: 1000px) {
            .text-container {
              margin: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default TextSkurliste;
