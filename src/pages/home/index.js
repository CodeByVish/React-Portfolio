import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          />
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>

                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>

                <p className="mb-1x">{introdata.description}</p>

                <div className="intro_btn-action pb-5">
                  <Link to="/about" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      About me
                      <div className="ring one" />
                      <div className="ring two" />
                      <div className="ring three" />
                    </div>
                  </Link>

                  {/* Download CV — served from /public */}
                  <a
                    href="/Vishakha_Maheshwari_CV.pdf"
                    download="Vishakha_Maheshwari_CV.pdf"
                    aria-label="Download my CV (PDF)"
                    className="ac_btn btn"
                    id="button_h"
                  >
                    Download CV
                    <div className="ring one" />
                    <div className="ring two" />
                    <div className="ring three" />
                  </a>

                  {/*
                    If you ever host on GitHub Pages under a subpath,
                    swap the href above to:
                    href={`${process.env.PUBLIC_URL}/Vishakha_Maheshwari_CV.pdf`}
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
