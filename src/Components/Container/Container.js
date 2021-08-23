import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Menu from "./../Menu/Menu";
import ProgressBar from "../ProgressBar/ProgressBar";
import MainText from "./../MainText/MainText";
import Footer from "./../Footer/Footer";
import HotspotsContainer from "../Hotspots/HotspotsContainer";
import SchedulePopup from "../SchedulePopup/SchedulePopup";
import CareersPopup from "../CareersPopup/CareersPopup";
import { isMobileOnly } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { addDevGUIConfig, isDev, wait } from "../../helpers/dev.helpers";
import {
  getFadeOutFormTen,
  getFadeOutProgressSvg,
  stopChooseStoryTitleAnimation,
  stopCustomAnimationSvg,
  stopFormTenAnimation,
  stopMainTextAnimation,
} from "../../helpers/animations";
import { ReactComponent as PlugLogo } from "../../assets/images/logo.svg";
import {
  getStandardNextStep,
  getNextStepFromForm,
} from "../../helpers/next_step";

import Contentful from "../../helpers/contentful";
import { getThemeContent, getSectionContent } from "../../helpers/content";
import {
  setMenuData,
  setStepsTextData,
  setScheduleData,
  setLightThemeData,
  setDarkThemeData,
  setHomeSection,
  setCurrentSection,
  setCurrentSectionTitle,
  setProgress,
  toggleLoader,
  stepBack,
  stepForward,
} from "../../store/actions/actionCreator";
import { lightTheme, darkTheme } from "../../constants/constants";

