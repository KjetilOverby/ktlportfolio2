import React from "react";

const PageLayout = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>
        {`
          .container {
            min-height: 100vh;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 6rem 1fr auto;
            grid-template-areas:
              "header"
              "content"
              "footer";
          }
        `}
      </style>
    </>
  );
};

export default PageLayout;
