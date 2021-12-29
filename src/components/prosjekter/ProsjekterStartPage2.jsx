import React from "react";
import Image from "next/image";
import ProjectCards2 from "../common/ProjectCards2";
import post from "../../../assets/prosjekter/post.png";
import sagbladregister from "../../../assets/prosjekter/sagbladregister.png";
import sagbladregister2 from "../../../assets/prosjekter/sagbladregister2.png";
import flisabil from "../../../assets/prosjekter/flisabil.png";
import stridsbergs from "../../../assets/prosjekter/stridsbergs.png";
import sagbladoversikt from "../../../assets/prosjekter/sagbladoversikt.png";
import skurliste from "../../../assets/prosjekter/skurliste.png";
import ktldesign from "../../../assets/prosjekter/ktldesign.png";
import projects from "../../../assets/prosjekter/projects.png";
import verktoyregister from "../../../assets/prosjekter/verktoyregister.png";

const ProsjekterStartPage2 = () => {
  return (
    <>
      <div className="container">
        <ProjectCards2
          header="Postarkiv"
          text="Postarkiv er en kalkulator for oppsett av poster i en sag. Denne regner ut utfyllingsringer som skal brukes etter at uttaket fra en stokk er lagt inn. Dette programmet er laget spesielt til en MKV sag fra tyske produsenten Linck, med doble akslinger."
          image={<Image src={post} />}
          btnText="Les Mer"
          goto="/prosjekter/postarkiv"
        />
        <ProjectCards2
          header="Sagbladregister"
          text="Sagbladregister ble først utviklet for å ha kontroll på antall omloddinger et blad har. Etterhvert har det utviklet seg til å vise statistikk på vrak og service som kan sorteres ut ifra datoer."
          image={<Image src={sagbladregister} />}
          btnText="Les mer"
          goto="/prosjekter/sagbladregister"
        />
        <ProjectCards2
          header="Flisabil"
          text="Flisa Bil hadde en utdatert nettside. Jeg snakket med de om de var interessert i en ny nettside som er responsiv. Det var de interessert i så jeg laget en ny nettside til de. "
          image={<Image src={flisabil} />}
          btnText="flisabil.no"
          goto="https://www.flisabil.no/"
        />
        <ProjectCards2
          header="Sagbladregister2"
          text="En ny versjon av sagbladretister ble laget for å forbedre appen med ny teknologi. "
          image={<Image src={sagbladregister2} />}
          btnText="Les mer"
          goto="/prosjekter/sagbladregister2"
        />
        <ProjectCards2
          header="Stridsbergs"
          text="Kvarnstrands og Stridsbergs sin nettside er per i dag ikke helt optimal på mobiler. Nettsiden er fortsatt under utvikling."
          image={<Image src={stridsbergs} />}
          btnText="Les mer"
        />
        <ProjectCards2
          header="Sagbladoversikt"
          text="Sagbladoversikt er laget for verktøyleverandør så de kan se hvor mange blader som er vraket så det er lettere å se hvor mange ny blader som trengs. "
          image={<Image src={sagbladoversikt} />}
          btnText="Les mer"
          goto="/prosjekter/sagbladoversikt"
        />
        <ProjectCards2
          header="Skurlister"
          text="En videreutvikling av Postarkiv der man ikke lenger trenger å søke etter post som skal bygges, men klikke rett på skurplanlista og få opp den posten som skal brukes med en gang."
          image={<Image src={skurliste} />}
          btnText="Les mer"
          goto="/prosjekter/skurliste"
        />
        <ProjectCards2
          header="Ktl Design"
          text="Min egen nettside til å presentere hva jeg driver med til noen som er på utkikk etter en nettside."
          image={<Image src={ktldesign} />}
          btnText="Les mer"
        />
        <ProjectCards2
          header="Verktøyregister"
          text="Verktøyregister er en app som ble påbegynt for å ha oversikt over det andre verktøyet og sagbladene som vi har. Jeg legger ettehvert også inn sagbladregister i denne appen så vi har alt på ett sted."
          image={<Image src={verktoyregister} />}
          btnText="Les mer"
          goto="/prosjekter/toolregister2"
          link="https://toolregister2.vercel.app"
        />
        <ProjectCards2
          header="Prosjekter"
          text="Dette er rett og slett ei nettside med en liste over linker til en del av nettsidene jeg har laget. Noen har blitt lagd 2 og 3 ganger og man kan se de tidligere versjonene. Noen av versjonene er ikke fullstendig."
          image={<Image src={projects} />}
          btnText="Prosjekter"
          goto="https://projects-sage-nine.vercel.app"
        />
      </div>
      <style jsx>
        {`
          .container {
            margin: 5rem 30rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2rem;
          }
          @media screen and (max-width: 2100px) {
            .container {
              margin: 2rem 15rem;
            }
          }
          @media screen and (max-width: 1800px) {
            .container {
              margin: 2rem 8rem;
            }
          }
          @media screen and (max-width: 1600px) {
            .container {
              margin: 2rem 2rem;
            }
          }
          @media screen and (max-width: 1600px) {
            .container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media screen and (max-width: 1000px) {
            .container {
              grid-template-columns: 1fr;
              place-items: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default ProsjekterStartPage2;
