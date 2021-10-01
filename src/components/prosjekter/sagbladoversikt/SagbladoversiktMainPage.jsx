import React from "react";
import ContentLayout from "../../common/ContentLayout";
import SagbladOversiktArticle from "./SagbladOversiktArticle";

const SagbladoversiktMainPage = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <SagbladOversiktArticle />
        </ContentLayout>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
          }
        `}
      </style>
    </>
  );
};

export default SagbladoversiktMainPage;
