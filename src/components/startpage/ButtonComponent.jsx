import React from "react";
import Link from "next/link";

const ButtonComponent = ({ header, icon, goto }) => {
  return (
    <>
      <Link href={`${goto}`}>
        <div className="container">
          <div>{icon}</div>
          <div>
            <p>{header}</p>
          </div>
        </div>
      </Link>
      <style jsx>
        {`
          .container {
            color: #ffffff;
            padding: 0.5rem;
            display: flex;
            align-items: center;
            border-radius: 5px;
            margin-bottom: 1.5rem;
            transition: 0.5s;
            flex-direction: column;
            width: 20rem;
            height: 8rem;
            justify-content: space-between;
            color: var(--frontpagetext);
            z-index: 10;
          }
          .container:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default ButtonComponent;
