import React from "react";
import ContentLayout from "../common/ContentLayout";
import Learning from "./Learning";
import Udemy from "./Udemy";

const KursMainPage = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <div className="top-section">
            <h1 className="header mb">Nettkurs</h1>
            <p className="text">
              Jeg har i hovedsak brukt Udemy.com som hovedkilde til å lære å
              kode. Men jeg har vært innom Treehouse, Coursera, linkedIN. Jeg
              har 57 Udemy kurs. De fleste kursene er ikke fullført, det er
              fordi jeg var bare ute etter spesielle ting i kursene for å
              fordype kunnskap i spesielle felt. Det meste av det som ikke er
              fullført er noe jeg kan ganske godt. Klikk på kursene for å få
              mere info.
            </p>
          </div>

          <Udemy />
          <Learning />
        </ContentLayout>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
          }
          .top-section {
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default KursMainPage;
