import React from "react";
import Image from "next/image";
import ContentLayout from "../../common/ContentLayout";
import kanefusa from "../../../../assets/sagbladregister/kanefusa.jpg";
import SagbladregisterArticle2 from "./SagbladregisterArticle2";
import MobilApp from "./MobilApp";
import Utgave2 from "./Utgave2";
import WebApp from "./WebApp";

const SagbladregisterMainPage = () => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <div className="black-header"></div>
          <div className="img-container">
            <img
              className="img"
              src="https://www.leitz.org/fileadmin/_processed_/7/4/csm_PG_Saegen_3125x2086_8c87656392.jpg"
              alt=""
            />
          </div>
        </div>
        <ContentLayout>
          <h1 className="header mb">Sagbladregistrering</h1>
          <div className="article-container">
            <div className="text-container">
              <p className="text-black-container">
                Når sagbladene er slipt så mange ganger at det ikke er igjen noe
                hardmetall tenner så sendes bladene til omlodding. Restene av de
                gamle fjernes og nye hardmetallklosser loddes på. Etter 3-5
                ganger med omlodding så er stammen på sagbladene slitne og
                ustabile i saga. I sagbladsortimentet vi har så er det flere
                hundre blad og for å ha kontroll på hvor mange ganger et blad er
                omloddet så må man ha et system.
              </p>
              <br />
              <p className="text-black-container">
                Et system som er blitt brukt er å gravere inn et kryss hver gang
                det har vært på omlodding. Men dette viser ikke når et blad ble
                omloddet sist. Den informasjonen har vi noen ganger hatt bruk
                for hvis det er noe feil med service på et parti fra leverandør,
                da kan vi finne ut når de ble omloddet og se hvilke andre blad
                som er fra samme parti.
              </p>
              <br />
              <p className="text-black-container">
                For å løse dette så tenkte jeg på å få dette i en database for
                jeg hadde lagt merke til at bladene vi kjøper fra japanske
                Kanefusa har id nummer. Da kan jeg bruke det nummeret til å
                registrere de i en database.
              </p>
            </div>
            <div className="text-img-container">
              <Image src={kanefusa} />
            </div>
          </div>
          <SagbladregisterArticle2 />
          <WebApp />
          <MobilApp />
          <Utgave2 />
        </ContentLayout>
      </div>

      <style jsx>{`
        .article-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          background: black;
          grid-template-areas: "t i";
          margin-bottom: 5rem;
        }
        .container {
          grid-area: content;
        }
        .black-header {
          background: black;
          grid-column: 1/-1;
          grid-row: 1/10;
        }
        .header-container {
          display: grid;
          grid-template-columns: repeat(12, minmax(2rem, 1fr));
          grid-template-rows: repeat(12, minmax(2rem, 1fr));
          height: 40rem;
        }
        .img {
          width: 100%;
        }
        .img-container {
          grid-column: 3/11;
          grid-row: 3;
        }
        .text-container {
          padding: 2rem;

          grid-area: t;
        }
        .text-black-container {
          color: white;
        }
        .text-img-container {
          grid-area: i;
          padding: 2rem;
        }
        @media screen and (max-width: 2100px) {
          .black-header {
            grid-row: 1/8;
          }
          .header-container {
            height: 30rem;
          }
        }
        @media screen and (max-width: 1550px) {
          .black-header {
            grid-row: 1/7;
          }
          .header-container {
            height: 25rem;
          }
          .black-header {
            grid-row: 1/6;
          }
        }

        @media screen and (max-width: 1000px) {
          .article-container {
            grid-template-rows: 1fr 1fr;
            grid-template-areas:
              "i i"
              "t t";
          }
          .header-container {
          }
          .img-container {
            grid-column: 1/-1;
          }
          .black-header {
            grid-row: 1/4;
          }
        }
        @media screen and (max-width: 1000px) {
          .header-container {
            height: 18rem;
          }
        }
        @media screen and (max-width: 600px) {
          .header-container {
            height: 12rem;
          }
          .article-container {
            height: 60rem;
          }
        }
      `}</style>
    </>
  );
};

export default SagbladregisterMainPage;
