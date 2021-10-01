import React from "react";
import LogoComponent from "../common/LogoComponent";
import ButtonComponent from "./ButtonComponent";
import { IoIosSchool } from "react-icons/io";
import { GoInfo } from "react-icons/go";
import { MdComputer } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import logo from "../../../assets/ktl_design logo.png";
import Image from "next/image";

const StartPage = () => {
  return (
    <>
      <div className="container">
        <div className="name-container">
          <p className="name">KJETIL ØVERBY</p>
        </div>
        <div className="header-container">
          <p className="explore">EXPLORE</p>
          <h1 className="header">
            KTL<span>DESIGN</span>
          </h1>
        </div>
        <div className="btn-container">
          <ButtonComponent
            header="PROSJEKTER"
            icon={
              <MdComputer
                style={{
                  fontSize: "4rem",
                  color: "var(--frontpagetext)",
                }}
              />
            }
            goto="/prosjekter"
          />

          <ButtonComponent
            header="CV"
            icon={
              <RiFilePaper2Line
                style={{ fontSize: "3.5rem", color: "var(--frontpagetext)" }}
              />
            }
            goto="/cv"
          />
          <ButtonComponent
            header="KURS"
            icon={
              <IoIosSchool
                style={{ fontSize: "4rem", color: "var(--frontpagetext)" }}
              />
            }
            goto="/kurs"
          />
          <ButtonComponent
            header="OM MEG"
            icon={
              <GoInfo
                style={{ fontSize: "3.5rem", color: "var(--frontpagetext)" }}
              />
            }
            goto="/about"
          />
        </div>
        <div className="logo-container">
          {/* <LogoComponent /> */}
          <Image src={logo} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-rows: 12rem 30rem auto 1fr;
            min-height: 100vh;
            padding: 5rem;
            place-items: center;
          }
          .btn-container {
            display: flex;
            justify-content: flex-end;
            width: 40rem;
            margin-top: 5rem;
          }
          .header {
            font-size: 6rem;
            color: var(--frontpagetext);
            font-weight: 200;
          }
          .header-container {
            display: grid;
            place-items: center;
          }
          .logo-container {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            height: 100%;
            width: 15rem;
          }
          .explore {
            font-size: 1.5rem;
            letter-spacing: 2.5rem;
            padding-left: 2.5rem;
          }
          .name {
            color: var(--frontpagetext);
            font-weight: 100;
          }
          .name-container {
            height: 100%;
          }
          span {
            color: red;
          }
          @media screen and (max-width: 2100px) {
            .container {
              grid-template-rows: 12rem auto auto 1fr;
            }
          }
          @media screen and (max-width: 750px) {
            .btn-container {
              flex-direction: column;
              width: auto;
              margin-bottom: 5rem;
            }
            .container {
              display: grid;
              grid-template-rows: 6rem 0rem auto 1fr;
              min-height: 100vh;
              padding: 5rem;
              place-items: center;
              padding: 5rem 0;
            }
            .header {
              font-size: 3rem;
            }
            .explore {
              font-size: 1rem;
              margin-bottom: 0;
              letter-spacing: 1.95rem;
              padding-left: 1.95rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPage;
