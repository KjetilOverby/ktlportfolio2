import React from "react";
import ContentLayout from "../../common/ContentLayout";
import DatabasePostarkiv from "./DatabasePostarkiv";
import FirstSection from "./FirstSection";
import OldSystem from "./OldSystem";
import SecondSectionPostarkiv from "./SecondSectionPostarkiv";
import ThirdSectionPostarkiv from "./ThirdSectionPostarkiv";

import Image from "next/image";

import mkv1 from "../../../../assets/postarkiv/mkv1.jpg";
import mkv2 from "../../../../assets/postarkiv/mkv2.jpg";
import mkvillustration from "../../../../assets/postarkiv/mkvillustration.png";
import excel from "../../../../assets/postarkiv/excel.png";
import firstcalculator from "../../../../assets/postarkiv/firstcalculator.png";
import secondcalculator from "../../../../assets/postarkiv/secondcalculator.png";
import thirdcalculator from "../../../../assets/postarkiv/thirdcalculator.png";
import fourthcalculator from "../../../../assets/postarkiv/fourthcalculator.png";
import postarkiv2list from "../../../../assets/postarkiv/postarkiv2list.png";

const PostArkivStartPage = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <div className="article-container">
            <h1 className="header mb">Postarkiv</h1>
            <p className="text mb">
              Postarkiv er et program som jeg lagde i forbindelse med min jobb
              på Moelven Våler. På sliperiet der bygges det poster som bestemmer
              hvilke tykkelser planken skal ha når saga deler opp en stokk. Man
              lager poster ved å sette på distanseringer og sagblad på en hylse.
              Posten skal være midt i saga og derfor må utfyllingen foran regnes
              ut etter hva slags uttak det er. Det er allerede et program som
              lager sånne poster oppe i saghuset som vi brukte å få på
              utskrifter, men det programmet regner kun ut utfylling foran og
              bak må man finne ut selv.
            </p>

            <div className="img-text-container mb">
              <div className="image-container">
                <Image src={mkv2} />
              </div>
              <p className="image-text img-text">
                Her er det bilde av en ferdigbygd post. I dette tilfellet så tas
                det ut 2 sentrumsplanker fra stokken. Her ser man at
                utfyllingsringene foran som blir lik summen som programmet
                regner ut og får posten i midten.
              </p>
            </div>

            <p className="text mb">
              På illustrasjonen så ser man at utfylling bak også er regnet ut,
              noe som det originale programmet ikke gjør. Det spiller ikke så
              stor rolle hva slags mål man får på utfyllingen bak når den er der
              kun få at du skal få låst posten med 2 muttere. Om mutterne til
              slutt stikker litt innenfor eller utenfor hylsa gjør ingenting,
              men ideen her er at mutterne skal flykte 100% jevnt med hylsa
              uansett hvilke mål posten er satt opp med. Da ser man lett når en
              feil er i posten og man kan rette det før man setter den i saga.
            </p>
            <div className="section-container">
              <div className="image-container">
                <Image src={mkvillustration} />
              </div>
              <p className="image-text img-text2">
                Illustrasjonen viser et eksempel på en post som har 4
                sentrumsplanker. Planketykkelsen skal være 38mm. Det brukes
                overmål(råmål) fordi plankene krymper når de blir tørket. Det må
                også tas hensyn sagbladtykkelse og sagsnitt (vigg) når man skal
                regne ut postene. Vi har i dag 6 ulike bladtykkelser
              </p>
            </div>
            <p className="text mb mt">
              Under ser man at en post sitter inne i saga. Saga har to
              akslinger, sagbladene overst sager ca halvparten ned i blokka og
              sagbladene underst sager ca halvparten nederst. Øverste aksling
              sager med materetningen og nedterst imot. Her ser man at det er
              viktig at alt er riktig bygd og at en liten feil resulterer i
              produksjonsstopp for å rette det opp.
            </p>
            <Image src={mkv1} />
            <h1 className="header mb mt">Post kalkulator</h1>
            <p className="text">
              Det begynte i April 2016, da lagde jeg en post-kalkulator i
              Microsoft Excel (før jeg hadde begynt med programmering).
            </p>
            <br />
            <p className="text mb ">
              I det originale utregningsprogrammet som er med i saglinja regner
              kun ut utfylling foran, og man må opp til saghuset og få det
              printet ut på papir for å så regne ut hvilke ringer som skal
              brukes. På denne tiden var det mye testing med nye mål og vi måtte
              stadig få nye post utskrifter. Jeg etterspurte programmet som de
              bruker på saga til sliperiet så vi kunne lage disse postene selv,
              men det ble aldri noe av. Det var da jeg kom på ideen om å lage et
              eget utregningsprogram så man kan bare lage postene selv og lagre
              dem så de blir enklere å finne. Det ender med at Excelprogrammet
              erstatter utskrifter og permer, ikke bare sikrer pregrammet at nye
              utregninger blir riktig men det blir også vesentlig raskere å
              finne postene.
            </p>

            <div className="img-text-container mb">
              <div className="image-container">
                <Image src={excel} />
              </div>
              <p className="image-text img-text">
                Før sto alle postene på papir i permer og det kunne ta flere
                minutter å finne dem, eller kanskje bare å finne ut at posten
                ikke eksisterer i permen.
              </p>
            </div>
            <h1 className="header mb mt">Programmering</h1>
            <p className="text">
              Etter at jeg har lært en del om programmering så prøver jeg meg på
              å lage postkalkulatoren med Javascript. Februar 2019 begynner jeg
              å teste ut forskjellige ting for å få kalkulatoren til å fungere.
              Det går ikke så bra enda. Begrensninger i mine
              programmeringsferdigheter gjør også at jeg må gå over til mer
              studier før jeg kan fortsette.
            </p>
            <br />
            <p className="text mb "></p>

            <div className="img-text-container2 mb">
              <div className="img-frame">
                <Image src={firstcalculator} />
              </div>
              <p className="text img-text">
                Her tester jeg ut å lage programmet med Html, Css og Javascript.
                Foreløpig går ikke dette så veldig bra.
              </p>
            </div>
            <div className="img-text-container2 mb">
              <div>
                <p className="text img-text">
                  Desember 2019 begynner jeg helt på nytt i et forsøk på å lage
                  en fungerende post kalkulator app. Jeg begynner å få ting til
                  å fungere og jeg publiserer appen som en nettside. Etter at
                  jeg tester den på jobb så må det en del forbedringer å
                  rettinger til. Foreløpig er det bare jeg som bruker appen.
                </p>
                <br />
                <p className="text img-text mb">
                  8 februar 2020 tas appen i bruk, også for andre som bygger
                  poster. Denne appen har ikke noen database, dermed kan man
                  ikke lagre og slette poster. Jeg kodet inn nye poster og
                  publiserte på nytt hver gang nye poster ble lagt inn.
                </p>
              </div>
              <div>
                <Image src={secondcalculator} />
              </div>
              <div className="mt">
                <Image src={thirdcalculator} />
              </div>
              <div className="mt">
                <Image src={fourthcalculator} />
              </div>
            </div>
            <h1 className="header mb">Database</h1>
            <p className="text">
              Den første utgaven av Postarkiv var ikke responsiv, dvs at den er
              ubrukelig på mindre skjermer som mobiler og nettbrett. Dette ville
              jeg gjøre noe med. Jeg gjorde et forsøk på å implementere det i
              den første utgaven av Postarkiv. Men fant fort ut at når det ikke
              er gjort fra begynnelsen så ble det mer jobb å bli ferdig med den
              enn å begynne helt på nytt.
            </p>
            <br />
            <p className="text">
              Jeg hadde ikke så mye erfaring enda på den første appen så det ble
              litt rotete struktur og litt spaghettikode som det gjerne blir
              kalt. Men appen fungerer som den skal og sluttbrukeren vil ikke
              merke noe til det, men den som skal vedlikeholde koden og
              eventuelt legge til noe nytt får en kjempejobb hvis det er dårlig
              struktur i kildekoden.
            </p>
            <br />
            <p className="text mb">
              Etter at jeg hadde begynt med den nye appen så lærer jeg litt om
              backend koding også, for å bruke databaser blant annet. Jeg
              bestemmer meg for å koble til en database så man kan lage nye
              poster å lagre dem rett fra programmet. Da må jeg også få på plass
              innlogging for å unngå at uautoriserte får tilgang til
              manipulering av data.
            </p>

            <div className="img-text-container mb">
              <div className="image-container">
                <Image src={postarkiv2list} />
              </div>
              <p className="image-text img-text">
                Her er forsiden på den nye appen, her kan man søke etter poster
                som denne gangen ligger lagret på en av Mongo DB's servere og
                ikke i selve kildekoden.
              </p>
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

export default PostArkivStartPage;
