import React from "react";
import Image from 'next/image'
import sagblader from '../../../../assets/sagbladoversikt/sagblader.jpg'
import calendar from '../../../../assets/sagbladoversikt/calendarSearch.png'

const SagbladOversiktArticle = () => {
  return (
    <>
      <div className="container">
        <h1 className="header mb">Sagbladoversikt</h1>
        <div className='text-container'>

          <p className='text'>
            I dag så bruker vi stort sett Kanefusa blad i vår saglinje. Kanefusa har uforutsigbare leveringstider. Vi har opplevd flere ganger at leveringstiden kan bli flere måneder lenger en antatt. Dette gjør det vanskelig å vite når man bør bestille blader. Noen ganger har vi nesten gått tom for noen bladtyper fordi levering var forsinket.
          </p>
          <br />

          <p className='text'>
            Løsningen på det ble at leverandør holder lager av bladene som vi trenger. De bestiller opp nye når vi henter ut. Men sånn som det er idag så forbruker vi blader til det begynner å bli lite og så henter vi ut fra lageret hos leverandør. Forbruket er forskjellig fra år til år og det er stor forskjell fra milde og kalde vintre. Det kan være litt vanskelig å vite hvor mye man bør ha på lager.
          </p>
          <br />
          <p className='text'>
            Sagbladene er også i omløp hele tiden og det er svært varierende for hvor mange blad som er inne til omlodding. også hvor mange blad som står på vent til å sendes. Dette gjør det uoversiktlig over hvor mye blad vi egentlig har til enhver tid. Da må man i så fall drive å telle opp blad rundt omkring.
          </p>
        </div>
        <div className='image-container'>

           <Image src={sagblader} />
         </div>
        <div className='text2-container'>
          <p className='text'>Sagbladregisteret kan hjelpe oss med å ha litt mer kontroll hvor stort lager vi bør ha. Jeg har utviklet en applikasjon til leverandør som er denne appen her. Her er det oversikt over. Vi har sending hver 14 dag og det har vært snakk om å erstatte vrakede blade med nye i så korte intervaller hvis det er snakk om mye.</p>
          <br />
          <p className='text'>Sagbladregisteret kan hjelpe oss med å ha litt mer kontroll hvor stort lager vi bør ha. Jeg har utviklet en applikasjon til leverandør som er denne appen her. Her er det oversikt over. Vi har sending hver 14 dag og det har vært snakk om å erstatte vrakede blade med nye i så korte intervaller hvis det er snakk om mye.</p>
          <br />
        <p className='text'>Sending/levering vil ende på vilkårlige datoer å det ble vanskelig å lage en oversikt over registrerte hendelser i de intervallene. Jeg endte opp med å lage en søkefunksjon som leverandør selv kan velge hvilken tidsperiode de vil hente data fra. Det ble da gjort med at en kan velge startdato og sluttdato i en oversiktlig kalender.</p>
        </div>
       
        <div className='img2-container'>
          <Image src={calendar} />
          <p className='image-text'>Her kan man velge en periode i en kalender å få data som er registrert kun i den valgte tidsperioden.</p>
        </div>
       
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
            "header header"
            "text img"
            "text2 img2";
            grid-gap: 3rem
          }
          .header {
            grid-area: header;
          }
          .text-container {
            grid-area: text;
          }
          .image-container {
            grid-area: img
          }
           .img2-container {
            grid-area: img2
          }
          .text2-container {
            grid-area: text2
          } 
        `}
      </style>
    </>
  );
};

export default SagbladOversiktArticle;
