import React from "react";
import ContentLayout from "../../common/ContentLayout";
import ImageComponent from "./ImageComponent";
import ImageComponent2 from "./ImageComponent2";
import TextSkurliste from "./TextSkurliste";

const SkurlisteMainPage = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <h1 className="header mb">Skurliste</h1>
          <ImageComponent />
          <TextSkurliste />
          <ImageComponent2 />
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

export default SkurlisteMainPage;