export default (currentData) => {
  const [isLandscape, setLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isBgBlur, setBgBlur] = useState(false);
  const [touchStart, setTouchStart] = useState({ x1: null, y1: null });
  const {
    currentSection,
    currentStep,
    darkThemeData,
    lightThemeData,
    homeSection,
  } = useSelector((state) => state.state);
  const currentSectionTitle = currentData.currentSectionTitle;
  const currentTheme = currentData.currentTheme;
  const blurredBackground = useRef(null);
  const mainContainer = useRef(null);
  const dispatch = useDispatch();
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    getThemeContent(dispatch);
    //First load it will show the home page

    getSectionContent(currentData.currentSectionTitle, dispatch);
  }, [currentData.currentSectionTitle]);

  useEffect(() => {
    dispatch(toggleLoader(false));
    const DEV_TEST_FUNCTIONS = {
      "GO PREV": () => {
        dispatch(stepBack(window.engine.currentSectionTitle));
      },
      "GO NEXT": () => {
        dispatch(stepForward(window.engine.currentSectionTitle));
      },

      "HIDE INTERFACE": () => {
        const [a, b, c] = [
          document.querySelector("#app"),
          document.querySelector("#particles"),
          document.querySelector("#glContainer"),
        ];

        const display = a.style.display === "none" ? "block" : "none";

        a.style.display = display;
        b.style.display = display;
        c.style.pointerEvents = "auto";
      },
    };
    window.DEV_TEST_FUNCTIONS = DEV_TEST_FUNCTIONS;

    const DEV_GUI_CONFIG = [
      {
        name: "engine",
        object: DEV_TEST_FUNCTIONS,
      },
    ];

    addDevGUIConfig(DEV_GUI_CONFIG);
  }, [currentSectionTitle]);

  const stopAnimation = useCallback(
    (e) => {
      if (window.stoppedAnimation) {
        return;
      }
      const allowedContainers = [
        "mainContainer",
        "anime",
        "letter",
        "blurredBackground",
        "custom_anime",
        "customBlock",
        "storyBlur",
      ];
      if (!window.animation) return;
      const isAllowedList = e.target.classList;
      let isAllowed = false;
      [...isAllowedList].forEach((classItem) => {
        if (allowedContainers.includes(classItem)) {
          isAllowed = true;
        }
      });
      if (!isAllowed) return;
      if (currentSection) {
        switch (currentSectionTitle) {
          case "home": {
            switch (currentStep) {
              case 0:
                return;
              default: {
                stopMainTextAnimation([".anime", ".letter"]);
                stopMainTextAnimation([".anime2", ".letter2"]);
                stopFormTenAnimation([".footer"]);
                window.stoppedAnimation = true;
              }
            }
            return;
          }
          case "approach": {
            switch (currentStep) {
              case 0:
              case 1: {
                stopCustomAnimationSvg([".svgText", ".svgText path"]);
                window.stoppedAnimation = true;
                return;
              }
              case 2: {
                stopCustomAnimationSvg([".svgText", ".svgText path"]);
                stopCustomAnimationSvg([".svgText2", ".svgText2 path"]);
                window.stoppedAnimation = true;
                return;
              }
              default: {
                stopMainTextAnimation([".anime", ".letter"]);
                stopMainTextAnimation([".anime2", ".letter2"]);
                stopFormTenAnimation([".footer"]);
                window.stoppedAnimation = true;
              }
            }
            return;
          }
          case "work": {
            switch (currentStep) {
              case 0: {
                stopFormTenAnimation([".chooseStoryText", ".storyLetter"]);
                stopChooseStoryTitleAnimation([".anime", ".letter"]);
                if (window.animation) {
                  window.stoppedAnimation = true;
                }
                return;
              }
              default: {
                stopMainTextAnimation([".anime", ".letter"]);
                stopMainTextAnimation([".anime2", ".letter2"]);
                stopFormTenAnimation([".footer"]);
                window.stoppedAnimation = true;
              }
            }
            return;
          }
        }
      }
    },
    [currentStep, currentSection]
  );

  const orientationchangeHandler = (e) => {
    if (e.target.orientation === 0) {
      setLandscape(false);
    } else {
      setLandscape(true);
    }
  };

  useEffect(() => {
    //get top of the page
    mainContainer.current.scrollTop = 0;

    window.stoppedAnimation = false;

    if (currentSection?.fields[currentStep].fields.blurBackground) {
      setBgBlur(true);
    } else {
      setBgBlur(false);
    }

    window.addEventListener(
      "orientationchange",
      orientationchangeHandler,
      false
    );

    return () => {
      window.removeEventListener("orientationchange", orientationchangeHandler);
      setBgBlur(false);
    };
  }, [currentStep, isLandscape]);

  const closeSchedulePopup = () => {
    mainContainer.current.style.overflowY = "auto";
    const menu = document.querySelector(".menu");
    menu.removeAttribute("style");
    setPopupOpen(false);
    setActivePopup(null);
  };

  const showSchedulePopup = () => {
    mainContainer.current.style.overflowY = "hidden";
    setPopupOpen(true);
  };

  const closeApproachPopup = () => {
    mainContainer.current.style.overflowY = "auto";
    const menu = document.querySelector(".menu");
    menu.removeAttribute("style");
    setPopupOpen(false);
    setActivePopup(null);
  };

  const showCareersPopup = () => {
    mainContainer.current.style.overflowY = "hidden";
  };

  const getBlur = () => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 5:
            return 10;
          default:
            return 15;
        }
        return;
      }
      case "approach": {
        switch (currentStep) {
          case 3:
            return 5;
          case 4:
            return 5;
          default:
            return 15;
        }
        return;
      }
      default:
        return 15;
    }
  };

  const menuHandler = (flag) => setMenuOpen(flag);

  const getNextStep = (nextStep) => {
    if (isPopupOpen) return;
    if (
      (currentSection.fields[currentStep].locked && nextStep > currentStep) ||
      (window.animation && !window.animation.completed)
    ) {
      return;
    }
    if (nextStep === currentSection.fields.length && nextStep > currentStep)
      return;
    if (nextStep < currentStep && currentStep === 0) return;

    if (
      currentSectionTitle === "work" &&
      currentStep === 1 &&
      nextStep < currentStep
    ) {
      const progressSvgArray = document.querySelectorAll(
        `.styledProgress_${currentStep}`
      );
      getNextStepFromForm(nextStep, progressSvgArray, dispatch);
    }

    window.animation.way = "back";
    currentSection.fields[currentStep].isFooterShow &&
      getFadeOutFormTen(".footer", 0, () => null);
    const progressSvgArray = document.querySelectorAll(
      `.styledProgress_${currentStep}`
    );
    const progressBorderDefault = document.querySelector(
      `.progressBorderDefault__${currentStep}`
    );
    getFadeOutProgressSvg(
      [...progressSvgArray, progressBorderDefault],
      () => {}
    );
    getStandardNextStep(nextStep, currentSection.title, dispatch);
  };

  const touchstartHandler = (e) => {
    const firstTouch = e.touches[0];
    if (firstTouch) {
      setTouchStart({
        x1: firstTouch.clientX,
        y1: firstTouch.clientY,
      });
    }
  };

  const touchmoveHandler = (e) => {
    if (!touchStart.x1 || !touchStart.y1) return;

    const x2 = e.touches[0].clientX;
    const y2 = e.touches[0].clientY;
    const xDiff = x2 - touchStart.x1;
    const yDiff = y2 - touchStart.y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      //right-left
      if (xDiff > 0) {
        getNextStep(currentStep - 1); //swipe right
      } else {
        getNextStep(currentStep + 1); //swipe left
      }
    } //else {
    //top - bottom
    // if (yDiff > 0) {
    //   console.log('down')
    // } else {
    //   console.log('top')
    // }
    // }
  };

  const wheelHandler = (e) => {
    // e.preventDefault();              // this one is the key
    e.stopPropagation();

    if (e.deltaY > 0) {
      getNextStep(currentStep + 1);
    } else if (e.deltaY < 0) {
      getNextStep(currentStep - 1);
    }
  };

  const getOverflow = () => {
    switch (currentSectionTitle) {
      case "approach": {
        switch (currentStep) {
          case 0:
          case 1:
          case 2:
          case 3:
            return "auto";
          default:
            return "hidden";
        }
        return;
      }
      case "work": {
        switch (currentStep) {
          case 0:
          case 1:
            return "auto";
          default:
            return "hidden";
        }
        return;
      }
      default:
        return "hidden";
    }
  };

  const popupManager = () => {
    switch (activePopup) {
      case "schedule":
        return <SchedulePopup closeHandler={closeSchedulePopup} />;
      case "careers":
        return <CareersPopup closeHandler={closeSchedulePopup} />;
      //  case "approach":
      // return <ApproachPopup closeHandler={closeApproachPopup} />;
      default:
        break;
    }
  };

  if (isLandscape && isMobileOnly) {
    return (
      <Container
        id="app"
        ref={mainContainer}
        $section={currentSection}
        $step={currentStep}
        $isMenuOpen={isMenuOpen}
        className="mainContainer"
      >
        <MobPlug
          $step={currentStep}
          $section={currentSection}
          $color={currentTheme.textColor}
        >
          <PluggedLogo />
          <p>Please rotate your device to portrait mode.</p>
        </MobPlug>
      </Container>
    );
  }

  return (
    <Container
      id="app"
      ref={mainContainer}
      $section={currentSection}
      $step={currentStep}
      $isMenuOpen={true} //{isMenuOpen}
      className="mainContainer"
      onClick={stopAnimation}
      onTouchStart={touchstartHandler}
      onTouchMove={touchmoveHandler}
      onWheel={wheelHandler}
      $overflow={getOverflow()}
    >
      {activePopup && popupManager()}
      <Menu
        showPopup={setActivePopup}
        menuHandler={menuHandler}
        currentStep={currentStep}
        currentSectionTitle={currentSectionTitle}
        currentSection={currentSection}
        currentTheme={currentTheme}
      />
      {currentSection && (
        <ProgressBar
          currentSectionTitle={currentSectionTitle}
          currentStep={currentStep}
          currentSection={currentSection}
          currentTheme={currentTheme}
        />
      )}
      {currentSection && (
        <MainText
          currentSectionTitle={currentSectionTitle}
          currentStep={currentStep}
          currentSection={currentSection}
          currentTheme={currentTheme}
        />
      )}
      {currentSection && (
        <Footer
          currentSectionTitle={currentSectionTitle}
          currentStep={currentStep}
          currentSection={currentSection}
          currentTheme={currentTheme}
        />
      )}
      {isBgBlur && (
        <BlurredBackground
          ref={blurredBackground}
          className="blurredBackground"
          $blur={getBlur()}
        />
      )}
      <HotspotsContainer />
    </Container>
  );
};

/*overflow-y: ${({ $isMenuOpen, $overflow }) =>
  $isMenuOpen ? "hidden" : $overflow};*/

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 3;
  justify-content: center;
  transition: 0.3s ease;
  overflow-x: hidden;
  overflow-y: hidden;
  touch-action: pan-y;
`;
const BlurredBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(${({ $blur }) => $blur}px);
`;
const PluggedLogo = styled(PlugLogo)`
  position: absolute;
  top: 24px;
  width: 124px;
  height: 24px;
`;

const MobPlug = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  ${PluggedLogo} {
    fill: ${({ $color }) => $color};
  }

  p {
    font-family: Archia, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.1em;
    color: ${({ $color }) => $color};
  }
`;