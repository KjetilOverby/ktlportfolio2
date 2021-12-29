import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import ProsjekterStartPage from "../src/components/prosjekter/ProsjekterStartPage";
import ProsjekterStartPage2 from "../src/components/prosjekter/ProsjekterStartPage2";

const prosjekter = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <div style={{ gridArea: "content" }}>
          <ProsjekterStartPage2 />
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
