import React from "react";
import FooterComponent from "../../src/components/common/FooterComponent";
import HeaderComponent from "../../src/components/common/HeaderComponent";
import PageLayout from "../../src/components/common/PageLayout";
import SkurlisteMainPage from "../../src/components/prosjekter/skurliste/SkurlisteMainPage";

const skurliste = () => {
  return (
    <PageLayout>
      <HeaderComponent />
      <SkurlisteMainPage />
      <FooterComponent />
    </PageLayout>
  );
};

export default skurliste;
