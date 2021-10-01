import React from "react";
import ContentLayout from "../common/ContentLayout";
import ProjectCards from "../common/ProjectCards";
import post from "../../../assets/prosjekter/post.png";
import sagbladregister from "../../../assets/prosjekter/sagbladregister.png";
import sagbladregister2 from "../../../assets/prosjekter/sagbladregister2.png";
import flisabil from "../../../assets/prosjekter/flisabil.png";
import stridsbergs from "../../../assets/prosjekter/stridsbergs.png";
import sagbladoversikt from "../../../assets/prosjekter/sagbladoversikt.png";
import skurliste from "../../../assets/prosjekter/skurliste.png";
import ktldesign from "../../../assets/prosjekter/ktldesign.png";
import Image from "next/image";

const ProsjekterStartPage = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <h1 className="text">Mine prosjekter.</h1>
          <ProjectCards
            header="Postarkiv"
            text="Postarkiv er en kalkulator for oppsett av poster i en sag. Denne regner ut utfyllingsringer som skal brukes etter at uttaket fra en stokk er lagt inn. Dette programmet er laget spesielt til en MKV sag fra tyske produsenten Linck, med doble akslinger."
            background="https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            image={<Image src={post} />}
            goto="/prosjekter/postarkiv"
            btnText="Les mer"
          />

          <ProjectCards
            header="Sagbladregister"
            text="Sagbladregister ble først utviklet for å ha kontroll på antall omloddinger et blad har. Etterhvert har det utviklet seg til å vise statistikk på vrak og service som kan sorteres ut ifra datoer."
            background="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80"
            image={<Image src={sagbladregister} />}
            btnText="Les mer"
            goto="/prosjekter/sagbladregister"
          />
          <ProjectCards
            header="Flisabil"
            text="Flisa Bil hadde en utdatert nettside. Jeg snakket med de om de var interessert i en ny nettside som er responsiv. Det var de interessert i så jeg laget en ny nettside til de. "
            background="https://images.unsplash.com/photo-1532268116505-8c59cc37d2e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            image={<Image src={flisabil} />}
            btnText="flisabil.no"
            goto="https://www.flisabil.no/"
          />
          <ProjectCards
            header="Sagbladregister2"
            text="En ny versjon av sagbladretister ble laget for å forbedre appen med ny teknologi. "
            background="https://www.posch.com/wp-content/uploads/2016/05/0341_saegeblaetter_schaelblatt_2046.png"
            image={<Image src={sagbladregister2} />}
            btnText="Les mer"
            goto="/prosjekter/sagbladregister2"
          />
          <ProjectCards
            header="Stridsbergs"
            text="Kvarnstrands og Stridsbergs sin nettside er per i dag ikke helt optimal på mobiler. Nettsiden er fortsatt under utvikling."
            background="https://lh3.googleusercontent.com/pw/AM-JKLWdC7OxJnOwggrB0mhTYQvkf4xwXJRqTA3qg7s68GnqnpZG7bP_3I_8dIn1JBltrXXoPJhoYHxQ7OIG7Dyf8L2Pa90JWhGfgfp_PJwEuSumX1LO55ng6iVU7fsJBmmo3ppLv67nrW_RqpzvKeWYI4Q=w1440-h1080-no?authuser=0"
            image={<Image src={stridsbergs} />}
            btnText="Les mer"
          />
          <ProjectCards
            header="Sagbladoversikt"
            text="Sagbladoversikt er laget for verktøyleverandør så de kan se hvor mange blader som er vraket så det er lettere å se hvor mange ny blader som trengs. "
            background="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
            image={<Image src={sagbladoversikt} />}
            btnText="Les mer"
            goto="/prosjekter/sagbladoversikt"
          />
          <ProjectCards
            header="Skurlister"
            text="En videreutvikling av Postarkiv der man ikke lenger trenger å søke etter post som skal bygges, men klikke rett på skurplanlista og få opp den posten som skal brukes med en gang."
            background="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbXB1dGVyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            image={<Image src={skurliste} />}
            btnText="Les mer"
            goto="/prosjekter/skurliste"
          />
          <ProjectCards
            header="Ktl Design"
            text="Min egen nettside til å presentere hva jeg driver med til noen som er på utkikk etter en nettside."
            background="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            image={<Image src={ktldesign} />}
            btnText="Les mer"
          />
        </ContentLayout>
      </div>
      <style jsx>
        {`
          .container {
          }
          .text {
            color: var(--primarytext);
            font-style: italic;
            font-weight: 400;
            margin-bottom: 5rem;
          }
        `}
      </style>
    </>
  );
};

export default ProsjekterStartPage;
