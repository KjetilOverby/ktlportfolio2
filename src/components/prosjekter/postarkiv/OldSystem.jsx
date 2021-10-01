import React from "react";
import Image from "next/image";
import permer1 from "../../../../assets/postarkiv/permer1.jpg";
import permer2 from "../../../../assets/postarkiv/permer2.jpg";
import utskrift1 from "../../../../assets/postarkiv/utskrift1.jpg";
import utskrift2 from "../../../../assets/postarkiv/utskrift2.jpg";

const OldSystem = () => {
  return (
    <>
      <div className="container">
        <div className="info-container">
          <h1 className="header">Info</h1>
          <p>
            Første app er det brukt React, Next js, Material ui, appen er
            publisert med Vercel.
          </p>
          <br />
          <p>
            Teknologier som er brukt i database appen er React, Next.js,
            Material ui, Node.js. Database er Mongo DB og innlogging er det
            brukt Auth0. Appen er publisert med Vercel
          </p>
        </div>
        <h1 className="header header-article">Gammelt system</h1>
        <div className="article-container">
          <p className="text mb">
            Tidligere ble alle poster skrevet ut på papir og sortert i permer.
            Det er 6 forskjellige bladtykkelser og det skilles også på
            tørkeprosent (12 og 18%), likevel ble det mange ark i de mest brukte
            permene. Da måtte man først finne rett perm og rett skilleark i
            permen og så bla gjennom alle arkene til du fant den rette. Mange
            ganger var ikke utskriften der enda og da måtte man gå å få den nye
            utskriften.
          </p>
          <Image src={permer1} />
        </div>
        <div className="article-container2">
          <p className="text mb">
            Med program er det bare å søke etter det man skal ha uavhengig av
            hva der er. Alle filene ligger på et sted og filtreres etter
            søkeverdien. Hvis ikke posten eksisterer så er det enkelt og raskt å
            lage en ny post.
          </p>
          <Image src={permer2} />
        </div>
        <div className="img1">
          <Image src={utskrift1} />
          <p className="image-text">
            Her ser du et eksempel på en utskrift (samme post som i
            illustrasjonen øverst). Utfyllingen bak er ikke forhåndsutregnet,
            men likevel så er utrgeningen bak det samme som programmet regner
            ut. Det skal totalt bak være 128.6. Så i noen tilfeller ble det
            riktig.
          </p>
        </div>
        <div className="img2">
          <Image src={utskrift2} />
          <p className="image-text">
            Her er et annet eksempel, og her skal utfyllingen bak være 159.9 Det
            første alternativet her er 160.3 en differanse på 0.4mm. Det andre
            alternativet er 161.1 som er en differanse på 1.2 mm. Sånn blir det
            når man ikke vet hvilken verdi utfyllingen bak skal ha. og det blir
            vanskeligere og oppdage små feil før utfyllingen bak.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .article-container {
            grid-area: art1;
          }
          .article-container2 {
            grid-area: art2;
          }
          .header-article {
            grid-area: head;
          }
          .container {
            display: grid;
            grid-template-columns: 20rem 1fr 1fr;
            grid-template-rows: 2rem 3rem 40rem 1fr;
            grid-template-areas:
              "info head head"
              "info . ."
              " info art1 art2"
              "info img1 img2";

            grid-column-gap: 3rem;
            margin-top: 10rem;
          }
          .info-container {
            background: #dddddd;
            padding: 2rem;
            grid-area: info;
          }
          .img1 {
            grid-area: img1;
          }
          .img2 {
            grid-area: img2;
          }
          @media screen and (max-width: 1000px) {
            .container {
              grid-template-columns: 1fr;
              grid-template-rows: 5rem min-content min-content min-content;
              grid-template-areas:
                "head"
                "art1 "
                "art2"
                "img1"
                "img2"
                "info";
            }
          }
          @media screen and (max-width: 750px) {
            .container {
              margin-top: 5rem;
            }
            .img2 {
              margin-top: 3rem;
              margin-bottom: 3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default OldSystem;
