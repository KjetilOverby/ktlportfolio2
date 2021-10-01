import React from "react";
import ContentLayout from "../../common/ContentLayout";
import Sagbladregister2Article from "./Sagbladregister2Article";

const Sagbladregister2MainPage = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <Sagbladregister2Article />
        </ContentLayout>
        <style jsx>
          {`
            .container {
              grid-area: content;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Sagbladregister2MainPage;
