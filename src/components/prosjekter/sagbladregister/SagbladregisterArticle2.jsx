import React from "react";
import Image from "next/image";
import forside from "../../../../assets/sagbladregister/Forside.png";

const SagbladregisterArticle2 = () => {
  return (
    <>
      <div className="container">
        <h1 className="header article2header mb">Microsoft Access</h1>
        <p className="text a1 mb">
          Jeg forsøkte å lage et system i Microsoft Excel, men jeg ville ha noe
          som kunne minne mer om en app der man kan klikke seg inn på
          forskjellige blader. Så jeg begynte å utvikle et system i Microsoft
          Access. Der kunne vi legge inn registreringsdato, hvilke datoer som de
          ble omloddet på og da hadde vi også telling på hvor mange ganger de
          har blitt omloddet. Man kunne legg inn en kommentar. Og vi kunne legge
          inn hvor mange stokker som sagbladet har saget. Senere så fjernet jeg
          stokkantall på bladene da dette var mye jobb å få lagt inn korrekt og
          at dataen på dette var meningsløse og ikke ble brukt til noe. Mars
          2016 begynner vi med å legge inn bladene våre i Access databasen. Det
          var heller ikke noe lettvint å bruke dataen til statistikk. Jeg lagde
          et opplegg der vi kunne se hvor mange blad som ble vraket eller lagt
          til. Men hver gang vi vraket et blad så måtte vi legge det til i
          vrakstatistikken manuelt. Det beste er at et program automatiserer det
          meste ellers blir det ikke gjort ordentlig til slutt og det endte med
          at vi bare registrerte antall omloddinger, for det måtte vi ha. Og
          statistikken ble skrotet.
        </p>
        <div className="img-container">
          <Image src={forside} />
        </div>
        <img
          className="img"
          src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          grid-template-areas:
            "h h "
            "a1 i1"
            "im i1";
          grid-column-gap: 3rem;
        }
        .article2header {
          grid-area: h;
        }
        .img {
          width: 100%;
          grid-area: i1;
        }
        .img-container {
          grid-area: im;
        }
        .a1 {
          grid-area: a1;
        }
        .a2 {
          grid-area: a2;
        }
        @media screen and (max-width: 1000px) {
          .img {
            display: none;
          }
          .container {
            grid-template-areas:
              "h h "
              "a1 a1"
              "im im";
          }
        }
      `}</style>
    </>
  );
};

export default SagbladregisterArticle2;
