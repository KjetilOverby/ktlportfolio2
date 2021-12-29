import React from "react";
import Link from "next/link";

const ProjectCards2 = ({ header, text, image, goto, btnText, link }) => {
  return (
    <>
      <div className="container">
        {image}
        <h1 className="header">{header}</h1>
        <p className="text">{text}</p>
        <div className="link-btn-container">
          <Link href={`${goto}`}>
            <button className="btn">{btnText}</button>
          </Link>
          {link && <a href={`${link}`}>Til nettsiden</a>}
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
          .container {
            width: 25rem;
            padding: 3rem;
            height: 35rem;
            border: 0.5px solid #81818168;
            box-shadow: 5px 5px 20px #c2c2c220;
            border-radius: 5px;
          }
          .header {
            font-size: 1.5rem;
            font-weight: 300;
            margin: 1rem 0;
          }
          .link-btn-container {
            display: flex;
            flex-direction: column;
            height: 8rem;
            justify-content: space-between;
          }
          .text {
            font-size: 0.9rem;
            font-weight: 300;
          }
          @media screen and (max-width: 1500px) {
            .container {
              margin: ;
            }
          }
        `}
      </style>
    </>
  );
};

export default ProjectCards2;
