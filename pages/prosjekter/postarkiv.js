import React from "react";
import PageLayout from "../../src/components/common/PageLayout";
import HeaderComponent from "../../src/components/common/HeaderComponent";
import FooterComponent from "../../src/components/common/FooterComponent";
import PostArkivStartPage from "../../src/components/prosjekter/postarkiv/PostArkivStartPage";

const postarkiv = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent />
        <div style={{ gridArea: "content" }}>
          <PostArkivStartPage />
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

export default postarkiv;
