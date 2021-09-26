import React from "react";
import PageLayout from "../src/components/common/PageLayout";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import AboutStartPage from "../src/components/about/AboutStartPage";

const about = () => {
  return (
    <>
      <div className="container">
        <PageLayout>
          <HeaderComponent />
          <AboutStartPage />
          <FooterComponent />
        </PageLayout>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default about;
