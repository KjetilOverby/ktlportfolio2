import React from "react";
import ContentLayout from "../common/ContentLayout";
import ErfaringCards from "./ErfaringCards";
import postarkivImg from "../../../assets/postarkiv/postarkiv2list.png";
import postarkivStartImg from "../../../assets/postarkiv/postarkiv2.png";
import sagbladregister2 from "../../../assets/prosjekter/sagbladregister2.png";
import sagbladregister from "../../../assets/prosjekter/sagbladregister.png";
import flisabil from "../../../assets/prosjekter/flisabil.png";
import flisabil2 from "../../../assets/prosjekter/flisabil2.png";
import sagbladoversikt from "../../../assets/prosjekter/sagbladoversikt.png";
import sagbladoversikt2 from "../../../assets/prosjekter/sagbladoversikt2.png";
import startpage from "../../../assets/skurliste/startpage3.png";
import post from "../../../assets/skurliste/post1.png";
import ktldesign from "../../../assets/prosjekter/ktldesign.png";
import ktldesign2 from "../../../assets/prosjekter/ktldesign3.png";
import stridsbergs from "../../../assets/prosjekter/stridsbergs.png";
import stridsbergs2 from "../../../assets/prosjekter/stridsbergs2.png";

const Erfaring = () => {
  return (
    <>
      <ContentLayout>
        <div className="container">
          <h1 className="header mb pb">Arbeid</h1>

          <div className="card-container">
            <ErfaringCards
              title="Postarkiv"
              date="Desember 2019"
              text="Her begynner jeg jobbe med en app som har database som skal brukes i forbindelse med en jobb på et sagbruk. Det er et postningsprogram som man regner ut et oppsett som man også kan lagre til senere bruk. Jeg har også laget et lignende program før denne som ikke har database. Ulempen med å ikke ha database i dette tilfellet er at nye poster som skal lagres måtte jeg hardkode inn i kildekoden og publisere på nytt. Jeg jobber med Postarkiv i ca 7mnd før den blir sett på som ferdig. Trykk på knappen for å se hele utviklingen av prosjektet"
              img1={postarkivImg}
              img2={postarkivStartImg}
              goto="/prosjekter/postarkiv"
            />
            <ErfaringCards
              title="Sagbladregister"
              date="Mai 2020"
              text="Jeg begynner å bygge et program som har oversikt over sagblader. I hovedsak var denne appen for å ha oversikt over hvor mange omloddinger et sagblad har, men har utviklet seg til å registrere innkjøp og vrak i tillegg. Også med søyler og grafer. Dette prosjektet er omgjort og påbegynt flere ganger og er fortsatt under utvikling. Klikk på knappen for å lese hele utviklingen av prosjeket."
              img1={sagbladregister2}
              img2={sagbladregister}
              goto="/prosjekter/sagbladregister"
            />
            <ErfaringCards
              title="Flisa Bil"
              date="Januar 2021"
              text="Jeg har lagt merke til at flisabil.no hadde en utadatert nettside og at den funket dårlig på mobil. Så jeg begynte å lage nettsiden til Flisa bil, kanskje mest for å trene på å bygge nettsider. Jeg bygde først en nettside, men med nye ideer senere så bygde jeg en til. Jeg dro etterhvert til Flisa bil for å høre om de var interessert i å bytte ut den gamle til mer moderne nettside. Det var de interessert i så i dag så er det jeg som drifter nettsiden til Flisa bil."
              img1={flisabil2}
              img2={flisabil}
            />
            <ErfaringCards
              title="Stridsbergs"
              date="ukjent"
              text="Kvarnstrands og Stridsbergs sin nettside er per i dag ikke helt optimal på mobiler. Nettsiden er fortsatt under utvikling."
              img1={stridsbergs2}
              img2={stridsbergs}
            />
            <ErfaringCards
              title="Sagbladoversikt"
              date="ukjent"
              text="Jeg har også laget en oversikt over sagbladene som også leverandør har tilgang til. Da kan leverandør følge litt med på hvor mye blad vi forbruker og kan da justere lageret sitt etter det. De kan også levere tilsvarende vrak med nye blader når servicebilen kommer innom."
              img1={sagbladoversikt2}
              img2={sagbladoversikt}
              goto="/prosjekter/sagbladoversikt"
            />
            <ErfaringCards
              title="Skurplan"
              date="September 2021"
              text="Jeg har også laget en oversikt over sagbladene som også leverandør har tilgang til. Da kan leverandør følge litt med på hvor mye blad vi forbruker og kan da justere lageret sitt etter det. De kan også levere tilsvarende vrak med nye blader når servicebilen kommer innom."
              img1={startpage}
              img2={post}
              goto="/prosjekter/skurliste"
            />
            <ErfaringCards
              title="Ktl Design"
              date="ukjent"
              text="Min egen nettside."
              img1={ktldesign2}
              img2={ktldesign}
            />
          </div>
        </div>
      </ContentLayout>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 25rem 1fr;
            grid-template-rows: 10rem min-content;
            grid-template-areas:
              "head head"
              "text text";
          }
          .card-container {
            grid-area: text;
          }
          .header {
            grid-area: head;
            border-bottom: 1px solid #ddd;
          }
        `}
      </style>
    </>
  );
};

export default Erfaring;
