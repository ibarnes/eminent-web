import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import HeroElements from "../../assets/images/hero_elements.png";
import HeroNoiseCircles from "../../assets/images/noise-circles-hero.png";

import PhotoAI from "../../assets/images/photo-ai.png";
import PhotoTeam from "../../assets/images/photo-team.png";
import NoiseCirclesTeam from "../../assets/images/noise-circles-team.png";

import ProductsGradient from "../../assets/images/products-gradient.png";
import StayUpdatedGradient from "../../assets/images/stay-updated-gradient.png";

import DataProtection from "../../assets/images/data-protection.png";
import QuickConnectivity from "../../assets/images/quick-connectivity.png";
import WorksSeamlessly from "../../assets/images/works-seamlessly.png";
import WorldPic from "../../assets/images/world-pic2.png";
// import WorldPicNoise from "../../assets/images/world-pic-noise.png";

import Medium from "../../assets/images/medium.png";
import FastCompany from "../../assets/images/fast-company.png";
import Wired from "../../assets/images/wired.png";
import WSJ from "../../assets/images/wsj.png";
import CNET from "../../assets/images/cnet.png";
import TechCrunch from "../../assets/images/tech-crunch.png";
import Verge from "../../assets/images/verge.png";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as FooterLogo } from "../../assets/images/logo.svg";

