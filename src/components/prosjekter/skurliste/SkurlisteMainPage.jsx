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
                {/* <img
                  style={{ width: "100%" }}
                  src="https://www.themodelskit.co.uk/wp-content/uploads/2020/10/shutterstock_1563195187-1024x683.jpg"
                  alt=""
                /> */}
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
            <p className="image-text img-text2">
              På bildet er de grå feltene ordre som er ferdig og den grønne
              pågår. På kolonnen post kan man klikke for å finne posten man skal
              bygge.
            </p>
          </div>

          {/* <ImageComponent />
          <TextSkurliste />
          <ImageComponent2 />
          <PostarkivSection /> */}
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
          .image-container {
            
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

export default SkurlisteMainPage;
