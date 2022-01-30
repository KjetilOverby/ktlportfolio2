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
          <div className="content-container">
            <div className="profile-container">
              <Image className="profile" src={profile} />
            </div>
            <div className="text-container">
              <h1 className="profile-name">Kjetil Øverby</h1>
              <p>
                Født 1980, bor på Flisa. Er gift og har ei datter. Min nåværende
                jobb er på sliperiet på Moelven Våler. Min tidligere utdanning
                og yrkeserfaring er ikke relevant til webdesign/programmering.
                Men jeg har likevel laget to webapper som er i daglig bruk på
                jobben.
              </p>
              <br />
              <p>Litt om tidligere utdanning og yrke:</p>
              <br />
              <p>
                i 1996 begynte jeg på trelastlinja i Grue. Gikk der i 2 år og
                ble etter det lærling på Våler skurlag. Den gang Forestia som
                senere ble Moelven Våler. Jeg jobbet der fram til 2008 og da
                begynte jeg på Nordan i Arneberg. Jeg jobbet der i ca 5 år før
                det ble nedbemannet og til slutt nedlagt. I 2012 begynte jeg på
                Meolven Våler igjen og jobber der fortsatt.
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
        </div>
      </ContentLayout>
      <style jsx global>{`
        .profile {
          object-fit: cover;
        }
      `}</style>
      <style jsx>{`
        .container {
        }
        .content-container {
          display: flex;
          flex-direction: row;
        }
        .header {
          color: var(--primarytext);
          margin-bottom: 5rem;
        }
        .profile-container {
          margin-right: 10rem;
        }
        .profile-name {
          margin-bottom: 2rem;
        }
        .img {
          width: 100%;
          filter: blur(5px);
        }
        .text-container {
          color: var(--primarytext);
        }
        @media screen and (max-width: 800px) {
          .text-container {
            padding: 0;
          }
          .content-container {
            flex-direction: column;
          }
          .profile-container {
            margin-right: 0;
          }
        }

        @media screen and (max-width: 700px) {
          .text-container {
          }
        }
      `}</style>
    </>
  );
};

export default AboutImageSection;
