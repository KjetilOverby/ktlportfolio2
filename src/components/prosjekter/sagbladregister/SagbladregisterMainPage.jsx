import React from "react";
import Image from "next/image";
import ContentLayout from "../../common/ContentLayout";
import kanefusa from "../../../../assets/sagbladregister/kanefusa.jpg";
import SagbladregisterArticle2 from "./SagbladregisterArticle2";
import MobilApp from "./MobilApp";
import Utgave2 from "./Utgave2";
import WebApp from "./WebApp";

import kanefusaBlade from "../../../../assets/sagbladregister/kanefusa.jpg";
import forside from "../../../../assets/sagbladregister/Forside.png";
import webapp from "../../../../assets/sagbladregister/webapp.png";
import mobilescreens3 from "../../../../assets/sagbladregister/mobilescreens3.jpg";
import sagbladregisterNew from "../../../../assets/sagbladregister/sagbladregisterNew.png";

const SagbladregisterMainPage = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <div className="article-container">
            <h1 className="header mb">Sagbladregister</h1>
            <p className="text">
              Når sagbladene er slipt så mange ganger at det ikke er igjen noe
              hardmetall tenner så sendes bladene til omlodding. Restene av de
              gamle fjernes og nye hardmetallklosser loddes på. Etter 3-5 ganger
              med omlodding så er stammen på sagbladene slitne og ustabile i
              saga. I sagbladsortimentet vi har så er det flere hundre blad og
              for å ha kontroll på hvor mange ganger et blad er omloddet så må
              man ha et system.
            </p>
            <br />
            <p className="text">
              Et system som er blitt brukt er å gravere inn et kryss hver gang
              det har vært på omlodding. Men dette viser ikke når et blad ble
              omloddet sist. Den informasjonen har vi noen ganger hatt bruk for
              hvis det er noe feil med service på et parti fra leverandør, da
              kan vi finne ut når de ble omloddet og se hvilke andre blad som er
              fra samme parti.
            </p>
            <br />
            <p className="text mb">
              For å løse dette så tenkte jeg på å få dette i en database for jeg
              hadde lagt merke til at bladene vi kjøper fra japanske Kanefusa
              har id nummer. Da kan jeg bruke det nummeret til å registrere de i
              en database.
            </p>

            <div className="img-text-container mb">
              <div className="image-container">
                <Image src={kanefusaBlade} />
              </div>
              <p className="image-text img-text">
                Her er et eksempel på hva som står på et Kanefusa blad. Nummeret
                i midten som starter på 8J er et unikt nummer som man kan bruke
                å registrere bladet med.
              </p>
            </div>

            <h1 className="header mb mt">Microsotf Access</h1>

            <p className="text mb ">
              Jeg forsøkte å lage et system i Microsoft Excel, men jeg ville ha
              noe som kunne minne mer om en app der man kan klikke seg inn på
              forskjellige blader. Så jeg begynte å utvikle et system i
              Microsoft Access. Der kunne vi legge inn registreringsdato, hvilke
              datoer som de ble omloddet på og da hadde vi også telling på hvor
              mange ganger de har blitt omloddet. Man kunne legg inn en
              kommentar. Og vi kunne legge inn hvor mange stokker som sagbladet
              har saget. Senere så fjernet jeg stokkantall på bladene da dette
              var mye jobb å få lagt inn korrekt og at dataen på dette var
              meningsløse og ikke ble brukt til noe. Mars 2016 begynner vi med å
              legge inn bladene våre i Access databasen. Det var heller ikke noe
              lettvint å bruke dataen til statistikk. Jeg lagde et opplegg der
              vi kunne se hvor mange blad som ble vraket eller lagt til. Men
              hver gang vi vraket et blad så måtte vi legge det til i
              vrakstatistikken manuelt. Det beste er at et program automatiserer
              det meste ellers blir det ikke gjort ordentlig til slutt og det
              endte med at vi bare registrerte antall omloddinger, for det måtte
              vi ha. Og statistikken ble skrotet.
            </p>

            <div className="img-text-container mb">
              <div className="image-container">
                <Image src={forside} />
              </div>
              <p className="image-text img-text">
                Her er et bilde av hvordan forsiden på Access appen så ut.
              </p>
            </div>
            <h1 className="header mb mt">Web applikasjon</h1>
            <p className="text">
              Mai 2020 starter prosjektet med å lage en webapplikasjon for
              sagbladregistrering. Men for å få all data in i databasen på
              webapplikasjonen så ender det med at jeg legger inn alle blad på
              nytt og fører over dataen fra Microsoft Access databasen til den
              nye databasen manuelt. Jeg bruker MongoDB og å logge seg på der å
              legge inn data er meget tungvint så jeg designet et lite program
              for å gjøre overføringen lettere. Med all data på plass så blir
              Microsoft access skrotet og vi går over til den nye
              sagbladregisteret.
            </p>
            <br />
            <p className="text mb"></p>

            <div className="img-text-container2 mb">
              <div className="img-frame">
                <Image src={webapp} />
              </div>
              <p className="text img-text">
                Microsoft Access hadde en del begrensninger for hva man kan
                gjøre i forhold til programmering. For å legge inn service og
                dato så måtte man skrive inn informasjonen manuelt og når man
                får inn kanskje 30 blad på en gang så blir det litt jobb. Med
                det nye så kan man bare med et klikk få inn service info og
                dagens dato automatisk. En annen fordel med den nye
                applikasjonen er at man kan sjekke bladinfo fra mobilen og
                trenger ikke alltid og gå til datamaskinen for å hjøre det. Men
                appen føles treg og man må åpne en helt ny side bare for å f.eks
                slette et blad. Dette fordi jeg har begrenset kunnskap om
                backend programmering. Så denne applikasjonen blir ikke den
                eneste. Nye versjoner av appen kommer.
              </p>
            </div>

            <h1 className="header mb">Mobil app</h1>

            <p className="text mb">
              Jeg har også drevet litt med React Native der man kan lage Native
              apper til mobil og legge ut på App store eller Google play. Jeg
              lagde sagbladregister også med React Native. Native appen blir
              aldri lagt ut på Google Play eller App Store, men jeg får brukt
              den på min egen mobil. På backend siden legger jeg inn telling på
              vrak og hvor mange blad som er innom service. Dette oppdaterer seg
              automatisk når man legger inn det samme som jeg gjorde på Access
              appen. Mobil appen og webapplikasjonen er koblet til den samme
              databasen.
            </p>

            <div className="img-text-container mb">
              <div className="image-container">
                <Image src={mobilescreens3} />
              </div>
              <p className="image-text img-text">
                Her er et bilde av 4 forskjellige mobilskjermer på native appen.
              </p>
            </div>

            <h1 className="header mb">Oppgradering sagbladregister</h1>
            <p className="text mb">
              Med mer kunnskap på backend så begynner jeg på en ny sagblad app.
              Backend kode er nå med Node.js og Express som rammeverk. Bruker
              også Mongo DB kommandoer i Node. I den forrige appen så hentet jeg
              bare innholdet i databasen og brukte JavaScript til å filtrere ut
              data som skal vises.
            </p>

            <div className="image-container">
              <Image src={sagbladregisterNew} />
            </div>
          </div>
        </ContentLayout>
      </div>
      <style jsx>
        {`
      .article-container {
        margin: 0 15rem;
      }
      .container {
      }
      .img-frame {
        border: 1px solid #9d9d9d7a
      }

      .img-text-container {
        display: grid;
        grid-template-columns: 60% 1fr;
        grid-column-gap: 1rem;
      }
      .img-text-container2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
      }

      .img-text2 {
          margin-top: .5rem
        }
        .section-container {
          display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 5rem;
        }
      @media screen and (max-width: 2100px) {
        .article-container {
          margin: 0 8rem;
        }
      @media screen and (max-width: 1000px) {
        .article-container {
          margin: 0;
        }
        .img-text {
          margin-top: .5rem
        }
       
        .img-text-container {
          grid-template-columns: 1fr;
          grid-column-gap: 1rem;
        }
        .img-text-container2 {
          grid-template-columns: 1fr;
          grid-column-gap: 1rem;
        }
        .section-container {
          grid-template-columns: 1fr;
          grid-column-gap: 1rem;
        }
      }
    `}
      </style>
    </>
  );
};

export default SagbladregisterMainPage;
