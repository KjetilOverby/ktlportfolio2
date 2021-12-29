import React from "react";
import FooterComponent from "../../src/components/common/FooterComponent";
import HeaderComponent from "../../src/components/common/HeaderComponent";
import PageLayout from "../../src/components/common/PageLayout";
import Toolregister2StartPage from "../../src/components/prosjekter/toolregister2/Toolregister2StartPage";

const toolregister2 = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <div style={{ gridArea: "content" }}>
          <Toolregister2StartPage />
        </div>

        <FooterComponent />
      </PageLayout>
    </>
  );
};

export default toolregister2;
