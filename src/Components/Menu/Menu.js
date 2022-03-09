import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import anime from "animejs/lib/anime.es.js";
import { useDispatch } from "react-redux";
// import { BREAKPOINTS } from "../../constants/constants";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as RightBtnSvg } from "../../assets/images/rightBtn.svg";
import {
  desktopMenuLabelAnimation,
  getLogoToMobPosition,
  logoTimeline,
  mobBurgerCloseAnimation,
  mobBurgerOpenAnimation,
  mobLogoCloseAnimation,
  mobLogoOpenAnimation,
  mobMenuCloseAnimation,
  mobMenuOpenAnimation,
  removeInlineStyles,
  getFadeOutCustomText,
  getFadeOutMainText,
} from "../../helpers/animations";
import { Link, useLocation } from "react-router-dom";
import {
  setCurrentStep,
  setCurrentSectionTitle,
  setProgress,
} from "../../store/actions/actionCreator";
import ReactGA from "react-ga";
import { toggleElementsforPopup } from "utils/navigation";

const MenuContent = ({
  showPopup,
  menuHandler,
  currentSectionTitle,
  currentStep,
  currentSection,
  currentTheme,
}) => {
  const BREAKPOINTS = {
    mob: 767,
    tablet: 1180,
    large: 1400,
    xl: 1600,
    xxl: 4400,
  };
  let location = useLocation();

  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isLogoBtnsShow, setLogoBtnsShow] = useState({
    logo: false,
    first: false,
    second: false,
  });
  const logoSvg = useRef(null);
  const burgerBox = useRef(null);
  const menu = useRef(null);
  const menuRightBtn = useRef(null);
  const rightBorderBtn = useRef(null);
  const introText = useRef(null);
  const dispatch = useDispatch();
  const trackingId = "G-60F2EVTPDX"; // Our Google Analytics tracking ID
  ReactGA.initialize(trackingId);
  const topMenu = document.getElementsByClassName("menu")[0];

  const menuResizer = () => {
    if (window.innerWidth > BREAKPOINTS.tablet) {
      setMenuOpen(true);
      menu.current && removeInlineStyles([menu.current]);
    }
    if (window.innerWidth <= BREAKPOINTS.tablet) {
      setMenuOpen(false);
      //correct mob logo position
      anime({
        targets: ".logo",
        translateX: -window.innerWidth / 2 + 80,
        easing: "linear",
        duration: 50,
      });
    }
  };

  const getIntroFontSize = () => {
    return window.innerWidth < 768 ? 18 : window.innerWidth < 901 ? 21 : 28;
  };

  useEffect(() => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 0: {
            setLogoBtnsShow({
              logo: false,
              first: false,
              second: false,
            });
            if (document.getElementById("glContainer"))
              document.getElementById("glContainer").style.opacity = "0";
            logoTimeline(currentTheme?.logoColor, getIntroFontSize(), () => {
              // if (window.gradient != null)
              //   window.gradient.setStep(0, currentSectionTitle);
              // else window.gradient = new Object();

              setLogoBtnsShow((state) => {
                return {
                  ...state,
                  logo: true,
                };
              });
              removeInlineStyles([logoSvg.current, menuRightBtn.current]);
              setLogoBtnsShow((state) => {
                return {
                  ...state,
                  first: true,
                };
              });
              setTimeout(() => {
                setLogoBtnsShow((state) => {
                  return {
                    ...state,
                    second: true,
                  };
                });
              }, 200);

              if (window.innerWidth <= BREAKPOINTS.tablet) {
                getLogoToMobPosition();
              }

              window.innerWidth <= BREAKPOINTS.tablet
                ? setMenuOpen(false)
                : setMenuOpen(true);
              window.addEventListener("resize", menuResizer);
            });
            return;
          }
          default: {
            if (window.logoAnimation && !window.logoAnimation.completed) {
              window.logoAnimation.pause();
            }
            setLogoBtnsShow({
              logo: true,
              first: true,
              second: true,
            });
            removeInlineStyles([logoSvg.current, menuRightBtn.current]);

            if (window.innerWidth <= BREAKPOINTS.tablet) {
              getLogoToMobPosition();
            }
            window.innerWidth <= BREAKPOINTS.tablet
              ? setMenuOpen(false)
              : setMenuOpen(true);
            window.addEventListener("resize", menuResizer);
          }
        }
        return;
      }
      default: {
        if (window.logoAnimation && !window.logoAnimation.completed) {
          window.logoAnimation.pause();
        }
        setLogoBtnsShow({
          logo: true,
          first: true,
          second: true,
        });
        removeInlineStyles([logoSvg.current, menuRightBtn.current]);

        if (window.innerWidth <= BREAKPOINTS.tablet) {
          getLogoToMobPosition();
        }
        window.innerWidth <= BREAKPOINTS.tablet
          ? setMenuOpen(false)
          : setMenuOpen(true);
        window.addEventListener("resize", menuResizer);
      }
    }

    return () => window.removeEventListener("resize", menuResizer);
  }, [currentSectionTitle, currentStep]);

  useEffect(() => {
    const burgerChildren = [...burgerBox.current.children];
    const menuButtons = [...menu.current.children];

    if (!isMenuOpen) {
      burgerChildren[0].classList.remove("open");
      mobBurgerCloseAnimation(burgerChildren);

      menuButtons.forEach((btn, index) => {
        if (index !== 0 && index !== 4) {
          mobMenuCloseAnimation(btn);
        }
      });

      mobLogoCloseAnimation(".logo");
      // if (
      //   currentSectionTitle === "home" &&
      //   document.querySelector(".anime") != null &&
      //   window
      //     .getComputedStyle(document.querySelector(".anime"))
      //     .getPropertyValue("opacity") != 0
      // )
      //   mobLogoCloseAnimation(".logo");
      // else if (currentSectionTitle !== "home") {
      //   mobLogoCloseAnimation(".logo");
      // }
    } else if (isMenuOpen) {
      burgerChildren[0].classList.add("open");
      mobBurgerOpenAnimation(burgerChildren);

      menuButtons.forEach((btn, index) => {
        if (index !== 0 && index !== 4) {
          mobMenuOpenAnimation(btn);
        }
      });

      mobLogoOpenAnimation(".logo");
    }
  }, [isMenuOpen]);

  //FIXME
  // const onServicesPopUpHandler = (e) => {
  //   if (window.innerWidth <= BREAKPOINTS.tablet) {
  //     setMenuOpen(false);
  //     topMenu?.removeAttribute("style");
  //   }

  //   toggleElementsforPopup("hide");
  //   showPopup("services");
  // };
  //FIXME
  // const onProjectsPopUpHandler = (e) => {
  //   if (window.innerWidth <= BREAKPOINTS.tablet) {
  //     setMenuOpen(false);
  //     topMenu?.removeAttribute("style");
  //   }

  //   toggleElementsforPopup("hide");
  //   showPopup("projects");
  // };
  //FIXME
  // const onAboutPopUpHandler = (e) => {
  //   if (window.innerWidth <= BREAKPOINTS.tablet) {
  //     setMenuOpen(false);
  //     topMenu?.removeAttribute("style");
  //   }
  //   toggleElementsforPopup("hide");
  //   showPopup("about");
  // };

  const menuLabelHandler = (e) => {
    e.preventDefault();
    if (window.innerWidth <= BREAKPOINTS.tablet) return;

    const textWrapper = e.target.parentElement.querySelector(".menu_label");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      const letters = [...textWrapper.children];
      desktopMenuLabelAnimation(letters, textWrapper);
    }
  };

  const burgerClickHandler = (e) => {
    e.preventDefault();
    const mainContainer = document.querySelector(".mainContainer");
    if (mainContainer) {
      mainContainer.scrollTop = 0;
    }
    menuHandler(!isMenuOpen);
    setMenuOpen((state) => {
      console.log(state);
      if (state) {
        menu.current.style.gridTemplateRows = `43px 0 0 0 0`;
      } else {
        menu.current.style.gridTemplateRows = `93px 64px 64px 64px 64px 64px 94px`;
      }
      return !state;
    });
  };

  const onScheduleClickHandler = () => {
    if (window.innerWidth <= BREAKPOINTS.tablet) {
      setMenuOpen(false);
      topMenu?.removeAttribute("style");
    }
    toggleElementsforPopup("hide");
    showPopup("schedule");
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/": {
        GoSectionHandler("home");
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname);
        return;
      }
      case "/approach": {
        toggleElementsforPopup("show");
        topMenu?.removeAttribute("style");
        GoSectionHandler("approach");
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname);
        return;
      }
      case "/work": {
        toggleElementsforPopup("show");
        topMenu?.removeAttribute("style");
        GoSectionHandler("work");
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname);
        return;
      }
      case "/eminent-apps": {
        toggleElementsforPopup("show");
        topMenu?.removeAttribute("style");
        GoSectionHandler("other");
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname);
        return;
      }
      case "/services": {
        toggleElementsforPopup("show");
        topMenu?.removeAttribute("style");
        GoSectionHandler("other");
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname);
        return;
      }
      case "/projects": {
        toggleElementsforPopup("show");
        topMenu?.removeAttribute("style");
        GoSectionHandler("other");
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname);
        return;
      }
      case "/about": {
        toggleElementsforPopup("show");
        topMenu?.removeAttribute("style");
        GoSectionHandler("other");
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname);
        return;
      }
      default:
        return;
    }
  }, [currentSection]);

  function GoSectionHandler(type) {
    if (window.innerWidth <= BREAKPOINTS.tablet) {
      setMenuOpen(false);
    }
    if (document.getElementsByClassName("popup").length > 0) {
      var el = document.getElementsByClassName("popup")[0];
      if (el.contains(el)) {
        el.parentNode.removeChild(el);
      }
    }
    if (window.engine) {
      dispatch(setCurrentSectionTitle(type));
      dispatch(setCurrentStep(0));
      window.engine.currentSectionTitle = type;
      window.gradient.setStep(0, type);
      window.engine.setCurrentStep(0);
    }
    if (window.animation) {
      window.animation.way = "back";
      //getStandardNextStep(0, type, dispatch);
      //window.animation._name === "anime" &&
      currentStep > 0 &&
        getFadeOutMainText(() => {
          setTimeout(() => dispatch(setProgress(0, type)), 100);
        });
      //window.animation._name === "custom_anime" &&
      currentStep > 0 &&
        getFadeOutCustomText(() => {
          setTimeout(() => dispatch(setProgress(0, type)), 100);
        });
    }
    return () => {
      console.error("Error going to" + type);
    };
  }

  const getMenuBlur = () => {
    switch (currentSectionTitle) {
      case "work":
        switch (currentStep) {
          case "Slide 1":
          case "Slide 2":
            return 10;
          default:
            return 0;
        }
      default:
        return 10;
    }
  };

  // const controlAudioVolume = () => {
  //   var audio = document.getElementById("audio");
  //   if (audio) {
  //     audio.volume = 0.2;
  //     audio.play();

  //     console.log("made it to audio volume");
  //   }
  // };

  return (
    <>
      {currentSectionTitle === "home" && currentStep === 0 && (
        <IntroText
          className="introText"
          ref={introText}
          $color={currentTheme?.textColor}
        >
          Inspiring Excellence
          {/* <audio
            id="audio"
            src="https://www.scottbuckley.com.au/library/wp-content/uploads/2020/05/sb_solace.mp3"
            controls
            autoPlay
            style={{ display: "none" }}
          />
          {controlAudioVolume()} */}
        </IntroText>
      )}{" "}
      <Menu
        $open={isMenuOpen}
        ref={menu}
        className="menu"
        $blur={getMenuBlur()}
      >
        <MenuBurger
          $open={isMenuOpen}
          $color={currentTheme?.logoColor}
          onClick={burgerClickHandler}
          ref={burgerBox}
          $show={isLogoBtnsShow.first}
        >
          <span />
          <span />
          <span />
        </MenuBurger>
        <MenuBtn
          $open={isMenuOpen}
          $color={currentTheme?.menuBtnColor}
          $lineBg={currentTheme?.bgScheduleBtn}
          $show={isLogoBtnsShow.second}
        >
          <span className="menu_item" onMouseOver={menuLabelHandler}>
            <Link to="/eminent-apps"> SOLUTIONS </Link>
          </span>
          <span className="menu_label"> START HERE </span>{" "}
        </MenuBtn>
        <MenuBtn
          $open={isMenuOpen}
          $color={currentTheme?.menuBtnColor}
          $lineBg={currentTheme?.bgScheduleBtn}
          $show={isLogoBtnsShow.second}
        >
          <span className="menu_item" onMouseOver={menuLabelHandler}>
            WHY CHOOSE US?
            {/* <Link to="/approach"> APPROACH </Link> */}
          </span>{" "}
          <span className="menu_label"> COMING SOON </span>{" "}
        </MenuBtn>
        <MenuBtn
          $open={isMenuOpen}
          $color={currentTheme?.menuBtnColor}
          $lineBg={currentTheme?.bgScheduleBtn}
          $show={isLogoBtnsShow.first}
          // onClick={onServicesPopUpHandler}
        >
          <span className="menu_item" onMouseOver={menuLabelHandler}>
            <Link to="/services">SERVICES</Link>
          </span>{" "}
          <span className="menu_label"> DELIVER VALUE </span>{" "}
        </MenuBtn>
        <MenuLogoBtn className="logo" $open={isMenuOpen}>
          <span>
            <Link to="/">
              {" "}
              <LogoSvg
                className="menuLogoSvg"
                ref={logoSvg}
                $color={currentTheme?.logoColor}
                $show={isLogoBtnsShow.logo}
              />
            </Link>
          </span>{" "}
        </MenuLogoBtn>{" "}
        <MenuBtn
          $open={isMenuOpen}
          $color={currentTheme?.menuBtnColor}
          $lineBg={currentTheme?.bgScheduleBtn}
          $show={isLogoBtnsShow.second}
        >
          <span className="menu_item" onMouseOver={menuLabelHandler}>
            <Link to="/projects">PROJECTS</Link>
          </span>{" "}
          <span className="menu_label"> TRUSTED PARTNERS </span>{" "}
        </MenuBtn>
        <MenuBtn
          $open={isMenuOpen}
          $color={currentTheme?.menuBtnColor}
          $lineBg={currentTheme?.bgScheduleBtn}
          $show={isLogoBtnsShow.first}
          // onClick={onAboutPopUpHandler}
        >
          <span className="menu_item" onMouseOver={menuLabelHandler}>
            <Link to="/about">ABOUT</Link>
          </span>
          <span className="menu_label"> OUR STORY </span>
        </MenuBtn>
        <MenuRightBtn
          ref={menuRightBtn}
          $open={isMenuOpen}
          $bg={currentTheme?.bgScheduleBtn}
          $color={currentTheme?.menuBtnColor}
          id="ScheduleBtn"
          onClick={onScheduleClickHandler}
          $show={isLogoBtnsShow.second}
          // className="book-demo-header-btn"
        >
          <RightBtnBorder
            ref={rightBorderBtn}
            $color={currentTheme?.bgScheduleBtn}
            // className="book-demo-header-btn"
          />{" "}
          <span> BOOK DEMO </span>{" "}
        </MenuRightBtn>{" "}
      </Menu>
    </>
  );
};

