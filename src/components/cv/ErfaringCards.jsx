import React from "react";
import Image from "next/image";
import Link from 'next/link'

const ErfaringCards = ({ title, date, text, img1, img2, goto }) => {
  return (
    <>
      <div className="container">
        <p className="text date">{date}</p>
        <div>
          <h1 className="header mb">{title}</h1>
          <p className="text mb">{text}</p>
          <div className="img-container ">
            <div className="img1-container">
              <Image src={img1} />
            </div>
            <div className="img2-container">
              <Image src={img2} />
            </div>
            <Link href={`${goto}`}>
              <button className="btn">Les mer</button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .btn {
            grid-column: 10/-1;
            grid-row: 1;
            background: var(--primarytext);
            color: #ddd;
            border: none;
            outline: none;
            height: 4rem;
            transition: 0.5s;
          }
          .btn:hover {
            cursor: pointer;
            background: #1f3523;
          }
          .container {
            display: grid;
            grid-template-columns: 25rem 1fr;
            margin-bottom: 8rem;
            grid-template-areas: "date text";
          }
          .date {
            font-weight: bold;
            grid-area: date;
            width: 15rem;
            border-right: 1px solid #bebebe;
          }
          .img-container {
            display: grid;
            grid-template-columns: repeat(12, minmax(2rem, 1fr));
            grid-template-rows: repeat(12, minmax(2rem, 1fr));
            height: 35rem;
            grid-area: text;
          }
          .img1-container {
            grid-column: 1/9;
          }
          .img2-container {
            grid-column: 5/-1;
            grid-row: 4;
          }
          @media screen and (max-width: 2100px) {
            .container {
              margin-bottom: 0;
            }
          }
          @media screen and (max-width: 1000px) {
            .container {
              grid-template-rows: 3rem min-content;
              grid-template-columns: 1fr;
              grid-template-areas:
                "date"
                "text";
            }
            .date {
              border-right: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default ErfaringCards;
