import React from "react";
import HeaderComponent from "../../src/components/common/HeaderComponent";
import PageLayout from "../../src/components/common/PageLayout";
import SagbladoversiktMainPage from "../../src/components/prosjekter/sagbladoversikt/SagbladoversiktMainPage";
import FooterComponent from "../../src/components/common/FooterComponent";

const sagbladoversikt = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <SagbladoversiktMainPage />
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

export default sagbladoversikt;
