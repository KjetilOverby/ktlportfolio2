import React from "react";
import PageLayout from "../../src/components/common/PageLayout";
import FooterComponent from "../../src/components/common/FooterComponent";
import HeaderComponent from "../../src/components/common/HeaderComponent";
import Sagbladregister2MainPage from "../../src/components/prosjekter/sagbladregister2/Sagbladregister2MainPage";

const sagbladregister2 = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <Sagbladregister2MainPage />
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

export default sagbladregister2;
