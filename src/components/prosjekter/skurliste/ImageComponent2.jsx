import React from "react";
import Image from "next/image";
import post1 from "../../../../assets/skurliste/post1.png";
import post2 from "../../../../assets/skurliste/post2.png";
import post3 from "../../../../assets/skurliste/post3.png";
import post4 from "../../../../assets/skurliste/post4.png";
import post5 from "../../../../assets/skurliste/post5.png";
import skurplan3 from "../../../../assets/skurliste/skurplan3.png";

const ImageComponent2 = () => {
  return (
    <>
      <div className="container">
        <div className="box1">
          <Image src={post1} />
        </div>
        <div className="box2">
          <Image src={post3} />
        </div>
        <div className="box3">
          <Image src={skurplan3} />
          <p className="image-text">
            Her er kan man legge til nye ordrer eller redigere de eksisterende.
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "box1 box2"
            "box3 box3";
          margin-top: 8rem;
          grid-column-gap: 3rem;
        }
        .box1 {
          grid-area: box1;
        }
        .box2 {
          grid-area: box2;
        }
        .box3 {
          grid-area: box3;
        }
        @media screen and (max-width: 700px) {
          .container {
            grid-template-columns: 1fr;
            grid-template-areas:
              "box1"
              "box2"
              "box3";
          }
        }
      `}</style>
    </>
  );
};

export default ImageComponent2;