export default MenuContent;

const BREAKPOINTS = {
  mob: 767,
  tablet: 1180,
  large: 1400,
  xl: 1600,
  xxl: 4400,
};

const IntroText = styled.div`
  opacity: 0;
  position: absolute;
  color: ${({ $color }) => $color};
  top: 35vh;
  font-size: 28px;
  line-height: 45px;
  text-align: center;
  letter-spacing: 0.1em;
  z-index: 20;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    top: 38vh;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    top: 36vh;
  }
`;

const MenuBurger = styled.div`
  position: absolute;
  display: none;
  width: 0;
  height: 0;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    position: absolute;
    right: 20px;
    top: 19px;
    content: "";
    width: 30px;
    height: 30px;
    display: ${({ $show }) => ($show ? "grid" : "none")};
    cursor: pointer;

    > span {
      background: ${({ $color }) => $color};
      width: 26px;
      height: 2px;
      border-radius: 8px;
      align-self: center;
      justify-self: left;

      &:nth-of-type(2) {
        justify-self: right;
      }
    }
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  ${"" /* left: 50vmax; */}
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 185px 185px 185px 200px 185px 185px 185px;
  grid-template-rows: 75px;
  align-items: center;
  z-index: 1100;
  backdrop-filter: blur(10px);

  ${
    "" /* @media (max-width: 1650px) {
    left: 55.5vmax;
  }
  @media (max-width: 1550px) {
    left: 56vmax;
  }
  @media (max-width: 1450px) {
    left: 57vmax;
  } */
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-template-columns: 1fr;
    ${"" /* grid-template-rows: 73px 0 0 0 0 0 0; */}
    grid-template-rows: ${({ $open }) =>
      $open ? `93px 64px 64px 64px 64px 64px 94px` : `73px 0 0 0 0 0 0`};
    width: 100%;
    top: 0;
    left: 0;
    transform: none;
    backdrop-filter: ${({ $open }) => ($open ? `blur(10px) opacity(0.8)` : ``)};
    transition: 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      background: var(--block1-bg2);
      transition: 0.3s ease;
      height: ${({ $open }) => ($open ? "100vh" : "0px")};
      opacity: ${({ $open }) => ($open ? "0.9" : "0")};
      z-index: -1;
    }
  }

  @media (max-width: 800px) {
    z-index: 1100;
    grid-template-rows: 43px 0px 0px 0px 0px;
    ${
      "" /* backdrop-filter: ${({ $open }) =>
      $open ? `blur(10px) opacity(0.8)` : ``};
  } */
    }
  }
`;

