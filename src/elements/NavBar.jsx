import React, { Component, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Asset13 from "./Asset13.svg";
import svg from "./Sem_titulo-1.svg";
import instagramLogo from "./instagram-logo.svg";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
  const navigate = useNavigate();
  let location = useLocation();

  const handleAdressHome = () => {
    navigate("/");
  };

  const greenBarAnimation = {
    hover: {
      scaleX: 0,
    },
    transition: {
      duration: 100,
      type: "tween",
      ease: "easeIn",
    },
    rest: {
      scaleX: 1,
    },
    transition: {
      duration: 100,
      type: "tween",
      ease: "easeIn",
    },
  };

  return (
    <>
    <AnimatePresence>
      {location.pathname != '/' && (
         <motion.a className="logo-corner" onClick={handleAdressHome}
         initial={{
           x:'-30vw'
         }}
         animate={{
           x:0,
           transition: {
             delay:0.2,
             duration: 0.6,
           },
         }}
         exit={{
           x:'-30vw',
           transition: {
             duration: 0.4,
             ease:'easeInOut'
           },
         }}>
           <img
             src={Asset13}
           ></img>
         </motion.a>
      )}
    </AnimatePresence>
      <div
        className="upper-navbar"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <a
          style={{
            textDecoration: "underline",
            fontSize: "1.4em",
            whiteSpace: "nowrap",
            marginRight: "2vh",
          }}
          className="green"
          href="google.com"
        >
          Start a project
        </a>
        <img
          src={svg}
          style={{ height: "1.3em", transform: "translateY(10%)" }}
        />
      </div>
      <header className="header">
        {!(location.pathname == "/About") ? (
          <>
            <ul className="navBar">
              <li>
                <a onClick={() => navigate("/About")}>About</a>
              </li>
              <li>
                <a onClick={() => navigate("/Projects")}>Projects</a>
              </li>
              <motion.li
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <motion.div
                  variants={greenBarAnimation}
                  style={{
                    backgroundColor: "rgba(77, 255, 92,0.8)",
                    width: "110%",
                    height: "2px",
                    position: "absolute",
                    top: "50%",
                    transform: "translate(-5% ,0)",
                  }}
                ></motion.div>
                <a onClick={() => navigate("/Store")}>Store</a>
              </motion.li>
              <li style={{ margin: 0, transform: "translateY(10%)" }}>
                <a href="https://www.linkedin.com/company/hiro-films">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="2vh"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li style={{ margin: "0.8em", transform: "translateY(10%)" }}>
                <a href="https://www.instagram.com/hirofilm.co/">
                  <img
                    style={{ color: "white", height: "2vh" }}
                    src={instagramLogo}
                  ></img>
                </a>
              </li>
              <li style={{ margin: 0, transform: "translateY(10%)" }}>
                <a href="https://www.linkedin.com/in/gabrielsumiya/?originalSubdomain=br">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FFFFFFFF"
                      d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </>
        ) : (
          <></>
        )}
      </header>
    </>
  );
}
