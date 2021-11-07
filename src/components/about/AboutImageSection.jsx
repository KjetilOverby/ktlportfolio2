import React from "react";
import ContentLayout from "../common/ContentLayout";
import Image from "next/image";
import profile from "../../../assets/kjetil.jpg";

const AboutImageSection = () => {
  return (
    <>
      <ContentLayout>
        <div className="container">
          <h1 className="header">Om Meg</h1>
          <div className="background">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1541771491867-fea9a09d3032?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
          </div>
          <div className="profile-container">
            <Image className="profile" height="400" width="400" src={profile} />
          </div>
          <div className="text-container">
            <h1 className="profile-name">Kjetil Øverby</h1>
            <p>
              Født 1980, bor på Flisa. Er gift og har ei datter. Min nåværende
              jobb er på sliperiet på Moelven Våler. Min tidligere utdanning og
              yrkeserfaring er ikke relevant til webdesign/programmering. Men
              jeg har likevel laget to webapper som er i daglig bruk på jobben.
            </p>
            <br />
            <p>Litt om tidliger utdanning og yrke:</p>
            <br />
            <p>
              i 1996 begynte jeg på trelastlinja i Grue. Gikk der i 2 år og ble
              etter det lærling på Våler skurlag. Den gang Forestia som senere
              ble Moelven Våler. Jeg jobbet der fram til 2008 og da begynte jeg
              på Nordan i Arneberg. Jeg jobbet der i ca 5 år før det ble
              nedbemannet og til slutt nedlagt. I 2012 begynte jeg på Meolven
              Våler igjen og jobber der fortsatt.
            </p>
            <br />
            <p>
              De senere årene har jeg interessert meg for koding og
              programmering og begynte å lære meg det. Jeg har tatt mange kurs
              og laget mange meningsløse prosjekter. Men også noen prosjekter
              som er i daglig bruk i jobbsammenheng.
            </p>
          </div>
        </div>
      </ContentLayout>
      <style jsx global>{`
        .profile {
          border-radius: 50%;
          object-fit: cover;
        }
      `}</style>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(12, minmax(2rem, 1fr));
          grid-template-rows: repeat(12, minmax(2rem, 1fr));
          height: 45rem;
        }
        .background {
          grid-column: 1/10;
          grid-row: 2/6;
        }

        .header {
          grid-column: 1/-1;
          color: var(--primarytext);
        }
        .profile-container {
          grid-column: 2/7;
          grid-row: 3;
        }
        .profile-name {
          margin-bottom: 2rem;
        }
        .img {
          width: 100%;
          filter: blur(5px);
        }
        .text-container {
          grid-column: 6/-1;
          grid-row: 2/11;
          z-index: 15;
          padding: 2rem;
          background: #fff;
          color: var(--primarytext);
        }
        @media screen and (max-width: 1000px) {
          .text-container {
            grid-column: 1/-1;
            grid-row: 7/-1;
            padding: 0;
          }
        }
        .container {
          height: 60rem;
        }
        @media screen and (max-width: 700px) {
          .text-container {
            grid-row: 6/-1;
          }
        }
      `}</style>
    </>
  );
};

export default AboutImageSection;
