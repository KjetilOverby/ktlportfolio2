import React from "react";
import Image from "next/image";
import ContentLayout from "../../common/ContentLayout";
import sagblader from "../../../../assets/sagbladoversikt/sagblader.jpg";
import calendar from "../../../../assets/sagbladoversikt/calendarSearch.png";

const SagbladOversiktArticle = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <div className="article-container">
            <h1 className="header mb">Sagbladoversikt</h1>
            <p className="text">
              I dag så bruker vi stort sett Kanefusa blad i vår saglinje.
              Kanefusa har uforutsigbare leveringstider. Vi har opplevd flere
              ganger at leveringstiden kan bli flere måneder lenger en antatt.
              Dette gjør det vanskelig å vite når man bør bestille blader. Noen
              ganger har vi nesten gått tom for noen bladtyper fordi levering
              var forsinket.
            </p>
            <br />
            <p className="text mb">
              Løsningen på det ble at leverandør holder lager av bladene som vi
              trenger. De bestiller opp nye når vi henter ut. Men sånn som det
              er idag så forbruker vi blader til det begynner å bli lite og så
              henter vi ut fra lageret hos leverandør. Forbruket er forskjellig
              fra år til år og det er stor forskjell fra milde og kalde vintre.
              Det kan være litt vanskelig å vite hvor mye man bør ha på lager.
            </p>
            <div className="img-text-container mb">
              {/* <img
                style={{ width: "100%" }}
                src="https://www.themodelskit.co.uk/wp-content/uploads/2020/10/shutterstock_1563195187-1024x683.jpg"
                alt=""
              /> */}
              <div className="image-container">
                <Image src={sagblader} />
              </div>
              <p className="image-text img-text">
                Sagbladene er også i omløp hele tiden og det er svært varierende
                for hvor mange blad som er inne til omlodding. også hvor mange
                blad som står på vent til å sendes. Dette gjør det uoversiktlig
                over hvor mye blad vi egentlig har til enhver tid. Da må man i
                så fall drive å telle opp blad rundt omkring.
              </p>
            </div>
            <p className="text">
              Sagbladregisteret kan hjelpe oss med å ha litt mer kontroll hvor
              stort lager vi bør ha. Jeg har utviklet en applikasjon til
              leverandør som er denne appen her. Her er det oversikt over. Vi
              har sending hver 14 dag og det har vært snakk om å erstatte
              vrakede blade med nye i så korte intervaller hvis det er snakk om
              mye.
            </p>
            <br />
            <p className="text">
              Sagbladregisteret kan hjelpe oss med å ha litt mer kontroll hvor
              stort lager vi bør ha. Jeg har utviklet en applikasjon til
              leverandør som er denne appen her. Her er det oversikt over. Vi
              har sending hver 14 dag og det har vært snakk om å erstatte
              vrakede blade med nye i så korte intervaller hvis det er snakk om
              mye.
            </p>
            <br />
            <p className="text mb">
              Sending/levering vil ende på vilkårlige datoer å det ble vanskelig
              å lage en oversikt over registrerte hendelser i de intervallene.
              Jeg endte opp med å lage en søkefunksjon som leverandør selv kan
              velge hvilken tidsperiode de vil hente data fra. Det ble da gjort
              med at en kan velge startdato og sluttdato i en oversiktlig
              kalender.
            </p>
            <div className="image-container">
              <Image src={calendar} />
            </div>
            <p className="image-text img-text2">
              På bildet over kan man søke etter bladene som har egen id nummer.
              Der man kan legge til en omlodding, kommentar eller slette bladet.
              Bladene som slettes eller lagt til en omlodding blir satt i listen
              til venstre. De sorteres etter måneder og man kan klikke på rød
              pil for å gå måneder tilbake å se hvilke blader som ble vraket
              eller omloddet i den aktuelle måneden.
            </p>
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

          .img-text-container {
            display: grid;
            grid-template-columns: 60% 1fr;
            grid-column-gap: 1rem;
          }
        
          .img-text2 {
              margin-top: .5rem
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
          }
        `}
      </style>
    </>
  );
};

export default SagbladOversiktArticle;
