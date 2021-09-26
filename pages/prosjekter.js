import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import ProsjekterStartPage from "../src/components/prosjekter/ProsjekterStartPage";

const prosjekter = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <div style={{ gridArea: "content" }}>
          <ProsjekterStartPage />
        </div>
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

export default prosjekter;
