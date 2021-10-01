import React from "react";
import mkvillustration from "../../../../assets/postarkiv/mkvillustration.png";
import mkv1 from "../../../../assets/postarkiv/mkv1.jpg";
import mkv2 from "../../../../assets/postarkiv/mkv2.jpg";
import mkv3 from "../../../../assets/postarkiv/mkv3.jpg";
import ringer from "../../../../assets/postarkiv/ringer.jpg";
import Image from "next/image";

const FirstSection = () => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1 className="header">POSTARKIV</h1>
          <hr />
        </div>
        <div className="a1-container">
          <p className="text mb">
            Postarkiv er et program til å regne ut utfylling for å få sentrert
            posten på en hylse. Man legger inn hvilke tykkelser plankene skal
            ha, hvilke sagbladtykkelse man skal bruke og da regner programmet
            automatisk ut hva utfyllinge foran blir for å sentrere posten. Også
            utfylling bak sånn at mutterne som skal dras igjen havner på akkurat
            det samme stedet uansett hvilke dimensjoner som er lagt inn.
          </p>
          <Image src={mkv2} />
          <p className="image-text mb">
            En ferdigbygd post som tar ut to planker, i de fleste tilfeller så
            tas det ut sidebord på utsiden av bladene.
          </p>
        </div>
        <div className="a2-container">
          <p className="text mb">
            Illustrasjonen under viser et eksempel på en post som har 4
            sentrumsplanker. Plankenetykkelsen skal være 38mm. Det brukes
            overmål(råmål) fordi plankene krymper når de blir tørket. Det må
            også tas hensyn sagbladtykkelse og sagsnitt (vigg) når man skal
            regne ut postene. Vi har i dag 6 ulike bladtykkelser.
          </p>
          <Image src={mkvillustration} />
          <p className="text mb" style={{ marginTop: "2rem" }}>
            Utfylling foran og utfylling bak deles opp i de forskjellige ringene
            vi har.
          </p>
        </div>
        <div className="a3-container">
          <Image src={mkv1} />
          <p className="image-text">
            saga har 2 akslinger. Sagbladene stilles inn så de skjærer
            halvparten hver med litt overlapp. Begge postene bygges likt med
            eksakt utregning og blokka havner akkurat i sentrum av postene.
          </p>
          <br />
          {/* <p className="text" style={{ marginTop: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex
            asperiores non incidunt architecto doloremque corrupti deserunt
            recusandae aperiam nobis, ab saepe molestias magni facere, quaerat
            mollitia optio commodi molestiae.
          </p> */}
        </div>
        <div className="img-container">
          <img
            className="background"
            src="https://images.unsplash.com/photo-1598089107324-fd36d1e4da73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
          <div className="img1">
            <Image src={mkv3} />
          </div>
          <div className="img2">
            <Image src={ringer} />
          </div>
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

export default FirstSection;
