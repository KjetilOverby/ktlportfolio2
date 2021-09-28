import React from "react";
import PageLayout from "../src/components/common/PageLayout";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import KursMainPage from "../src/components/kurs/KursMainPage";

const kurs = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <KursMainPage />
        <FooterComponent />
      </PageLayout>
      <style jsx>{``}</style>
    </>
  );
};

export default kurs;
