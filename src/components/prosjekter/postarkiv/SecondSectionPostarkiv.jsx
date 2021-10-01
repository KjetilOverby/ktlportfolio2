import React from "react";
import excel from "../../../../assets/postarkiv/excel.png";
import Image from "next/image";

const SecondSectionPostarkiv = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">Post kalkulator</h1>
        <div className="img-container">
          <Image src={excel} />
          <p className="image-text">
            Før sto alle postene på papir i permer og det kunne ta flere
            minutter å finne dem, eller kanskje bare å finne ut at posten ikke
            eksisterer i permen.
          </p>
        </div>
        <div>
          <div className="text-container">
            <p className="text">
              Det begynte i April 2016, da lagde jeg en post-kalkulator i
              Microsoft Excel (før jeg hadde begynt med programmering).
            </p>
            <br />
            <p className="text">
              I det originale utregningsprogrammet som er med i saglinja regner
              kun ut utfylling foran, og man må opp til saghuset og få det
              printet ut på papir for å så regne ut hvilke ringer som skal
              brukes. På denne tiden var det mye testing med nye mål og vi måtte
              stadig få nye post utskrifter. Jeg etterspurte programmet som de
              bruker på saga til sliperiet så vi kunne lage disse postene selv,
              men det ble aldri noe av. Det var da jeg kom på ideen om å lage et
              eget utregningsprogram så man kan bare lage postene selv og lagre
              dem så de blir enklere å finne. Dette Excelprogrammet erstatter
              det gamle systemet. Det blir brukt i nesten 4 år før et nytt
              program blir til.
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .header {
            font-size: 2.5rem;
            color: var(--primarytext);
            margin: 6rem;
          }
          .text-container {
            margin: 5rem 18rem;
          }
          .img-container {
            margin: 0 6rem;
          }
          @media screen and (max-width: 2100px) {
            .text-container {
              margin: 5rem 10rem;
            }
          }
          @media screen and (max-width: 1000px) {
            .text-container {
              margin: 5rem 0;
            }
            .img-container {
              margin: 0 0;
            }
            .header {
              font-size: 2.5rem;
              color: var(--primarytext);
              margin: 6rem 0;
            }
            .container {
              margin-bottom: -8rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default SecondSectionPostarkiv;
