import React from "react";
import PageLayout from "../../src/components/common/PageLayout";
import FooterComponent from "../../src/components/common/FooterComponent";
import HeaderComponent from "../../src/components/common/HeaderComponent";
import SagbladregisterMainPage from "../../src/components/prosjekter/sagbladregister/SagbladregisterMainPage";

const sagbladregister = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <div style={{ gridArea: "content" }}>
          <SagbladregisterMainPage />
        </div>

        <FooterComponent />
      </PageLayout>
      <style jsx>{``}</style>
    </>
  );
};

export default sagbladregister;
