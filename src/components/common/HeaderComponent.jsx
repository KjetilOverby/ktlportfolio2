import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import LogoComponent from "./LogoComponent";

const HeaderComponent = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  const openSidebarHandler = () => {
    setHideSidebar(true);
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <div className="container">
        <div className="logoContainer">
          <LogoComponent />
        </div>
        <div className="tabContainer">
          {isMobile ? (
            <>
              <IoMenuSharp
                onClick={openSidebarHandler}
                className="drawerIcon"
                style={{ fontSize: "2rem", color: "var(--start-page-yellow)" }}
              />
              {hideSidebar && (
                <div
                  className={`sidebar-container ${
                    openSidebar ? "sidebar-open" : "sidebar-close"
                  }`}
                >
                  <Link href="/">
                    <p className="tabs-mobile">Hjem</p>
                  </Link>
                  <Link href="/prosjekter">
                    <p className="tabs-mobile">prosjekter</p>
                  </Link>
                  <Link href="/cv">
                    <p className="tabs-mobile">CV</p>
                  </Link>
                  <Link href="/kurs">
                    <p className="tabs-mobile">Kurs</p>
                  </Link>
                  <Link href="/about">
                    <p className="tabs-mobile">Om meg</p>
                  </Link>
                </div>
              )}
              {openSidebar && (
                <div
                  onClick={openSidebarHandler}
                  style={{
                    background: "rgba(256,256,256,.0)",
                    height: "100vh",
                    width: "100vw",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                ></div>
              )}
            </>
          ) : (
            <>
              <Link href="/">
                <p className="tabs">Hjem</p>
              </Link>
              <Link href="/prosjekter">
                <p className="tabs">prosjekter</p>
              </Link>
              <Link href="/cv">
                <p className="tabs">cv</p>
              </Link>

              <Link href="/kurs">
                <p className="tabs">Kurs</p>
              </Link>
              <Link href="/about">
                <p className="tabs">Om meg</p>
              </Link>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 6rem;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5rem;
          position: fixed;
          width: 100%;
          grid-area: head;
          z-index: 1000;
          grid-area: header;
          border-bottom: 1px solid #cccccc6c;
        }
        .logoContainer {
          height: 3rem;
          width: 13.5rem;
          position: relative;
        }
        .sidebar-container {
          position: absolute;
          background-color: #959595;
          left: 0;
          width: 10rem;
          height: 80vh;
          top: 6rem;
          padding-left: 1rem;
          left: -10rem;
          z-index: 100;
        }
        .sidebar-open {
          animation: slide 0.3s forwards;
        }
        .sidebar-close {
          animation: slideClose 0.5s forwards;
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(10rem);
          }
        }
        @keyframes slideClose {
          0% {
            transform: translateX(10rem);
          }
          100% {
            transform: translateX(-10rem);
          }
        }
        .tabs {
          text-transform: uppercase;
          transition: 0.5s;
          color: var(--start-page-yellow);
          font-size: 1rem;
          font-weight: 100;
        }
        .tabs-mobile {
          text-transform: uppercase;
          font-size: 1.2rem;
          color: var(--start-page-yellow);
        }
        .tabs:hover {
          cursor: pointer;
          color: #747474;
        }
        .tabContainer {
          width: 45rem;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        @media screen and (max-width: 1000px) {
          .container {
            padding: 0 1rem;
          }
          .tabContainer {
            justify-content: flex-end;
          }
        }
        @media screen and (max-width: 650px) {
          .logoContainer {
            width: 40rem;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderComponent;
