import React from "react";

const CvTopComponent = () => {
  return (
    <>
      <div className="container">
        <div className="text-container">
          <h1 className="title mb">Webutvikling</h1>
          <p className="description">
            Jeg er selvlært webdesigner og lager apper med både frontend og
            backend. Jeg har hovedsaklig tatt kurs på Udemy. Men har også vært
            innom LinkedIn Learning, Treehouse, Coursera. Det har også blitt
            uttallige tutorials på Youtube. Og har under opplæringen laget en
            hel del med meningsløse apper bare for å trene på det jeg har lært.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background: linear-gradient(to right, #303949, rgba(0, 0, 0, 0.2)),
              url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80");
            background-size: cover;
            height: 40rem;
            background-position: center;
            display: grid;
            grid-template-columns: repeat(12, minmax(2rem, 1fr));
            grid-template-rows: 10rem min-content 1fr 1fr;
          }

          .title {
            color: #ddd;
            font-size: 3.5rem;
            font-weight: bold;
          }
          .description {
            color: #ddd;
          }
          .text-container {
            grid-column: 2/6;
            grid-row: 2;
          }
          @media screen and (max-width: 1600px) {
            .text-container {
              grid-column: 2/8;
            }
          @media screen and (max-width: 1200px) {
            .text-container {
              grid-column: 2/10;
            }
          @media screen and (max-width: 900px) {
            .text-container {
              grid-column: 2/12;
              grid-row: 1;
              margin-top: 2rem
            }
          }
        `}
      </style>
    </>
  );
};

export default CvTopComponent;
