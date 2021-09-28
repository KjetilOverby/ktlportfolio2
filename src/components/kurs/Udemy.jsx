import React from "react";
import udemycourses from "../kurs/UdemyObject";
import Link from "next/link";

const Udemy = () => {
  return (
    <>
      <div className="container">
        {udemycourses.map((course) => {
          return (
            <div key={course.link} className="img-container">
              <Link href={course.link}>
                <img className="img" src={course.img} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
            grid-gap: 2rem;
            place-items: center;
            margin-top: 5rem;
          }
          .img-container {
            width: 100%;
            display: grid;
            place-items: center;
          }
          .img:hover {
            cursor: pointer;
          }

          @media screen and (max-width: 500px) {
            .container {
            }
          }
        `}
      </style>
    </>
  );
};

export default Udemy;
