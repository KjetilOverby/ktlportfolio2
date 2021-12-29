import React from "react";
import ContentLayout from "../../common/ContentLayout";
import Image from "next/image";
import VerktoyregisterSeg from "../../../../assets/prosjekter/verktoyregisterSeg.png";

const Toolregister2StartPage = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <div className="article-container">
            <h1 className="header mb">Verktøyregister</h1>
            <p className="text">
              Sagbladregister som jeg har laget tidligere, tar kun for seg
              sagbladene som sendes til omlodding og har et eget id nummer. Men
              Det er også flere bladtyper som ikke omloddes, men brukes kun til
              de er utslitt og kastes. Det er også en del annet verktøy som
              kniver og segmenter. Ikke noe av dette bllir omloddet men kastet
              etter at de er brukt opp.
            </p>
            <br />
            <p className="text mb">
              I sagbladregister registreres hvert enkelt blad med et id nummer,
              dette gjør at antallet sagblad teller seg selv. Med forøvrig
              verktøy så blir det annerledes da det ikke trenger å ha egne id
              nummere men registrers i antall. Da blir det et helt annet system
              enn sagbladregister, der hver type verktøy må oppdateres med
              antall til eller fra. Man sletter altså ikke noe fra databasen
              sånn som man gjør i sagbladregister. Så her ble det nye
              utfordringer om hvordan jeg skulle løse det.
            </p>
            <div className="img-text-container mb">
              {/* <img
                style={{ width: "100%" }}
                src="https://www.themodelskit.co.uk/wp-content/uploads/2020/10/shutterstock_1563195187-1024x683.jpg"
                alt=""
              /> */}
              <div className="image-container">
                <Image src={VerktoyregisterSeg} />
              </div>
              <p className="image-text img-text">
                Her er en side med noe av verktøyet som blir brukt i maskinene.
                Det jeg har gjort her er å ta bilder av verktøyet, noe som gjør
                det mye mer oversiktlig enn å bare bruke tekst. Det er også
                lettere å unngå å redigere feil type, spesielt nå noen nye
                personer skal jobbe med dette.
              </p>
            </div>
            <p className="text mb">
              Etterhvert så bygger jeg inn sagbladregister i denne appen også,
              sånn at vi får alt på ett sted. Det er vel kanskje den fjerde
              gangen jeg bygger den appen. Jeg lager den nok en gang med helt
              nytt design.
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
          .image-container {
            border: 1px solid #77777753
          }
          @media screen and (max-width: 2100px) {
            .article-container {
              margin: 0 8rem;
            }
          @media screen and (max-width: 1000px) {
            .article-container {
              margin: 0;
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

export default Toolregister2StartPage;
