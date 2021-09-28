import React from "react";
import PageLayout from "../src/components/common/PageLayout";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";

const cv = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
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