const MenuLogoBtn = styled.div`
  width: 175px;
  height: 34px;
  justify-self: center;
  margin-left: ${({ $open }) => ($open ? "0px" : "60px")};
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 1;
    width: 124px;
    height: 24px;
    margin-top: 20px;
    margin-left: ${({ $open }) => ($open ? "0px" : "0px")};
    align-self: start;
    transition: 0.3s ease;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    margin-left: ${({ $open }) => ($open ? "0px" : "0")};
  }
`;
const LogoSvg = styled(Logo)`
  stroke-width: 0.9px;
  fill: ${({ $color }) => $color};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
`;
const MenuBtn = styled.button`
  color: ${({ $color }) => $color};
  font-size: 12px;
  letter-spacing: 3px;
  text-decoration: none;
  justify-self: center;
  position: relative;
  display: block;
  outline: none;
  cursor: pointer;
  opacity: ${({ $show }) => ($show ? 1 : 0)}!important;
  transition: 0.3s ease;
  background: none;
  border: none;
  .menu_item a {
    color: ${({ $color }) => $color};
    text-decoration: none;
  }

  .menu_item {
    z-index: 1;
    &::before {
      position: absolute;
      content: "";
      display: block;
      top: 12px;
      left: -6%;
      width: 110%;
      height: 10px;
      background: ${({ $lineBg }) => $lineBg};
      opacity: 0;
      transition: 0.4s ease-in;
      z-index: -1;
    }

    &:hover {
      &::before {
        opacity: 0.8;
      }

      & ~ .menu_label {
        opacity: 1;

        .letter {
          opacity: 1;
        }
      }
    }
  }

  .menu_label {
    position: absolute;
    display: block;
    top: 30px;
    left: 0;
    color: ${({ $color }) => $color};
    width: 200px;
    text-align: left;
    font-size: 12px;
    letter-spacing: 0;
    text-transform: uppercase;
    overflow: hidden;
    opacity: 0;
    white-space: nowrap;

    .letter {
      display: inline-block;
      line-height: 1em;
      opacity: 0;
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    transition: 0.3s ease;
    text-align: left;
    width: 100%;
    align-self: stretch;
    align-items: center;

    &:nth-of-type(5) {
      &::after {
        content: "";
        position: absolute;
        display: block;
        left: 5%;
        bottom: 0;
        width: 90%;
        height: 1px;
        border-bottom: 1px solid #485f5675;
      }
    }

    .menu_item {
      transition: 0.3s ease;
      background: none;
      color: var(--block1-text-primary);
      font-size: 21px;
      padding-left: 21px;

      &:hover {
        &::before {
          opacity: 0;
        }

        & ~ .menu_label {
          opacity: 0;

          .letter {
            opacity: 0;
          }
        }
      }
    }

    .menu_label {
      display: none;
    }

    .menu_item a {
      color: var(--block1-text-primary);
      text-decoration: none;
    }
  }
`;
const rightBtnBorderAnimation = keyframes`
	0%   { stroke-dashoffset: 520;}
	100% {stroke-dashoffset: 0;}
`;
const RightBtnBorder = styled(RightBtnSvg)`
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  stroke: ${({ $color }) => $color};
  stroke-dashoffset: 520;
  stroke-dasharray: 520;
  stroke-width: 2px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    stroke: transparent;
  }
`;
const MenuRightBtn = styled(MenuBtn)`
  // background: ${({ $bg }) => $bg};
  background: #3cf7a2;
  color: #353d48;
  padding: 13px 10px;
  border-radius: 67px;
  white-space: nowrap;
  border: 1px solid transparent;
  position: relative;
  transition: 0.2s ease-in-out;
  a,
  a:hover {
    color: #ffffff;
    text-decoration: none;
  }
  &:focus {
    outline: 2px solid #ffffff;
  }
  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    &:hover {
      background: none;
      color: #ffffff;
      ${RightBtnBorder} {
        animation: ${rightBtnBorderAnimation} 0.5s ease-in;
        animation-direction: normal;
        stroke: ${({ $bg }) => $bg};
        stroke-dashoffset: 0;
      }
    }
    &:active {
      // background: ${({ $bg }) => $bg};
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    height: ${({ $open }) =>
      $open
        ? `
auto `
        : `
0 px `};
    display: ${({ $show, $open }) =>
      $open && $show
        ? `
block `
        : `
none `};
    align-self: stretch;
    align-items: center;
    transition: 0.3s ease;
    background: none !important;
    color: var(--block1-text-primary);
    font-size: 21px;
    border-radius: 0 0 45px 45px;
    ${"" /* border-bottom: 1px solid var(--block1-text-secondary); */}
    padding: 0px;
    border-bottom: none;
    & > span {
      padding-left: 21px;
    }
  }
`;
