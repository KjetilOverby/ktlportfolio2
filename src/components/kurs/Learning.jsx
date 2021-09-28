import React from "react";
import learning from "../../../src/components/kurs/LinkedLearningObject";
import Link from "next/link";

const Learning = () => {
  return (
    <>
      <div className="container">
        {learning &&
          learning.map((learn) => {
            return (
              <div key={learn.link} className="img-container">
                <Link href={learn.link}>
                  <img className="img" src={learn.img} alt="" />
                </Link>
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
            grid-gap: 2rem;
            place-items: center;
            margin-top: 5rem;
          }
          .img {
            width: 100%;
            cursor: pointer;
          }
          .img-container {
          }
        `}
      </style>
    </>
  );
};

export default Learning;
