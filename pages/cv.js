import React from "react";
import PageLayout from "../src/components/common/PageLayout";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import CvMainPage from "../src/components/cv/CvMainPage";

const cv = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <CvMainPage />
        <FooterComponent />
      </PageLayout>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default cv;