const HomeContent = ({}) => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://js.hsforms.net/forms/v2.js";
  //   document.body.appendChild(script);

  //   script.addEventListener("load", () => {
  //     if (!document.querySelector(hs_email)) {
  //       if (window.hbspt) {
  //         window.hbspt.forms.create({
  //           region: "na1",
  //           portalId: "5233745",
  //           formId: "7407c046-4267-4084-82d8-9aa72eb964d5",
  //           target: "#hubspotForm1",
  //         });
  //         window.hbspt.forms.create({
  //           region: "na1",
  //           portalId: "5233745",
  //           formId: "7407c046-4267-4084-82d8-9aa72eb964d5",
  //           target: "#hubspotForm2",
  //         });
  //       }
  //     }
  //   });
  // }, []);
  const onScheduleClickHandler = (e) => {
    document.getElementById("ScheduleBtn").click();
  };

  return (
    <Box className="home-page">
      <Box className="hero-section">
        <Box className="d-flex">
          <Container maxWidth="md">
            <Box className="hero-text-section">
              <Box className="hero-heading-box">
                <Typography className="hero-heading">
                  {/* HIGH QUALITY APPS & */}
                  We make building federal software so easy, anyone on
                </Typography>
                <Typography className="hero-heading eminent-green">
                  your team can do it
                </Typography>
              </Box>
              <Box className="hero-text-box">
                <Typography className="hero-text">
                  Your vision. Your software. We just build it.
                  <span className="hero-text-bold">
                    <ul>
                      <li>No tech knowledge needed</li>
                      <li>You own the software and code</li>
                      <li>Free prototype to use the software earlier</li>
                    </ul>
                  </span>
                </Typography>
              </Box>
              <Button
                variant="outlined"
                className="learn-more-btn"
                onClick={onScheduleClickHandler}
              >
                Schedule a Demo
              </Button>
            </Box>
          </Container>
          <Box className="hero-images-section">
            <Box></Box>
            <img src={HeroElements} alt="hero-elements" />
            <img
              src={HeroNoiseCircles}
              alt="noise"
              className="hero-noise-circles"
            />
            <Box></Box>
          </Box>
        </Box>
      </Box>

      {/* <!---Main Products Section---!> */}

      <Box className="main-products">
        <img
          src={ProductsGradient}
          alt="products-gradient"
          className="products-gradient"
        />
        <Container maxWidth="xl">
          <Box className="main-products-heading-section">
            <Box className="main-products-heading-box">
              <Typography className="main-products-large-heading">
                Federal software made
              </Typography>
              &nbsp;&nbsp;
              <Typography className="main-products-large-heading eminent-green">
                Easy with AI
              </Typography>
            </Box>
          </Box>
          <Box className="main-products-section">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="main-products-icon-section">
                  <svg
                    width="46"
                    height="42"
                    viewBox="0 0 46 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.5556 0H3.44444C2.53092 0 1.65481 0.355579 1.00885 0.988514C0.362896 1.62145 0 2.47989 0 3.375V23.625C0 24.5201 0.362896 25.3785 1.00885 26.0115C1.65481 26.6444 2.53092 27 3.44444 27H27.5556C29.45 27 31 25.4813 31 23.625V3.375C31 2.47989 30.6371 1.62145 29.9911 0.988514C29.3452 0.355579 28.4691 0 27.5556 0ZM27.5556 23.625H3.44444V6.75H27.5556V23.625Z"
                      fill="url(#paint0_linear_0_1)"
                    />
                    <rect
                      x="16"
                      y="14"
                      width="29"
                      height="27"
                      rx="4"
                      stroke="#6D65F0"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_1"
                        x1="5.5"
                        y1="6.5"
                        x2="23.3133"
                        y2="22.2116"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#817AFF" />
                        <stop offset="1" stopColor="#323232" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>

                <Box className="main-products-text-section">
                  <Typography className="main-products-heading">
                    An almost 0% failure rate
                  </Typography>
                  <Typography className="main-products-text">
                    <br /> Drag & drop app and website
                    <br /> tools are prone to faults.
                    <br /> Hiring an agency will leave
                    <br /> your project open to human
                    <br /> error and roadblocks that
                    <br /> are impossible to predict.
                    <br /> We combine the best of both
                    <br /> worlds to ensure a low failure
                    <br /> rate.
                  </Typography>
                  <Typography className="get-started-text">
                    <Link to="/eminent-apps"> Get Started → </Link>
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box className="main-products-icon-section">
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="40"
                      rx="4"
                      fill="url(#paint0_linear_0_1)"
                    />
                    <rect
                      x="28"
                      y="16"
                      width="13"
                      height="24"
                      rx="2"
                      fill="url(#paint1_linear_0_1)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_1"
                        x1="4.5"
                        y1="1.5"
                        x2="18"
                        y2="41"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4AE099" />
                        <stop offset="1" stopColor="#323232" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_0_1"
                        x1="30.4375"
                        y1="16.9"
                        x2="39.2017"
                        y2="40.0504"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4AE099" />
                        <stop offset="1" stopColor="#323232" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
                <Box className="main-products-text-section">
                  <Typography className="main-products-heading">
                    Firm-fixed prices & guaranteed delivery
                  </Typography>
                  <Typography className="main-products-text">
                    Eminent uses human-assisted
                    <br /> artificial intelligence (AI).,
                    <br /> to accurately calculate your
                    <br /> price. So you know exactly
                    <br /> what you’re paying for. This
                    <br /> means you get a fixed price
                    <br /> for your project a set timeline
                    <br /> and no headaches.
                  </Typography>
                  <Typography className="get-started-text">
                    <Link to="/eminent-apps"> Get Started → </Link>
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box className="main-products-icon-section">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.8947 4.21053C37.8947 1.89474 36 0 33.6842 0H14.7368V10.5263H37.8947V4.21053ZM0 33.6842C0 36 1.89474 37.8947 4.21053 37.8947H10.5263V14.7368H0V33.6842ZM0 4.21053V10.5263H10.5263V0H4.21053C1.89474 0 0 1.89474 0 4.21053ZM31.5789 12.6316L23.1579 21.0526H29.4737V25.2632C29.4737 27.5789 27.5789 29.4737 25.2632 29.4737H21.0526V23.1579L12.6316 31.5789L21.0526 40V33.6842H25.2632C29.9158 33.6842 33.6842 29.9158 33.6842 25.2632V21.0526H40L31.5789 12.6316Z"
                      fill="url(#paint0_linear_0_336)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_336"
                        x1="5"
                        y1="10"
                        x2="34.4444"
                        y2="36.1111"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#82D6EE" />
                        <stop offset="1" stopColor="#323232" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
                <Box className="main-products-text-section">
                  <Typography className="main-products-heading">
                    6x faster and 70% cheaper
                  </Typography>
                  <Typography className="main-products-text">
                    <br /> Our AI uses reusable Lego-like
                    <br /> blocks to quickly build the framework
                    <br /> of your app. Then, our team
                    <br /> personalizes it and codes your
                    <br /> unique features. Meaning we can
                    <br /> make your software 6x faster and
                    <br /> 70% cheaper than traditional contractors.
                  </Typography>
                  <Typography className="get-started-text">
                    <Link to="/eminent-apps"> Get Started → </Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box className="process-section">
        <Box className="process-heading-box">
          <Typography className="process-heading">
            Let US make this process
          </Typography>
          &nbsp;&nbsp;
          <Typography className="process-heading eminent-green">
            Easy for You
          </Typography>
        </Box>
        <Box className="process-text-section">
          <Typography className="process-text">
            <br /> Creating the software your enterprise needs to stay
            competitive can be a headache.
            <br /> Would it help if you could get a fully custom solution
            without the usual wait?
            <br /> And how about if there was no need to learn a new platform or
            even manage the
            <br /> project at all? Where everything is transparent, estimates
            are accurate and prices
            <br /> are guaranteed? It’s all possible thanks to AI.
          </Typography>
        </Box>
        <Button className="process-demo-btn">
          {" "}
          <Link to="/services">Book Demo</Link>
        </Button>
      </Box>

      <Box className="eminent-services-section">
        <Grid container>
          <Grid item md={3}>
            <Box className="services-photo-section services-ai-section">
              <img src={PhotoAI} alt="photo-ai" />
              <img
                src={NoiseCirclesTeam}
                alt="noise-circles-team"
                className="noise-circles-ai"
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className="services-text-section">
              <Typography className="services-heading">
                Realize your vision
              </Typography>
              <Typography className="services-text">
                <br /> We bring your idea to life. Our powerful AI,
                high-capacity network and team
                <br /> of experts all work together to realize your vision
                faster. You get a custom
                <br /> enterprise application that scales with your business.
              </Typography>
            </Box>
            <Box className="all-services-section">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box className="service-box">
                    <Box className="service-icon">
                      <svg
                        width="19"
                        height="34"
                        viewBox="0 0 19 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.7785 0H4.2173C1.88796 0 0 0 0 2.13079V31.9619C0 34.3462 1.89007 33.9797 4.2173 33.9797H14.7785C17.1078 33.9797 19 34.3462 19 31.9619V2.13079C19 0 17.1078 0 14.7785 0ZM10.8167 32.3625H8.21918V29.4326H10.8167V32.3625ZM16.9663 27.7003H2.10548V2.13079H16.9663V27.7003Z"
                          fill="url(#paint0_linear_0_299)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_299"
                            x1="9.5"
                            y1="0"
                            x2="9.5"
                            y2="34"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#49DD97" />
                            <stop offset="1" stopColor="#2C2C2C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Box>
                    <Typography className="service-name">
                      Rebranded Websites & Mobile Apps
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box className="service-box">
                    <Box className="service-icon">
                      <svg
                        width="31"
                        height="27"
                        viewBox="0 0 31 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6587 13.7078C13.3122 13.6921 12.9656 13.6765 12.6032 13.6765C8.79075 13.6765 5.23034 14.7237 2.18981 16.5212C0.803456 17.334 0 18.8658 0 20.4757V23.0547C0 23.9143 0.708932 24.6177 1.5754 24.6177H14.5882C13.4755 23.0428 12.8033 21.2036 12.64 19.2871C12.4767 17.3707 12.8282 15.4456 13.6587 13.7078Z"
                          fill="url(#paint0_linear_0_292)"
                        />
                        <path
                          d="M12.3088 12.7647C15.5819 12.7647 18.2353 9.90723 18.2353 6.38235C18.2353 2.85748 15.5819 0 12.3088 0C9.03573 0 6.38235 2.85748 6.38235 6.38235C6.38235 9.90723 9.03573 12.7647 12.3088 12.7647Z"
                          fill="url(#paint1_linear_0_292)"
                        />
                        <path
                          d="M29.5243 18.6912C29.5243 18.3495 29.4776 18.0389 29.4309 17.7127L30.7377 16.5789C31.0177 16.3304 31.08 15.9266 30.8933 15.6005L29.9754 14.0163C29.8875 13.8603 29.7471 13.7404 29.5791 13.6779C29.4111 13.6154 29.2263 13.6142 29.0575 13.6746L27.4085 14.2337C26.9106 13.8144 26.3506 13.4883 25.7283 13.2553L25.386 11.5624C25.3494 11.3874 25.2537 11.2303 25.115 11.1172C24.9762 11.0041 24.8028 10.942 24.6237 10.9412H22.788C22.4146 10.9412 22.1035 11.2052 22.0257 11.5624L21.6834 13.2553C21.0612 13.4883 20.5011 13.8144 20.0033 14.2337L18.3542 13.6746C18.1853 13.6167 18.0014 13.6191 17.834 13.6814C17.6666 13.7437 17.5261 13.8621 17.4363 14.0163L16.5185 15.6005C16.3318 15.9266 16.394 16.3304 16.674 16.5789L17.9808 17.7127C17.9342 18.0389 17.8875 18.3495 17.8875 18.6912C17.8875 19.0328 17.9342 19.3435 17.9808 19.6696L16.674 20.8034C16.394 21.0519 16.3318 21.4557 16.5185 21.7818L17.4363 23.366C17.623 23.6922 18.012 23.8319 18.3542 23.7077L20.0033 23.1486C20.5011 23.5679 21.0612 23.8941 21.6834 24.127L22.0257 25.8199C22.1035 26.1771 22.4146 26.4412 22.788 26.4412H24.6237C24.9971 26.4412 25.3083 26.1771 25.386 25.8199L25.7283 24.127C26.3506 23.8941 26.9106 23.5679 27.4085 23.1486L29.0575 23.7077C29.4154 23.8319 29.7887 23.6766 29.9754 23.366L30.8933 21.7818C31.08 21.4557 31.0177 21.0519 30.7377 20.8034L29.4309 19.6696C29.4776 19.3435 29.5243 19.0328 29.5243 18.6912ZM23.6903 21.7974C21.979 21.7974 20.5789 20.3996 20.5789 18.6912C20.5789 16.9827 21.979 15.5849 23.6903 15.5849C25.4016 15.5849 26.8018 16.9827 26.8018 18.6912C26.8018 20.3996 25.4016 21.7974 23.6903 21.7974Z"
                          fill="url(#paint2_linear_0_292)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_292"
                            x1="7.29412"
                            y1="13.6765"
                            x2="7.29412"
                            y2="24.6177"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#807AFF" />
                            <stop offset="1" stopColor="#2C2D2C" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_0_292"
                            x1="12.3088"
                            y1="0"
                            x2="12.3088"
                            y2="12.7647"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#807AFF" />
                            <stop offset="1" stopColor="#2C2D2C" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_0_292"
                            x1="23.7059"
                            y1="10.9412"
                            x2="23.7059"
                            y2="26.4412"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#807AFF" />
                            <stop offset="1" stopColor="#2C2D2C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Box>
                    <Typography className="service-name">
                      Personalization and Targeting
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box className="service-box">
                    <Box className="service-icon">
                      <svg
                        width="29"
                        height="27"
                        viewBox="0 0 29 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4965 13.178V25.3353M14.4965 13.178L11.1195 15.8796M14.4965 13.178L17.8735 15.8796M5.08676 9.28362C3.80918 9.6051 2.69296 10.382 1.94782 11.4685C1.20268 12.5549 0.879912 13.876 1.04015 15.1837C1.20039 16.4913 1.83261 17.6954 2.81803 18.5698C3.80345 19.4441 5.07424 19.9286 6.39164 19.932H7.74245M19.6701 6.61037C19.2084 4.78215 18.0688 3.19788 16.4824 2.17872C14.8959 1.15955 12.9813 0.781755 11.1266 1.12191C9.27189 1.46206 7.61594 2.49471 6.49439 4.01052C5.37285 5.52634 4.86964 7.4119 5.08677 9.28498C5.08677 9.28498 5.29344 10.4764 5.71624 11.1518M19.6701 6.61037C20.5975 6.38785 21.5615 6.36426 22.4987 6.54116C23.4359 6.71806 24.325 7.09143 25.1074 7.6367C25.8899 8.18197 26.548 8.88678 27.0385 9.70473C27.5289 10.5227 27.8406 11.4352 27.953 12.3823C28.0653 13.3294 27.9758 14.2895 27.6904 15.1995C27.4049 16.1095 26.93 16.9488 26.2968 17.662C25.6636 18.3752 24.8866 18.9462 24.0168 19.3375C23.1471 19.7288 22.2043 19.9314 21.2506 19.9321M19.6701 6.61037L17.8735 7.09937"
                          stroke="url(#paint0_linear_0_288)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_288"
                            x1="9"
                            y1="1"
                            x2="16"
                            y2="23.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#82D6EE" />
                            <stop offset="1" stopColor="#2C2C2C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Box>
                    <Typography className="service-name">
                      FEDRAMP Cloud Infrastructure
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box className="service-box">
                    <Box className="service-icon">
                      <svg
                        width="26"
                        height="24"
                        viewBox="0 0 26 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2 18.8001H14.3V13.6001H11.7V18.8001H7.8V20.1001H0V22.7001H7.8V24.0001H18.2V22.7001H26V20.1001H18.2V18.8001Z"
                          fill="url(#paint0_linear_0_283)"
                        />
                        <path
                          d="M20.8 13.6001C21.1448 13.6001 21.4754 13.4631 21.7192 13.2193C21.963 12.9755 22.1 12.6449 22.1 12.3001V3.2001C22.1 2.85532 21.963 2.52466 21.7192 2.28086C21.4754 2.03706 21.1448 1.9001 20.8 1.9001H13L11.7 0.600098H5.2C4.85522 0.600098 4.52456 0.737062 4.28076 0.980859C4.03696 1.22466 3.9 1.55532 3.9 1.9001V12.3001C3.9 12.6449 4.03696 12.9755 4.28076 13.2193C4.52456 13.4631 4.85522 13.6001 5.2 13.6001H20.8Z"
                          fill="url(#paint1_linear_0_283)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_283"
                            x1="4"
                            y1="2.5"
                            x2="6.5"
                            y2="25"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3CF7A2" />
                            <stop
                              offset="1"
                              stopColor="#3CF7A2"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_0_283"
                            x1="4"
                            y1="2.5"
                            x2="6.5"
                            y2="25"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3CF7A2" />
                            <stop
                              offset="1"
                              stopColor="#3CF7A2"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Box>
                    <Typography className="service-name">
                      508 Content Management
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box className="service-box">
                    <Box className="service-icon">
                      <svg
                        width="31"
                        height="29"
                        viewBox="0 0 31 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.97515 0C3.65566 0 2.39021 0.524166 1.45719 1.45719C0.524166 2.39021 0 3.65566 0 4.97515V20.3493C0 21.6687 0.524166 22.9342 1.45719 23.8672C2.39021 24.8002 3.65566 25.3244 4.97515 25.3244H15.622C15.6835 25.1797 15.7558 25.0349 15.8354 24.8956L17.1561 22.6125H4.97515C3.72684 22.6125 2.71372 21.5994 2.71372 20.3511V7.23658H22.6089V9.31709C23.4489 8.86844 24.373 8.59922 25.3226 8.52649V4.97515C25.3226 3.65566 24.7984 2.39021 23.8654 1.45719C22.9324 0.524166 21.6669 0 20.3474 0H4.97515Z"
                          fill="url(#paint0_linear_0_274)"
                        />
                        <path
                          d="M21.7495 18.2723C21.1651 17.4566 20.8381 16.4847 20.8105 15.4816C20.7829 14.4785 21.056 13.4901 21.5947 12.6435C22.1334 11.7968 22.913 11.1307 23.8333 10.7307C24.7536 10.3307 25.7726 10.2152 26.7591 10.399L24.3873 14.5057C24.1774 14.89 24.1261 15.3411 24.2444 15.7627C24.3627 16.1842 24.6412 16.5428 25.0204 16.7618C25.3995 16.9808 25.8493 17.0428 26.2736 16.9346C26.6978 16.8264 27.063 16.5566 27.2909 16.1828L29.6609 12.076C30.3105 12.836 30.7188 13.7724 30.8338 14.7655C30.9487 15.7587 30.7651 16.7635 30.3063 17.6518C29.8475 18.5401 29.1344 19.2715 28.2579 19.7526C27.3815 20.2337 26.3816 20.4427 25.3859 20.3529L21.0313 27.897C20.7533 28.3782 20.2954 28.7293 19.7585 28.873C19.2216 29.0167 18.6496 28.9412 18.1683 28.6632C17.6871 28.3851 17.336 27.9273 17.1923 27.3904C17.0486 26.8534 17.1241 26.2815 17.4022 25.8002L21.7495 18.2723Z"
                          fill="url(#paint1_linear_0_274)"
                        />
                        <path
                          d="M19.1082 16.5447C18.8806 15.2813 19.0148 13.9793 19.4954 12.7889L16.0182 9.30989C15.8483 9.14004 15.618 9.04462 15.3778 9.04462C15.1375 9.04462 14.9072 9.14004 14.7373 9.30989C14.5675 9.47975 14.472 9.71012 14.472 9.95033C14.472 10.1905 14.5675 10.4209 14.7373 10.5908L18.6216 14.4732L14.7373 18.3556C14.5675 18.5255 14.472 18.7558 14.472 18.9961C14.472 19.2363 14.5675 19.4666 14.7373 19.6365C14.9072 19.8063 15.1375 19.9018 15.3778 19.9018C15.618 19.9018 15.8483 19.8063 16.0182 19.6365L19.1082 16.5447Z"
                          fill="url(#paint2_linear_0_274)"
                        />
                        <path
                          d="M11.4953 9.30982C11.5795 9.39385 11.6463 9.49367 11.6919 9.60356C11.7375 9.71346 11.761 9.83127 11.761 9.95026C11.761 10.0692 11.7375 10.1871 11.6919 10.2969C11.6463 10.4068 11.5795 10.5067 11.4953 10.5907L7.61103 14.4731L11.4953 18.3555C11.6651 18.5254 11.7605 18.7558 11.7605 18.996C11.7605 19.2362 11.6651 19.4666 11.4953 19.6364C11.3254 19.8063 11.095 19.9017 10.8548 19.9017C10.6146 19.9017 10.3842 19.8063 10.2144 19.6364L5.69153 15.1136C5.60729 15.0295 5.54046 14.9297 5.49486 14.8198C5.44925 14.7099 5.42578 14.5921 5.42578 14.4731C5.42578 14.3541 5.44925 14.2363 5.49486 14.1264C5.54046 14.0165 5.60729 13.9167 5.69153 13.8327L10.2144 9.30982C10.2984 9.22558 10.3982 9.15874 10.5081 9.11314C10.618 9.06754 10.7358 9.04407 10.8548 9.04407C10.9738 9.04407 11.0916 9.06754 11.2015 9.11314C11.3114 9.15874 11.4112 9.22558 11.4953 9.30982Z"
                          fill="url(#paint3_linear_0_274)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_274"
                            x1="12.6613"
                            y1="0"
                            x2="12.6613"
                            y2="25.3244"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7974EF" />
                            <stop offset="1" stopColor="#282828" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_0_274"
                            x1="23.9941"
                            y1="10.3139"
                            x2="23.9941"
                            y2="28.9443"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7974EF" />
                            <stop offset="1" stopColor="#282828" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_0_274"
                            x1="16.9837"
                            y1="9.04462"
                            x2="16.9837"
                            y2="19.9018"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7974EF" />
                            <stop offset="1" stopColor="#282828" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_0_274"
                            x1="8.5934"
                            y1="9.04407"
                            x2="8.5934"
                            y2="19.9017"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7974EF" />
                            <stop offset="1" stopColor="#282828" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Box>
                    <Typography className="service-name">
                      Analytics and Optimization
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box className="service-box">
                    <Box className="service-icon">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.9419 14.0786C29.4685 6.24977 22.9989 0.0487896 15.0755 0H14.9002C12.0984 0.0187652 9.48134 0.796585 7.24481 2.15425C5.17746 3.40476 3.44104 5.13481 2.18217 7.19835C0.752131 9.54969 -0.00289491 12.25 8.34127e-06 15.0028C8.34127e-06 15.3153 0.015006 15.6286 0.0290663 15.9364C0.185604 18.4434 0.947672 20.7788 2.18217 22.8017C3.43363 24.8621 5.15915 26.5932 7.21482 27.8504C9.53029 29.2395 12.1755 29.9818 14.8749 30H15.0998C23.0289 29.9465 29.4676 23.7596 29.9616 15.9411C29.9756 15.638 30 15.3209 30 15.0225C30 14.7185 30 14.4023 29.9747 14.103L29.9456 14.0739L29.9419 14.0786ZM15.0023 19.5571V24.346C15.1195 27.2734 14.29 27.7613 13.2889 27.8054C13.2448 27.8054 13.2054 27.8101 13.1614 27.8101C7.46978 27.0041 2.96767 22.4883 2.18217 16.7761C2.10176 16.1865 2.06074 15.5922 2.05937 14.9972C2.05937 14.3967 2.10437 13.8047 2.18217 13.2229C2.96298 7.52111 7.45478 3.00432 13.1483 2.18897L13.2898 2.20398C14.2909 2.25652 15.1205 2.74066 15.0033 5.65772V10.4466C14.9883 12.417 16.1206 14.2935 17.3214 15.0019C16.1206 15.7046 14.9883 17.3475 15.0033 19.5515L15.0023 19.5571Z"
                          fill="url(#paint0_linear_0_270)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_270"
                            x1="15"
                            y1="0"
                            x2="15"
                            y2="30"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#81D5ED" />
                            <stop offset="1" stopColor="#282828" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Box>
                    <Typography className="service-name">
                      Machine Learning & AI
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box className="service-box">
                    <Box className="service-icon">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.42105 23.6122L15 29L24.5789 23.6115M26.7895 20.1579V9.10526L17.5789 3.92452M26.7895 20.1579C25.5686 20.1579 24.5789 21.1476 24.5789 22.3684C24.5789 23.5893 25.5686 24.5789 26.7895 24.5789C28.0103 24.5789 29 23.5893 29 22.3684C29 21.1476 28.0103 20.1579 26.7895 20.1579ZM12.4211 3.92452L3.21053 9.10526V20.1579M3.21053 20.1579C1.98969 20.1579 1 21.1476 1 22.3684C1 23.5893 1.98969 24.5789 3.21053 24.5789C4.43137 24.5789 5.42105 23.5893 5.42105 22.3684C5.42105 21.1476 4.43137 20.1579 3.21053 20.1579ZM15 10.5789V5.42105M15 10.5789L10.5789 13.1579V18.3158L15 20.8947L19.4211 18.3158V13.1579L15 10.5789ZM15 5.42105C16.2208 5.42105 17.2105 4.43137 17.2105 3.21053C17.2105 1.98969 16.2208 1 15 1C13.7792 1 12.7895 1.98969 12.7895 3.21053C12.7895 4.43137 13.7792 5.42105 15 5.42105ZM19.4211 17.9474L24.5789 20.8947M10.5789 17.9474L5.42105 20.8947"
                          stroke="url(#paint0_linear_0_266)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_266"
                            x1="8"
                            y1="1"
                            x2="13"
                            y2="27.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3AE899" />
                            <stop offset="1" stopColor="#282828" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Box>
                    <Typography className="service-name">
                      Social Media Management
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box className="service-box">
                    <Box className="service-icon">
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.9722 4.47222L22.5278 10.0278M13.5 7.94444L6.55556 1L1 6.55556L7.94444 13.5M6.55556 7.94444L4.47222 10.0278M19.0556 13.5L26 20.4444L20.4444 26L13.5 19.0556M19.0556 20.4444L16.9722 22.5278M1 26H6.55556L24.6111 7.94444C25.3478 7.20773 25.7617 6.20853 25.7617 5.16666C25.7617 4.12479 25.3478 3.1256 24.6111 2.38888C23.8744 1.65217 22.8752 1.23829 21.8333 1.23829C20.7915 1.23829 19.7923 1.65217 19.0556 2.38888L1 20.4444V26Z"
                          stroke="url(#paint0_linear_0_261)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_261"
                            x1="4"
                            y1="0.999999"
                            x2="15.5"
                            y2="28"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#736FE2" />
                            <stop offset="1" stopColor="#282828" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Box>
                    <Typography className="service-name">
                      Agile Development
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box className="text-center">
                <Button className="more-services-btn">
                  <Link to="/services"> See more about Services </Link>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box className="services-photo-section text-end">
              <img src={PhotoTeam} alt="photo-team" />
              <img
                src={NoiseCirclesTeam}
                alt="noise-circles-team"
                className="noise-circles-team"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box className="suite-section">
          <Typography className="suite-heading eminent-green">
            Eminent Future
          </Typography>
          <Typography className="suite-subheading">
            <br /> A platform on top of platforms, offering non-technical
            federal employees
            <br /> the means for building attractive, federal software front
            ends quickly and simply,
            <br /> without having to recreate the business logic.
          </Typography>
          <Typography className="suite-text">
            Fastest way to launch federal grade software
          </Typography>
          <Button className="suite-demo-btn">
            <Link to="/services"> Book Demo </Link>
          </Button>
        </Box>
        <Box className="suite-overlay-section"></Box>
      </Box>

      <Box className="blogs-section">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <Box className="blog-item">
                <Box className="blog-image-section">
                  <img
                    src={DataProtection}
                    alt="data-protection"
                    className="blog-image"
                  />
                </Box>
                <Box className="blog-text-section">
                  <Typography className="blog-heading">
                    We do
                    <br /> things differently
                  </Typography>
                  <Typography className="blog-text">
                    <br /> The Pentagon sidestepped the
                    <br /> usual fight for approvals,
                    <br /> budget and IT resources. They
                    <br /> used our platform to create
                    <br /> an enterprise-grade ecommerce
                    <br /> solution together modernize their
                    <br /> global approach to recruiting.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item md={4} sm={6} xs={12}>
              <Box className="blog-item">
                <Box className="blog-image-section">
                  <img
                    src={QuickConnectivity}
                    alt="quick-connectivity"
                    className="blog-image"
                  />
                </Box>
                <Box className="blog-text-section">
                  <Typography className="blog-heading">
                    Transparency down to
                    <br /> the task level
                  </Typography>
                  <Typography className="blog-text">
                    <br /> Many contractors hit you with loose
                    <br /> estimates and timelines that never
                    <br /> feel right. With Eminent Future,
                    <br /> always know exactly what you’re
                    <br /> you’ll paying for and when it will
                    <br /> be delivered …all the way down to
                    <br /> the feature-level.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item md={4} sm={6} xs={12}>
              <Box className="blog-item">
                <Box className="blog-image-section">
                  <img
                    src={WorksSeamlessly}
                    alt="works-seamlessly"
                    className="blog-image"
                  />
                </Box>
                <Box className="blog-text-section">
                  <Typography className="blog-heading">
                    World-class Innovation
                    <br /> without the wait
                  </Typography>
                  <Typography className="blog-text">
                    Around 500 features make up
                    <br /> 80% of all software (features
                    <br /> that you use everyday, like login,
                    <br /> secure payments or shopping cart).
                    <br /> And we've coded those already. We
                    <br /> call them building blocks and you
                    <br /> can fit them together however you like.
                    <br /> What will we build for you?
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className="see-full-blog">
            <Typography className="see-full-blog-text eminent-green">
              <Link to="https://medium.com/eminentfuture">
                {" "}
                See Full Blog →{" "}
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" className="position-relative">
        <img
          src={StayUpdatedGradient}
          alt="stay-updated-gradient"
          className="stay-updated-gradient"
        />
        <Box className="stay-updated-section">
          <Container maxWidth="lg">
            <Typography className="stay-updated-heading">
              Start building
            </Typography>
            <Typography className="stay-updated-subheading">
              Don’t rely on internal resources, innovate today
            </Typography>
            <Box className="stay-updated-form" component="form">
              {/* <TextField
                variant="outlined"
                placeholder="Full Name"
                className="form-input-field"
              />
              <TextField
                variant="outlined"
                placeholder="Email"
                className="form-input-field"
              />
              <Button className="form-submit-btn">
                <Link to="/"> Submit → </Link>
              </Button> */}
              <div id="hubspotForm2"></div>
            </Box>
          </Container>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box className="team-section">
          <Box className="team-image-section">
            <img src={WorldPic} alt="world-pic" />
            {/* <img
              src={WorldPicNoise}
              alt="world-pic-noise"
              className="world-pic-noise"
            /> */}
          </Box>
          <Box className="team-text-section">
            <Typography className="team-heading">Eminent Future</Typography>
            <Typography className="team-subheading">
              Making building federal software as easy as ordering a new car
              {/* Buying personalized federal software as easy as purchasing <br /> plane tickets */}
            </Typography>
            <Button className="team-btn">
              <Link to="/Projects"> See More → </Link>
            </Button>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box className="media-press-box">
          <Box className="media-press-text-section">
            <Typography className="media-press-heading">
              Press & Media
            </Typography>
            <Typography className="media-press-text">
              Read our appearances in specialized Media and Blogs
            </Typography>
          </Box>
          <Box className="media-press-names-section">
            <img src={Medium} alt="medium" className="medium" />
            <img
              src={FastCompany}
              alt="fast company"
              className="fast-company"
            />
            <img src={Wired} alt="wired" className="wired" />
            <img src={WSJ} alt="wsj" className="wsj" />
            <img src={CNET} alt="cnet" className="cnet" />
            <img src={TechCrunch} alt="tech crunch" className="tech-crunch" />
            <img src={Verge} alt="the verge" className="the-verge" />
          </Box>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box className="footer-section">
          <Box className="footer-logo-section">
            {/* <img src={FooterLogo} alt="logo" className="footer-logo" /> */}
            <LogoSvg
              className="footerLogoSvg"
              $color={"#3cf7a2"}
              $show={true}
            />
          </Box>
          <Box className="trademark-section">
            <Typography className="trademark-text">
              © 2022 Eminent Future, LLC.
            </Typography>
          </Box>
          <Box className="footer-links-section">
            <Typography className="footer-link">Privacy & Legal</Typography>
            <Typography className="footer-link">
              <Link to="/eminent-apps">Solutions</Link>
            </Typography>
            <Typography className="footer-link">
              <Link to="/">Why Choose Us?</Link>
            </Typography>
            <Typography className="footer-link">
              <Link to="/services">Services</Link>
            </Typography>
            <Typography className="footer-link">
              <Link to="/projects">Project</Link>
            </Typography>
            <Typography className="footer-link">
              <Link to="/about">About</Link>
            </Typography>
          </Box>
          <Box className="footer-social-section">
            <Link
              to="//www.linkedin.com/company/eminent-future"
              target="_blank"
            >
              <Box>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.91038 5.82075C4.51773 5.82075 5.82075 4.51773 5.82075 2.91038C5.82075 1.30302 4.51773 0 2.91038 0C1.30302 0 0 1.30302 0 2.91038C0 4.51773 1.30302 5.82075 2.91038 5.82075Z"
                    fill="white"
                  />
                  <path
                    d="M8.56876 8.02551V24.1722H13.5821V16.1873C13.5821 14.0804 13.9785 12.0399 16.5909 12.0399C19.1674 12.0399 19.1994 14.4488 19.1994 16.3203V24.1736H24.2154V15.3187C24.2154 10.9691 23.2789 7.62646 18.1951 7.62646C15.7543 7.62646 14.1182 8.96593 13.4491 10.2336H13.3813V8.02551H8.56876ZM0.398956 8.02551H5.42029V24.1722H0.398956V8.02551Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Link>
            <Link to="//instagram.com/eminent.future" target="_blank">
              <Box>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7748 6.95669C21.7629 6.06097 21.5952 5.17414 21.2793 4.3359C21.0053 3.62884 20.5869 2.9867 20.0507 2.45052C19.5145 1.91433 18.8724 1.49589 18.1653 1.22192C17.3379 0.911305 16.4637 0.743347 15.58 0.725203C14.4423 0.674348 14.0816 0.660156 11.1935 0.660156C8.3054 0.660156 7.93522 0.660156 6.80577 0.725203C5.92251 0.74348 5.04874 0.911436 4.22164 1.22192C3.51447 1.4957 2.87224 1.91408 2.33603 2.45028C1.79982 2.98649 1.38144 3.62873 1.10767 4.3359C0.796425 5.16274 0.628831 6.03671 0.612128 6.92003C0.561273 8.05894 0.545898 8.41966 0.545898 11.3077C0.545898 14.1958 0.545898 14.5648 0.612128 15.6954C0.629868 16.5801 0.796624 17.4529 1.10767 18.2819C1.3819 18.9889 1.80059 19.6309 2.33698 20.1669C2.87337 20.7028 3.51566 21.121 4.22282 21.3947C5.04766 21.7178 5.92158 21.8978 6.80696 21.9269C7.94587 21.9778 8.30658 21.9932 11.1947 21.9932C14.0827 21.9932 14.4529 21.9932 15.5824 21.9269C16.466 21.9095 17.3402 21.742 18.1677 21.4314C18.8746 21.1571 19.5165 20.7386 20.0527 20.2024C20.5888 19.6663 21.0074 19.0243 21.2817 18.3174C21.5927 17.4896 21.7595 16.6167 21.7772 15.7309C21.8281 14.5932 21.8434 14.2325 21.8434 11.3432C21.8411 8.45514 21.8411 8.08851 21.7748 6.95669ZM11.1864 16.7693C8.16585 16.7693 5.7189 14.3224 5.7189 11.3018C5.7189 8.28128 8.16585 5.83434 11.1864 5.83434C12.6365 5.83434 14.0271 6.41038 15.0525 7.43573C16.0778 8.46108 16.6539 9.85176 16.6539 11.3018C16.6539 12.7519 16.0778 14.1426 15.0525 15.1679C14.0271 16.1933 12.6365 16.7693 11.1864 16.7693ZM16.8715 6.90702C16.704 6.90718 16.5382 6.87431 16.3834 6.81029C16.2287 6.74628 16.0881 6.65237 15.9696 6.53395C15.8512 6.41553 15.7573 6.27493 15.6933 6.12018C15.6293 5.96543 15.5964 5.79957 15.5966 5.6321C15.5966 5.46476 15.6295 5.29905 15.6936 5.14444C15.7576 4.98983 15.8515 4.84935 15.9698 4.73102C16.0881 4.61268 16.2286 4.51882 16.3832 4.45478C16.5378 4.39074 16.7035 4.35778 16.8709 4.35778C17.0382 4.35778 17.2039 4.39074 17.3586 4.45478C17.5132 4.51882 17.6536 4.61268 17.772 4.73102C17.8903 4.84935 17.9842 4.98983 18.0482 5.14444C18.1123 5.29905 18.1452 5.46476 18.1452 5.6321C18.1452 6.33697 17.5752 6.90702 16.8715 6.90702Z"
                    fill="white"
                  />
                  <path
                    d="M11.1864 14.8531C13.1479 14.8531 14.7379 13.263 14.7379 11.3016C14.7379 9.34009 13.1479 7.75 11.1864 7.75C9.22491 7.75 7.63483 9.34009 7.63483 11.3016C7.63483 13.263 9.22491 14.8531 11.1864 14.8531Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Link>
            <Link to="//www.twitter.com/Eminent_Future" target="_blank">
              <Box>
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3646 2.50131C22.533 2.86979 21.6397 3.11876 20.7006 3.2313C21.6696 2.65149 22.3945 1.73893 22.7402 0.663902C21.8298 1.20466 20.8334 1.58529 19.7943 1.78926C19.0956 1.0432 18.1701 0.548704 17.1615 0.382538C16.1529 0.216372 15.1177 0.387834 14.2166 0.870303C13.3154 1.35277 12.5988 2.11925 12.1779 3.05075C11.757 3.98224 11.6555 5.02664 11.889 6.02178C10.0443 5.92915 8.23966 5.44969 6.59226 4.61449C4.94486 3.7793 3.49148 2.60704 2.32645 1.1738C1.9281 1.86096 1.69904 2.65767 1.69904 3.50616C1.6986 4.27001 1.8867 5.02215 2.24666 5.69585C2.60662 6.36956 3.12731 6.94401 3.76252 7.36822C3.02584 7.34477 2.30541 7.14572 1.6612 6.78761V6.84737C1.66112 7.91868 2.0317 8.95703 2.71005 9.78623C3.3884 10.6154 4.33274 11.1844 5.38283 11.3966C4.69943 11.5815 3.98295 11.6088 3.28748 11.4763C3.58376 12.3981 4.16087 13.2041 4.93803 13.7817C5.7152 14.3592 6.6535 14.6792 7.62158 14.697C5.9782 15.987 3.94864 16.6868 1.85938 16.6837C1.48929 16.6838 1.11951 16.6622 0.751953 16.619C2.87267 17.9826 5.34134 18.7062 7.86259 18.7034C16.3973 18.7034 21.0631 11.6346 21.0631 5.50391C21.0631 5.30474 21.0581 5.10357 21.0491 4.90439C21.9567 4.24807 22.7401 3.43535 23.3626 2.5043L23.3646 2.50131Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Link>
            <Link
              to="//youtube.com/channel/UCk5Z41Z8QNyGUEkWAF4NA8A"
              target="_blank"
            >
              <Box>
                <svg
                  width="26"
                  height="19"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.08 4.19522C25.08 1.96872 23.4636 0.177625 21.4662 0.177625C18.7608 0.0494776 16.0017 0 13.182 0H12.303C9.49011 0 6.72609 0.0494778 4.02067 0.17812C2.02823 0.17812 0.411818 1.97911 0.411818 4.20562C0.289732 5.96653 0.237967 7.72794 0.240898 9.48935C0.236014 11.2508 0.29136 13.0138 0.406934 14.7785C0.406934 17.005 2.02335 18.811 4.01579 18.811C6.85794 18.9446 9.77335 19.0039 12.7376 18.999C15.7067 19.0089 18.614 18.9462 21.4594 18.811C23.4567 18.811 25.0731 17.005 25.0731 14.7785C25.1903 13.0122 25.244 11.2508 25.2392 9.4844C25.2502 7.72299 25.1972 5.95993 25.08 4.19522ZM10.3496 14.3431V4.62073L17.4306 9.47946L10.3496 14.3431Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Link>
            <Link to="//www.medium.com/" target="_blank">
              <Box>
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7406 0C4.94216 0 0.240601 4.70156 0.240601 10.5C0.240601 16.2984 4.94216 21 10.7406 21C16.539 21 21.2406 16.2984 21.2406 10.5C21.2406 4.70156 16.539 0 10.7406 0ZM16.7406 5.94609L15.7844 6.8625C15.7 6.92578 15.6601 7.02891 15.6765 7.12969V13.8727C15.6601 13.9758 15.7 14.0789 15.7844 14.1398L16.7219 15.0563V15.2602H12.0156V15.0656L12.9836 14.1258C13.0797 14.0297 13.0797 14.0016 13.0797 13.8586V8.40234L10.3843 15.2367H10.0211L6.88513 8.40234V12.9844C6.85701 13.1766 6.92498 13.3711 7.06091 13.5094L8.32185 15.0352V15.2391H4.7406V15.0352L6.00154 13.5094C6.06797 13.4408 6.11742 13.3575 6.14591 13.2664C6.17439 13.1752 6.18114 13.0786 6.1656 12.9844V7.6875C6.18201 7.53984 6.12576 7.39687 6.01326 7.29609L4.89294 5.94609V5.74219H8.37341L11.0594 11.6367L13.4242 5.74688H16.7406V5.94609Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeContent;

const LogoSvg = styled(FooterLogo)`
  stroke-width: 0.9px;
  fill: ${({ $color }) => $color};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  grid-row-start: 1;
  width: 124px;
  height: 24px;
`;
