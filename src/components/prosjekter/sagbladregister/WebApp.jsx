import React from "react";
import Image from "next/image";
import webappImage from "../../../../assets/sagbladregister/webapp.png";

const WebApp = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">Web applikasjon</h1>
        <div className="text section-container">
          <p className="mb mt">
            Mai 2020 starter prosjektet med å lage en webapplikasjon for
            sagbladregistrering. Men for å få all data in i databasen på
            webapplikasjonen så ender det med at jeg legger inn alle blad på
            nytt og fører over dataen fra Microsoft Access databasen til den nye
            databasen manuelt. Jeg bruker MongoDB og å logge seg på der å legge
            inn data er meget tungvint så jeg designet et lite program for å
            gjøre overføringen lettere. Med all data på plass så blir Microsoft
            access skrotet og vi går over til den nye sagbladregisteret.
          </p>
          <div className="image-container">
            <Image src={webappImage} />
          </div>
        </div>
        <div className="section-right">
          <p className="text mt">
            Microsoft Access hadde en del begrensninger for hva man kan gjøre i
            forhold til programmering. For å legge inn service og dato så måtte
            man skrive inn informasjonen manuelt og når man får inn kanskje 30
            blad på en gang så blir det litt jobb. Med det nye så kan man bare
            med et klikk få inn service info og dagens dato automatisk. En annen
            fordel med den nye applikasjonen er at man kan sjekke bladinfo fra
            mobilen og trenger ikke alltid og gå til datamaskinen for å hjøre
            det. Men appen føles treg og man må åpne en helt ny side bare for å
            f.eks slette et blad. Dette fordi jeg har begrenset kunnskap om
            backend programmering. Så denne applikasjonen blir ikke den eneste.
            Nye versjoner av appen kommer.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin-top: 5rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr min-content;
            grid-template-areas:
              "header header"
              "section section2";
            grid-column-gap: 3rem;
          }
          .header {
            grid-area: header;
          }
          .section-container {
            grid-area: section;
          }
          .section-right {
            grid-area: section2;
          }
          @media screen and (max-width: 1000px) {
            .container {
              grid-template-rows: 1fr min-content min-content;
              grid-template-areas:
                "header header"
                "section section"
                "section2 section2";
            }
          }
        `}
      </style>
    </>
  );
};

export default WebApp;
