import React from "react";
import ContentLayout from "../../common/ContentLayout";
import ImageComponent from "./ImageComponent";
import ImageComponent2 from "./ImageComponent2";
import PostarkivSection from "./PostarkivSection";
import TextSkurliste from "./TextSkurliste";

import Image from "next/image";
import Startskjerm from "../../../../assets/skurliste2/startskjerm.png";
import post from "../../../../assets/skurliste2/post.png";
import skurliste from "../../../../assets/skurliste2/skurliste.png";
import postsearch from "../../../../assets/skurliste2/postsearch.png";
import postcreate from "../../../../assets/skurliste2/postcreate.png";

const SkurlisteMainPage = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <div className="article-container">
            <h1 className="header mb">Skurliste</h1>
            <p className="text mb">
              Skurliste er en enkel app, en utvidelse av appen Postarkiv. Den
              bruker den samme databasen som Postarkiv bruker. Meningen med
              denne appen er at den drar søk etter poster som skal bygges et
              steg lenger. Planer som kommer om hva som skal skjæres i løpet av
              en uke kommer på en såkalt skurliste. Lista legges inn i appen og
              da kan man klikke rett i lista å få den posten som hører til
              ordren med en gang uten å søke.
            </p>

            <div className="img-text-container mb">
              <div className="image-container">
                <Image src={post} />
              </div>
              <p className="image-text img-text">
                Postoppsett i nytt design. Det er 12 bakgrunner som varierer
                hver gang nettsiden blir lastet ned.
              </p>
            </div>
            <p className="text mb">
              <p className="text mb">
                Når man klikker så vil det komme opp et vindu på venstre side
                som vist på bildet under. Grunnen til at man får opp det og ikke
                kommer rett til posten man skal bygge er for at noen ordrer har
                flere varianter med små forskjeller, og man kan også klikke på
                søk på alle bladtykkelser og da kommer posten som er på ordren
                fram med alle bladvarianter som finnes i databasen.
              </p>
            </p>
            <div className="image-container img-container">
              <Image src={skurliste} />
            </div>
            <p className="image-text">
              På bildet er de grå feltene ordre som er ferdig og den grønne
              pågår. På kolonnen post kan man klikke for å finne posten man skal
              bygge.
            </p>
            <div>
              <h1 className="header mb mt">Postarkiv</h1>
              <p className="text mb">
                For å få alt på ett sted så utvikler jeg appen videre sånn at
                man kan få lage nye poster og lagre. Jeg legger til
                Postarkivappen inn i denne. Jeg bygger den helt på nytt og med
                nytt design.
              </p>

              <div className=" mb">
                <div className="image-container">
                  <Image src={postsearch} />
                </div>
                <p className="image-text img-text mb">
                  Her er et bilde av siden man kan manuelt søke etter poster.
                  Designet er helt nytt og denne appen er merkbart raskere enn
                  Postarkivappen.
                </p>
              </div>
              <p className="text mb">
                <p className="text mb">
                  På bildet under lager man en ny post. Det som er nytt i
                  forhold til Postarkivappen er at man kan klikke på råmål
                  knapper istedet for å skrive inn manuelt. Men man kan også
                  skrive inn manuelt hvis ikke råmål som skal brukes finnes på
                  listen. på utfylling foran og bak vises kun knapper på de
                  ringer som vi har og kan ikke legge inn manuelt, derfor blir
                  det kun de verdiene som vi har ringer til som kan brukes og
                  man unngår at feil verdier kan skrives inn. Overskriften på
                  posten skrives delvis automatisk mens man lager posten.
                </p>
              </p>
              <div className="image-container2 img-container">
                <Image src={postcreate} />
              </div>
              <p className="image-text img-text2">
                Det er ikke mulig å lagre posten før utfyllin foran og bak er
                riktig. Her ser man også en advarsel om at man ikke er innlogget
                og kan ikke lagre posten som blir laget her.
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

          .img-text-container {
            display: grid;
            grid-template-columns: 60% 1fr;
            grid-column-gap: 1rem;
          }
          .image-container2 {
            border: 1px solid #c9c9c9;
            padding: 1rem;
            box-shadow: 5px 5px 10px #96969659
          }
         
          .img-text2 {
              margin-top: .5rem
            }
          
          @media screen and (max-width: 2100px) {
            .article-container {
              margin: 0 10rem;
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

export default SkurlisteMainPage;
