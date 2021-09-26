import React from "react";
import ContentLayout from "../../common/ContentLayout";
import DatabasePostarkiv from "./DatabasePostarkiv";
import FirstSection from "./FirstSection";
import OldSystem from "./OldSystem";
import SecondSectionPostarkiv from "./SecondSectionPostarkiv";
import ThirdSectionPostarkiv from "./ThirdSectionPostarkiv";

const PostArkivStartPage = () => {
  return (
    <>
      <div className="container">
        <ContentLayout>
          <FirstSection />
          <SecondSectionPostarkiv />
          <ThirdSectionPostarkiv />
          <DatabasePostarkiv />
          <OldSystem />
        </ContentLayout>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
            display: grid;
          }
        `}
      </style>
    </>
  );
};

export default PostArkivStartPage;
