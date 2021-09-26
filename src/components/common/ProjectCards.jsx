import React from "react";
import Link from "next/link";

const ProjectCards = ({ header, text, background, image, goto, btnText }) => {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img className="img" src={background} alt="" />
        </div>

        <div className="img-container2">{image}</div>
        <div className="text-container">
          <h1 className="header">{header}</h1>
          <p className="card-text">{text}</p>
          <Link href={`${goto}`}>
            <button className="btn">{btnText}</button>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .btn {
            width: 11rem;
            padding: 1rem;
            background: #4d6886;
            border: none;
            color: #fff;
            margin-top: 2rem;
            transition: 0.5s;
          }
          .btn:hover {
            cursor: pointer;
            background: #3b526b;
          }
          .blursharp {
            overflow: hidden;
            grid-column: 1/10;
            grid-row: 1/7;
          }
          .img {
            width: 100%;
          }
          .container {
            display: grid;
            grid-template-columns: repeat(12, minmax(2rem, 1fr));
            grid-template-rows: repeat(14, minmax(2rem, 1fr));
            height: 80rem;
          }
          .header {
            margin-bottom: 1rem;
            font-weight: 400;
            color: var(--primarytext);
          }
          .img-container {
            filter: blur(5px);
            grid-column: 1/10;
            grid-row: 1/7;
          }
          .img-container2 {
            grid-column: 4/13;
            grid-row: 5/10;
            z-index: 12;
          }
          .card-text {
            color: var(--primarytext);
          }

          .text-container {
            background-color: #fff;
            grid-column: 6/13;
            grid-row: 2/13;
            padding: 2rem;
            z-index: 10;
          }
          @media (max-width: 2100px) {
            .container {
              grid-template-columns: repeat(12, minmax(2rem, 1fr));
              grid-template-rows: repeat(14, minmax(2rem, 1fr));
              height: 65rem;
            }
            .img-container2 {
              grid-row: 6/10;
            }
            .text-container {
              grid-row: 2/13;
            }
          }
          @media (max-width: 1000px) {
            .img-container2 {
              grid-column: 1/18;
              grid-row: 5/10;
              z-index: 120;
            }
            .text-container {
              grid-column: 2/16;
              grid-row: 2/16;
              z-index: 100;
            }
          }
          @media (max-width: 850px) {
            .container {
              height: 55rem;
              grid-template-columns: repeat(18, minmax(1rem, 1fr));
              grid-template-rows: repeat(16, minmax(1rem, 1fr));
            }
            .img-container2 {
              grid-column: 2/18;
              grid-row: 2/10;
              z-index: 120;
            }
            .img-container {
              grid-row: 1/-1;
              grid-column: 1/-1;
            }
            .text-container {
              grid-column: 2/16;
              grid-row: 7/16;
              height: 20rem;
              z-index: 1000;
            }
          }
          @media screen and (max-width: 750px) {
            .container {
              grid-template-columns: repeat(18, minmax(1rem, 1fr));
              grid-template-rows: repeat(16, minmax(1rem, 1fr));
              height: 40rem;
            }
            .header {
              font-size: 1.8rem;
            }
            .img-container {
              grid-column: 1/-1;
            }

            .text-container {
              grid-column: 2/16;
              grid-row: 8/16;
              z-index: 100;
            }
            .img-container2 {
              grid-column: 3/18;
              grid-row: 3/10;
              z-index: 12;
            }
          }
          @media screen and (max-width: 500px) {
            .header {
              font-size: 1.8rem;
            }
            .img-container {
              grid-column: 1/-1;
            }
            .blursharp {
              overflow: hidden;
              grid-column: 1/-1;
              grid-row: 1/7;
            }
            .text-container {
              grid-column: 2/16;
              grid-row: 6/16;
              z-index: 100;
            }
            .img-container2 {
              grid-column: 3/18;
              grid-row: 3/10;
              z-index: 12;
            }
          }
        `}
      </style>
    </>
  );
};

export default ProjectCards;
