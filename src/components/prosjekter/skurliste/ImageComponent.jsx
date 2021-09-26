import React from "react";
import Image from "next/image";
import startpage1 from "../../../../assets/skurliste/startpage5.png";
import startpage2 from "../../../../assets/skurliste/startpage1.png";
import startpage3 from "../../../../assets/skurliste/startpage3.png";
import startpage4 from "../../../../assets/skurliste/startpage4.png";
import startpage5 from "../../../../assets/skurliste/startpage2.png";

const ImageComponent = () => {
  return (
    <>
      <div className="container">
        <img
          src="https://images.unsplash.com/photo-1490093158370-1a6be674437b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          className="background"
        ></img>
        <div className="img1-container">
          <Image src={startpage1} />
        </div>
        <div className="img2-container">
          <Image src={startpage2} />
        </div>
        <div className="img3-container">
          <Image src={startpage3} />
        </div>
        <div className="img4-container">
          <Image src={startpage4} />
        </div>
        <div className="img5-container">
          <Image src={startpage5} />
        </div>
      </div>
      <style jsx>
        {`
          .background {
            grid-column: 1/-1;
            width: 100%;
            filter: blur(5px);
          }
          .container {
            display: grid;
            grid-template-columns: repeat(18, minmax(2rem, 1fr));
            grid-template-rows: repeat(18, minmax(2rem, 1fr));
            height: 70rem;
          }
          .img1-container {
            grid-column: 1/9;
            grid-row: 4;
            animation: slide 1.9s;
          }
          .img2-container {
            grid-column: 3/12;
            grid-row: 6;
            animation: slide 1.5s;
          }
          .img3-container {
            grid-column: 5/14;
            grid-row: 8;
            animation: slide 1.2s;
          }
          .img4-container {
            grid-column: 7/17;
            grid-row: 10;
            animation: slide 1s;
          }
          .img5-container {
            grid-column: 9/19;
            grid-row: 12;
            animation: slide 0.8s;
          }
          @keyframes slide {
            0% {
              transform: translateY(-20rem) translateX(-50rem);
            }
            100% {
              transform: translateX(0);
            }
          }
          @media (max-width: 2100px) {
            .img1-container {
              grid-row: 2;
            }
            .img2-container {
              grid-row: 4;
            }
            .img3-container {
              grid-row: 6;
            }
            .img4-container {
              grid-row: 8;
            }
            .img5-container {
              grid-row: 10;
            }
          }
          @media (max-width: 700px) {
            .container {
              display: grid;
              grid-template-columns: repeat(12, minmax(2rem, 1fr));
              grid-template-rows: repeat(18, minmax(2rem, 1fr));
              height: 40rem;
            }
            .img1-container {
              grid-column: 2/12;
              grid-row: 1;
              animation: slide 1.9s;
            }
            .img2-container {
              grid-column: 2/12;
              grid-row: 4;
              animation: slide 1.5s;
            }
            .img3-container {
              grid-column: 2/12;
              grid-row: 7;
              animation: slide 1.2s;
            }
            .img4-container {
              grid-column: 2/12;
              grid-row: 10;
              animation: slide 1s;
            }
            .img5-container {
              grid-column: 2/12;
              grid-row: 13;
              animation: slide 0.8s;
            }
          }
        `}
      </style>
    </>
  );
};

export default ImageComponent;
