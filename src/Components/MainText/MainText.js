import React, { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import _ from "lodash";
import { BREAKPOINTS } from "../../constants/constants";
import { useDispatch } from "react-redux";
import anime from "animejs/lib/anime.es.js";
import { setProgress } from "../../store/actions/actionCreator";
import { ReactComponent as OutcomeSVG } from "../../assets/images/Outcome.svg";
import { ReactComponent as PartnersSVG } from "../../assets/images/Partners.svg";
import { ReactComponent as VisionSVG } from "../../assets/images/Vision.svg";
import { ReactComponent as VeteransSVG } from "../../assets/images/Veterans.svg";
// import { ReactComponent as StrategySvg } from "../../assets/images/Strategy.svg";
// import { ReactComponent as TransparencySvg } from "../../assets/images/Transparency.svg";
// import { ReactComponent as FlexibilitySvg } from "../../assets/images/Flexibility.svg";
// import { ReactComponent as SelflessSvg } from "../../assets/images/Selfless.svg";
// import { ReactComponent as ServiceSvg } from "../../assets/images/service.svg";
import { ReactComponent as WatchAgainSvg } from "../../assets/images/watchAgainArrow.svg";
import { ReactComponent as RightBtnSvg } from "../../assets/images/rightBtn.svg";
import {
  getFadeInChooseStoryText,
  getFadeInCustomText,
  getFadeInFormTen,
  getFadeInMainText,
  getFadeInProgressSvg,
  getFadeOutChooseStoryText,
  getFadeOutFormTen,
  getFadeOutProgressSvg,
  getFadeOutCustomText,
  getFadeOutMainText,
} from "../../helpers/animations";
import ScheduleForm from "../SchedulePopup/ScheduleForm";

const App = ({
  showPopup,
  menuHandler,
  currentSectionTitle,
  currentStep,
  currentSection,
  currentTheme,
}) => {
  const dispatch = useDispatch();
  // const currentSectionTitle = props.currentSectionTitle;
  // const currentStep = props.currentStep;
  // const currentSection = props.currentSection;
  // const currentTheme = props.currentTheme;
  const svgWatch = useRef(null);
  const chooseStoryTextContainer = useRef(null);
  const storyItem1 = useRef(null);
  const storyItem2 = useRef(null);
  const storyItem3 = useRef(null);
  const storyItem4 = useRef(null);

  const onScheduleClickHandler = (e) => {
    document.getElementById("ScheduleBtn").click();
  };

  useEffect(() => {
    const progressSvgArray = document.querySelectorAll(
      `.styledProgress_${currentStep}`
    );
    const progressBorderDefault = document.querySelector(
      `.progressBorderDefault__${currentStep}`
    );
    getFadeInProgressSvg([progressSvgArray, progressBorderDefault], () => "");

    if (currentSectionTitle === "approach" && currentStep === 0) {
      window.animation = anime;
      window.animation.way = "forward";
    }

    if (currentSectionTitle === "work" && currentStep === 0) {
      window.animation = anime;
      window.animation.way = "forward";
      getFadeInFormTen(".chooseStory", 0, () =>
        setTimeout(() => (window.stoppedAnimation = true), 1000)
      );
      const storyWrapper = document.querySelectorAll(".chooseStoryText");
      if (storyWrapper) {
        [...storyWrapper].forEach((i) => {
          i.innerHTML = i.textContent.replace(
            /\S/g,
            "<span class='storyLetter'>$&</span>"
          );
          getFadeInChooseStoryText(() =>
            setTimeout(() => (window.stoppedAnimation = true), 1000)
          );
        });
      }
    }

    if (currentSectionTitle === "work" && currentStep === 1) {
      getFadeInFormTen(".formTen", 0, () => {
        //window.engine.start();
        setTimeout(() => (window.stoppedAnimation = true), 1000);
      });
      return;
    }

    //const customSteps = [6, 7, 8, 9];
    if (
      currentSectionTitle === "approach" &&
      window.animation &&
      currentStep < 4
    ) {
      window.animation.way = "forward";
      getFadeInCustomText(() => {
        window.animation._name = "custom_anime";
        setTimeout(() => (window.stoppedAnimation = true), 1000);
      });
      return;
    }

    const textWrapper = document.querySelectorAll(".anime");
    const textWrapper2 = document.querySelectorAll(".anime2");
    if (textWrapper) {
      [...textWrapper].forEach((i) => {
        i.innerHTML = i.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
      });
    }
    if (textWrapper2) {
      [...textWrapper2].forEach((i) => {
        i.innerHTML = i.textContent.replace(
          /\S/g,
          "<span class='letter2'>$&</span>"
        );
      });
    }

    getFadeInMainText(
      () => {
        //   window.engine.start();
        window.animation._name = "anime";
        setTimeout(() => (window.stoppedAnimation = true), 700);
      },

      currentSectionTitle !== "work" ? (currentStep === 0 ? 6000 : 0) : 500
    );
  }, [currentSectionTitle, currentStep]);

  const getTopMainText = () => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 0:
          case 1:
            return window.innerWidth < BREAKPOINTS.tablet ? ["45%"] : ["auto"];
          case 2:
            return window.innerWidth < BREAKPOINTS.tablet ? ["45%"] : ["30%"];
          case 3:
            return ["15%"];
          case 4:
            return ["15%"];
          case 5:
            return ["40%;"];
          default:
            return;
        }
      }
      case "approach": {
        switch (currentStep) {
          case 0:
            return ["50%;"];
          case 1:
            return ["50%"];
          case 2:
            return ["50%;"];
          case 3:
            return ["50%"];
          case 4:
            return ["35%"];
          default:
            return;
        }
      }
      case "work": {
        switch (currentStep) {
          case 0:
            return ["21%", "12%"];
          case 1:
            return ["135px"];
          case 2:
            return ["18%"];
          default:
            return;
        }
      }
      default:
        return;
    }
  };

  const getTopSecondText = () => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 3:
          case 4:
            return ["75%"];
          case 5:
            return ["40%;"];
          default:
            return ["40%"];
        }
      }
      case "approach": {
        switch (currentStep) {
          case 0:
            return ["50%;"];
          case 1:
            return ["50%"];
          case 2:
            return ["50%;"];
          case 3:
            return ["50%"];
          case 4:
            return ["55%"];
          default:
            return ["40%"];
        }
      }
      case "work": {
        switch (currentStep) {
          case 0:
            return ["21%", "12%"];
          case 1:
            return ["135px"];
          case 2:
            return ["18%"];
          default:
            return ["40%"];
        }
      }
      default:
        return;
    }
  };

  const getContinueText = () => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 0:
            return ["60%"];
          case 1:
            return ["60%"];
          case 2:
            return ["80%"];
          case 3:
            return ["90%"];
          case 4:
            return ["83%"];
          case 5:
            return ["50%;"];
          default:
            return;
        }
      }
      case "approach": {
        switch (currentStep) {
          case 0:
            return ["70%;"];
          case 1:
            return ["70%"];
          case 2:
            return ["70%;"];
          case 3:
            return ["70%"];
          case 4:
            return ["55%"];
          default:
            return;
        }
      }
      case "work": {
        switch (currentStep) {
          case 11:
            return ["41%", "32%"];
          case 12:
            return ["235px"];
          case 13:
            return ["38%"];
          default:
            return;
        }
      }
      default:
        return;
    }
  };

  const getTopCustomBlock = () => {
    switch (currentSectionTitle) {
      case "approach": {
        switch (currentStep) {
          case 0:
            return ["50%"];
          case 1:
            return ["52%"];
          case 2:
            return ["56%", "57"];
          case 3:
            return ["47%", "50%"];
          default:
            return ["50%"];
        }
      }
      default:
        return ["50%"];
    }
  };
  const getLeft = () => {
    switch (currentSectionTitle) {
      case "approach": {
        switch (currentStep) {
          case 0:
          case 2:
            return "15%";
          default:
            return;
        }
      }
      case "work": {
        switch (currentStep) {
          case 0:
            return "15%";
          default:
            return;
        }
      }
      default:
        return;
    }
  };
  const getRight = () => {
    switch (currentSectionTitle) {
      case "approach": {
        switch (currentStep) {
          case 1:
          case 3:
            return "15%";
          default:
            return;
        }
      }
      default:
        return;
    }
  };
  const getFontSize = () => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 0:
          case 1:
          case 2:
          case 5:
            return ["36px", "28px", "18px"];
          case 3:
          case 4:
            return ["28px", "21px", "18px"];
          default:
            return;
        }
      }
      case "approach": {
        switch (currentStep) {
          case 0:
          case 1:
          case 2:
          case 3:
            return ["100px"];
          case 4:
            return ["32px", "28px", "18px"];
          default:
            return;
        }
      }
      case "work": {
        switch (currentStep) {
          case 0:
            return {
              title: ["64px", "45px"],
              text: ["24px", "18px"],
              itemText: ["28px", "21px"],
              numText: ["48px", "36px"],
            };
          case 1:
            return ["100px"];
          case 2:
            return ["32px", "28px", "18px"];
          default:
            return;
        }
      }
      default:
        return;
    }
  };
  const getLetterSpacing = () => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
            return "0.07em";
          case 5:
            return "0.02em";
          default:
            return;
        }
      }
      case "approach": {
        switch (currentStep) {
          case 4:
            return "0.04em";
          default:
            return;
        }
      }
      case "work": {
        switch (currentStep) {
          case 1:
            return "0.07em";
          default:
            return;
        }
      }
      default:
        return;
    }
  };
  const getBackground = () => {
    switch (currentStep) {
      default:
        return ["rgba(184, 197, 201, 0.68)", "rgba(184, 197, 201, 1)"];
    }
  };
  const getFocus = () => {
    switch (currentSectionTitle) {
      case "work": {
        switch (currentStep) {
          case 1:
            return "0 0 23px 2px rgba(255,255,255,0.5)";
          default:
            return;
        }
      }
      default:
        return;
    }
  };

  const getMarginId = () => {
    switch (currentSectionTitle) {
      case "approach": {
        switch (currentStep) {
          case 0:
            return { desk: "25px 0", tablet: "0 0 10px 0" };
          case 1:
          case 2:
          case 3:
            return { desk: "25px 0", tablet: "0 0 10px 0" };
          default:
            return { desk: "25px 0", tablet: "25px 0" };
        }
      }
      default:
        return { desk: "25px 0", tablet: "25px 0" };
    }
  };

  const getMarginCustomText = () => {
    switch (currentSectionTitle) {
      case "approach": {
        switch (currentStep) {
          case 0:
          case 1:
          case 2:
          case 3:
            return { desk: "25px 0 10px 0", tablet: "20px 0 0 0" };
          default:
            return { desk: "25px 0 10px 0", tablet: "20px 0 0 0" };
        }
      }
      default:
        return { desk: "25px 0 10px 0", tablet: "20px 0 0 0" };
    }
  };

  const getTextAlign = () => {
    switch (currentSectionTitle) {
      case "work": {
        switch (currentStep) {
          case 0:
            return ["left"];
          default:
            return;
        }
      }
      default:
        return;
    }
  };

  const clickHandler = (e) => {
    if (window.animation.way === "back") return;
    window.animation.way = "back";
    //------
    let target = e.target.classList.contains("storyItem")
      ? e.target
      : e.target.parentElement.classList.contains("storyItem")
      ? e.target.parentElement
      : null;
    if (!target) {
      const candidate = e.target.parentElement;
      target = candidate.parentElement.classList.contains("storyItem")
        ? candidate.parentElement
        : null;
    }
    if (!target) return;

    const allItems = document.querySelectorAll(".storyItem");
    [...allItems].forEach((i) => {
      if (i !== target) {
        const context = i.querySelector(".storyItem-context");
        context.style.opacity = "0.5";
      }
    });
    if (window.innerWidth > BREAKPOINTS.mob) {
      target.style.transform = "scale(1.1)";
    } else {
      target.style.transform = "scale(1.05)";
    }
    //------
    const progressSvgArray = document.querySelectorAll(
      `.styledProgress_${currentStep}`
    );
    getFadeOutFormTen([".footer"], 0, () => null);
    getFadeOutChooseStoryText();
    getFadeOutProgressSvg(progressSvgArray, () => {
      window.animation.reverse();
      window.animation.play();
      window.animation.complete = () => {
        setTimeout(() =>
          dispatch(setProgress(currentStep + 1, currentSectionTitle), 500)
        );
      };
    });
  };

  const formDataValidator = (flag) => {
    if (!flag) return;

    const progressSvgArray = document.querySelectorAll(
      `.styledProgress_${currentStep}`
    );
    getFadeOutProgressSvg(progressSvgArray, () => {
      getFadeOutFormTen([".footer"], 0, () => null);
      getFadeOutFormTen([".formTen"], 100, () => {
        setTimeout(() =>
          dispatch(setProgress(currentStep + 1, currentSectionTitle), 500)
        );
      });
    });
  };

  const mouseLeaveStoryContainer = () => {
    const storyItems = [
      storyItem1.current,
      storyItem2.current,
      storyItem3.current,
      storyItem4.current,
    ];
    const blurTextEl = chooseStoryTextContainer.current.querySelector(
      ".storyBlur"
    );
    chooseStoryTextContainer.current.style.opacity = 1;
    blurTextEl.style.opacity = 0;
    _.each(storyItems, (item) => {
      const blurEl = item.querySelector(".storyBlur");
      item.style.opacity = 1;
      blurEl.style.opacity = 0;
    });
  };

  // const mouseOverStoryItem = (e) => {
  //   if (window.innerWidth < 900) return;
  //   const el = e.target.classList.contains("storyItem")
  //     ? e.target
  //     : e.target.parentElement.classList.contains("storyItem")
  //     ? e.target.parentElement
  //     : null;

  //   if (!el) return;

  //   const blurTextEl = chooseStoryTextContainer.current.querySelector(
  //     ".storyBlur"
  //   );
  //   // chooseStoryTextContainer.current.style.opacity = 0.2;
  //   blurTextEl.style.opacity = 1;
  //   const storyItems = [
  //     storyItem1.current,
  //     storyItem2.current,
  //     storyItem3.current,
  //     storyItem4.current,
  //   ];
  //   _.each(storyItems, (item) => {
  //     const blurEl = item.querySelector(".storyBlur");
  //     if (item !== el) {
  //       // item.style.opacity = 0.2;
  //       blurEl.style.opacity = 1;
  //     } else {
  //       // item.style.opacity = 1;
  //       blurEl.style.opacity = 0;
  //     }
  //   });
  // };

  // const mouseOverStoryItemThrottle = _.throttle((e) => mouseOverStoryItem(e), 1);

  const mouseMoveHandlerStory = (e) => {
    if (window.innerWidth < 900) return;
    const storyItemEl = e.target.classList.contains("storyItem")
      ? e.target
      : e.target.parentElement.classList.contains("storyItem")
      ? e.target.parentElement
      : null;

    if (!storyItemEl) return;
    const el = storyItemEl.querySelector(".storyItem-context");

    if (!el) return;

    const height = el.clientHeight;
    const width = el.clientWidth;

    const xVal = e.clientX - el.getBoundingClientRect().x;
    const yVal = e.clientY - el.getBoundingClientRect().y;

    const yRotation = -5 + 20 * ((xVal - width / 9) / width);
    const xRotation = 10 + -20 * ((yVal - height / 9) / height);

    el.style.transform =
      "perspective(500px) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";
  };

  const mouseMoveHandlerStoryThrottle = _.throttle(
    (e) => mouseMoveHandlerStory(e),
    17
  );

  const mouseLeaveHandlerStory = (e) => {
    if (window.innerWidth < 900) return;
    const storyItemEl = e.target.classList.contains("storyItem")
      ? e.target
      : e.target.parentElement.classList.contains("storyItem")
      ? e.target.parentElement
      : null;

    if (!storyItemEl) return;
    const el = storyItemEl.querySelector(".storyItem-context");

    if (!el) return;
    const transformData = "perspective(500px) rotateX(0deg) rotateY(0deg)";
    setTimeout(() => {
      el.style.transform = transformData;
    }, 100);
  };

  const watchAgain = () => {
    anime
      .timeline()
      .add({
        targets: svgWatch.current,
        rotate: {
          value: 360,
          duration: 800,
          easing: "easeInCubic",
        },
      })
      .finished.then(() => {
        // window.engine.setCurrentStep(0);
        dispatch(setProgress(0, currentSectionTitle));
      });
  };

  const getNextStep = () => {
    const progressSvgArray = document.querySelectorAll(
      `.styledProgress_${currentStep}`
    );
    //getNextStepFromForm(currentStep + 1, progressSvgArray, dispatch);
    // if (getNextStepFromForm(progressSvgArray)) {
    //   setTimeout(
    //     () => dispatch(setProgress(currentStep + 1, currentSectionTitle)),
    //     500
    //   );
    // }
    getFadeOutProgressSvg(progressSvgArray, () => {
      getFadeOutFormTen([".footer"], 0, () => null);
      getFadeOutFormTen([".formTen"], 100, () => {
        setTimeout(
          () => dispatch(setProgress(currentStep + 1, currentSectionTitle)),
          500
        );
      });
    });
  };

  const getBoxMaxWidth = () => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 0:
            return {
              deskXl: { t1: "1200px" },
              deskM: { t1: "1200px" },
              tablet: { t1: "700px" },
              mob: { t1: "325px" },
            };
          case 1:
            return {
              deskXl: { t1: "1200px" },
              deskM: { t1: "1200px", t2: "1200px" },
              tablet: { t1: "580px", t2: "580px" },
              mob: { t1: "270px", t2: "325px" },
            };
          case 2:
            return {
              deskXl: { t1: "1200px" },
              deskM: { t1: "1200px" },
              tablet: { t1: "700px" },
              mob: { t1: "265px" },
            };
          case 3:
            return {
              deskXl: { t1: "770px", t2: "770px" },
              deskM: { t1: "575px", t2: "575px" },
              tablet: { t1: "580px", t2: "580px" },
              mob: { t1: "325px", t2: "325px" },
            };
          case 4:
            return {
              deskXl: { t1: "805px", t2: "770px" },
              deskM: { t1: "630px", t2: "630px" },
              tablet: { t1: "595px", t2: "560px" },
              mob: { t1: "304px", t2: "335px" },
            };
          case 5:
            return {
              deskXl: { t1: "730px" },
              deskM: { t1: "570px" },
              tablet: { t1: "570px" },
              mob: { t1: "314px" },
            };
          default:
            return;
        }
      }
      case "approach": {
        switch (currentStep) {
          case 4:
            return {
              deskXl: { t1: "710px", t2: "770px" },
              deskM: { t1: "620px", t2: "620px" },
              tablet: { t1: "490px", t2: "510px" },
              mob: { t1: "314px", t2: "314px" },
            };
          default:
            return;
        }
      }
      case "work": {
        switch (currentStep) {
          case 1:
            return {
              deskXl: { t1: "1200px" },
              deskM: { t1: "1200px", t2: "1200px" },
              tablet: { t1: "580px", t2: "580px" },
              mob: { t1: "255px" },
            };
          default:
            return {
              deskXl: { t1: "1200px" },
              deskM: { t1: "1200px", t2: "1200px" },
              tablet: { t1: "580px", t2: "580px" },
              mob: { t1: "325px", t2: "325px" },
            };
        }
      }
      default:
        return;
    }
  };

  const getMobGridColumns = () => {
    switch (currentSectionTitle) {
      case "approach": {
        switch (currentStep) {
          case 0:
            return { tablet: "465px" };
          case 1:
            return { tablet: "555px" };
          case 2:
            return { tablet: "555px" };
          case 3:
            return { tablet: "470px" };
          default:
            return;
        }
      }
      default:
        return;
    }
  };

  const getMaxWidthCustomBlock = () => {
    switch (currentSectionTitle) {
      case "approach": {
        switch (currentStep) {
          case 0:
            return "500px";
          case 1:
            return "500px";
          case 2:
            return "500px";
          case 3:
            return "500px";
          default:
            return;
        }
      }
      default:
        return;
    }
  };

  const inputFocusHandler = (e) => {
    if (window.innerWidth > BREAKPOINTS.tablet - 1) return;

    const footerBlurredBlock = document.querySelector(".blurredFooterBlock");
    const progressBarEl = document.querySelector(".progressBar");
    if (footerBlurredBlock) {
      footerBlurredBlock.style.opacity = 0;
    }
    if (progressBarEl) {
      progressBarEl.style.opacity = 0;
    }
  };

  const inputOnfocusoutHandler = (e) => {
    if (window.innerWidth > BREAKPOINTS.tablet - 1) return;

    const footerBlurredBlock = document.querySelector(".blurredFooterBlock");
    const progressBarEl = document.querySelector(".progressBar");
    if (footerBlurredBlock) {
      footerBlurredBlock.style.opacity = 1;
    }
    if (progressBarEl) {
      progressBarEl.style.opacity = 1;
    }
  };

  const getHomeContent = () => {
    // {
    //   console.log(getBoxMaxWidth());
    // }
    switch (currentStep) {
      case 0:
        return (
          <>
            {currentSection?.fields[currentStep].fields.mainText && (
              <MainText
                className="anime"
                $color={currentTheme.textColor}
                $top={getTopMainText()}
                $step={currentStep}
                $fontSize={getFontSize()}
                $left={getLeft()}
                $letterSpacing={getLetterSpacing()}
                $boxMaxWidth={getBoxMaxWidth()}
              >
                {currentSection?.fields[currentStep].fields.mainText}
              </MainText>
            )}
            <Continue
              className="anime"
              onClick={getNextStep}
              $top={getContinueText()}
            >
              Learn More >>
              <ContinueArrow />
            </Continue>
          </>
        );
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return (
          <>
            {currentSection.fields[currentStep].fields.mainText && (
              <MainText
                className="anime"
                $color={currentTheme.textColor}
                $top={getTopMainText()}
                $step={currentStep}
                $fontSize={getFontSize()}
                $left={getLeft()}
                $letterSpacing={getLetterSpacing()}
                $boxMaxWidth={getBoxMaxWidth()}
              >
                {currentSection.fields[currentStep].fields.mainText}
              </MainText>
            )}
            {currentSection.fields[currentStep].fields.subText && (
              <MainTextSecond
                className="anime2"
                $color={currentTheme.textColor}
                $top={getTopSecondText()}
                $step={currentStep}
                $fontSize={getFontSize()}
                $left={getLeft()}
                $letterSpacing={getLetterSpacing()}
                $boxMaxWidth={getBoxMaxWidth()}
              >
                {currentSection.fields[currentStep].fields.subText}
              </MainTextSecond>
            )}
            {currentSection.fields[currentStep].fields.mainText &&
              currentStep !== 5 && (
                <Continue
                  className="anime"
                  onClick={getNextStep}
                  $top={getContinueText()}
                >
                  Learn More >>
                  <ContinueArrow />
                </Continue>
              )}
            {currentSection.fields[currentStep].fields.mainText &&
              currentStep == 5 && (
                <ScheduleBtn
                  $bg={currentTheme.bgScheduleBtn}
                  $color={currentTheme.menuBtnColor}
                  onClick={onScheduleClickHandler}
                  $lineBg={currentTheme.bgScheduleBtn}
                >
                  <ScheduleBtnBorder $color={currentTheme.bgScheduleBtn} />
                  <span> LETS TALK </span>
                </ScheduleBtn>
              )}
          </>
        );
      default:
        return;
    }
  };

  const getApproachContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <CustomBlockWrapper
              $top={getTopCustomBlock()}
              $left={getLeft()}
              $maxWidth={getMaxWidthCustomBlock()}
            >
              <CustomBlock
                className="customBlock"
                $align={"flex-start"}
                $mobGridCols={getMobGridColumns()}
              >
                {/* <CustomText
                  className="custom_anime"
                  $margin={getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description2}
                </CustomText> */}
                <CustomID $margin={getMarginId()} className="custom_anime">
                  {currentSection.fields[currentStep].fields.customNumber}
                </CustomID>

                {/* <AnimatedStrategyText
                  ref={strategySvg}
                  className="svgText"
                  $color={currentTheme.textColor}
                /> */}

                <AnimtateOutcomeText
                  className="svgText"
                  $color={currentTheme.textColor}
                />

                <CustomText
                  className="custom_anime"
                  $margin={getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description1}
                </CustomText>
                {/* <CustomText
                  className="custom_anime"
                  $margin={getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description4}
                </CustomText> */}
              </CustomBlock>
            </CustomBlockWrapper>
            <CustomBlockMobGradient />
          </>
        );
      case 1:
        return (
          <>
            <CustomBlockWrapper
              $top={getTopCustomBlock()}
              $right={getRight()}
              $maxWidth={getMaxWidthCustomBlock()}
            >
              <CustomBlock
                className="customBlock"
                $top={getTopCustomBlock()}
                $align={"flex-end"}
                $mobGridCols={getMobGridColumns()}
                $maxWidth={getMaxWidthCustomBlock()}
              >
                <CustomID
                  $margin={getMarginId()}
                  className="custom_anime"
                  $step={currentStep}
                >
                  {currentSection.fields[currentStep].fields.customNumber}
                </CustomID>

                <AnimatedPartnersText
                  className="svgText"
                  $color={currentTheme.textColor}
                />

                <CustomText
                  className="custom_anime"
                  $right={getRight()}
                  $margin={getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description1}
                </CustomText>
                {/* <CustomText
                  className="custom_anime"
                  $right={getRight()}
                  $margin={getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description2}
                </CustomText> */}
              </CustomBlock>
            </CustomBlockWrapper>
            <CustomBlockMobGradient />
          </>
        );
      case 2:
        return (
          <>
            <CustomBlockWrapper
              $top={getTopCustomBlock()}
              $left={getLeft()}
              $maxWidth={getMaxWidthCustomBlock()}
            >
              <CustomBlock
                className="customBlock"
                $top={getTopCustomBlock()}
                $left={getLeft}
                $align={"flex-start"}
                $mobGridCols={getMobGridColumns()}
                $maxWidth={getMaxWidthCustomBlock()}
              >
                {/* <CustomText
                  className="custom_anime"
                  $margin={getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description2}
                </CustomText>
                <CustomText
                  className="custom_anime"
                  $margin={getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description3}
                </CustomText> */}
                <CustomID
                  $margin={getMarginId()}
                  className="custom_anime"
                  $step={currentStep}
                >
                  {currentSection.fields[currentStep].fields.customNumber}
                </CustomID>
                <AnimatedVisionText
                  className="svgText"
                  $color={currentTheme.textColor}
                />
                <CustomText
                  className="custom_anime"
                  $margin={getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description1}
                </CustomText>
              </CustomBlock>
            </CustomBlockWrapper>
            <CustomBlockMobGradient />
          </>
        );
      case 3:
        return (
          <>
            <CustomBlockWrapper
              $top={getTopCustomBlock()}
              $right={getRight()}
              $maxWidth={getMaxWidthCustomBlock()}
            >
              <CustomBlock
                className="customBlock"
                $top={getTopCustomBlock()}
                $right={getRight()}
                $align={"flex-end"}
                $mobGridCols={getMobGridColumns()}
                $maxWidth={getMaxWidthCustomBlock()}
              >
                {/* <CustomText className="custom_anime" $right={getRight()}>
                  {currentSection.fields[currentStep].fields.description2}
                </CustomText> */}

                <CustomID $margin={getMarginId()} className="custom_anime">
                  {currentSection.fields[currentStep].fields.customNumber}
                </CustomID>

                <AnimatedVeteransText
                  className="svgText"
                  $color={currentTheme.textColor}
                />
                <CustomText className="custom_anime" $right={getRight()}>
                  {currentSection.fields[currentStep].fields.description1}
                </CustomText>
                {/* <AnimatedServiceText
                  className="svgText2"
                  $color={currentTheme.textColor}
                /> */}
                {/* <CustomText className="custom_anime" $right={getRight()}>
                  {currentSection.fields[currentStep].fields.description3}
                </CustomText>
                <CustomText className="custom_anime" $right={getRight()}>
                  {currentSection.fields[currentStep].fields.description4}
                </CustomText> */}
              </CustomBlock>
            </CustomBlockWrapper>
            <CustomBlockMobGradient />
          </>
        );

      case 4:
        return (
          <>
            {currentSection.fields[currentStep].fields.mainText && (
              <MainText
                className="anime"
                $color={currentTheme.textColor}
                $top={getTopMainText()}
                $step={currentStep}
                $fontSize={getFontSize()}
                $left={getLeft()}
                $letterSpacing={getLetterSpacing()}
                $boxMaxWidth={getBoxMaxWidth()}
              >
                {currentSection.fields[currentStep].fields.mainText}
              </MainText>
            )}
            {currentSection.fields[currentStep].fields.subText && (
              <MainTextSecond
                className="anime2"
                $color={currentTheme.textColor}
                $top={getTopSecondText()}
                $step={currentStep}
                $fontSize={getFontSize()}
                $left={getLeft()}
                $letterSpacing={getLetterSpacing()}
                $boxMaxWidth={getBoxMaxWidth()}
              >
                {currentSection.fields[currentStep].fields.subText}
              </MainTextSecond>
            )}

            {currentSection.fields[currentStep].fields.mainText && (
              <ScheduleBtn
                $bg={currentTheme.bgScheduleBtn}
                $color={currentTheme.menuBtnColor}
                onClick={onScheduleClickHandler}
                $lineBg={currentTheme.bgScheduleBtn}
              >
                <ScheduleBtnBorder $color={currentTheme.bgScheduleBtn} />
                <span> LETS TALK </span>
              </ScheduleBtn>
            )}
          </>
        );
      default:
        return;
    }
  };

  const getWorkContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <ChooseStoryWrapper>
            <ChooseStoryTextContainer ref={chooseStoryTextContainer}>
              <ChooseStoryText
                className="chooseStoryText"
                $color={currentTheme.textColor}
                $top={getTopMainText()[1]}
                $step={currentStep}
                $fontSize={getFontSize().text}
                $left={getLeft()}
                $letterSpacing={getLetterSpacing()}
                $textAlign={getTextAlign()[0]}
              >
                {currentSection.fields[currentStep].fields.subText}
              </ChooseStoryText>
              <span className="storyBlur" />
            </ChooseStoryTextContainer>
            <ChooseStoryTitle
              className="anime"
              $color={currentTheme.textColor}
              $top={getTopMainText()[0]}
              $step={currentStep}
              $fontSize={getFontSize().title}
              $left={getLeft()}
              $letterSpacing={getLetterSpacing()}
            >
              {currentSection.fields[currentStep].fields.mainText}
            </ChooseStoryTitle>
            <ChooseStory
              className="chooseStory"
              onMouseOut={mouseLeaveStoryContainer}
            >
              <ChooseStoryItem
                onClick={clickHandler}
                onMouseMove={mouseMoveHandlerStoryThrottle}
                onMouseLeave={mouseLeaveHandlerStory}
                className="storyItem"
                ref={storyItem1}
              >
                <StoryContext
                  className="storyItem-context"
                  $fontSize={getFontSize()}
                >
                  <span className="num">01.</span>
                  <span className="text1">
                    {currentSection.fields[currentStep].fields.description1}
                  </span>
                </StoryContext>
                <span className="storyBlur" />
                <FocusHolder />
              </ChooseStoryItem>
              <ChooseStoryItem
                onClick={clickHandler}
                onMouseMove={mouseMoveHandlerStoryThrottle}
                onMouseLeave={mouseLeaveHandlerStory}
                className="storyItem"
                ref={storyItem2}
              >
                <StoryContext
                  className="storyItem-context"
                  $fontSize={getFontSize()}
                >
                  <span className="num">02.</span>
                  <span className="text2">
                    {currentSection.fields[currentStep].fields.description2}
                  </span>
                </StoryContext>
                <span className="storyBlur" />
                <FocusHolder />
              </ChooseStoryItem>
              <ChooseStoryItem
                onClick={clickHandler}
                onMouseMove={mouseMoveHandlerStoryThrottle}
                onMouseLeave={mouseLeaveHandlerStory}
                className="storyItem"
                ref={storyItem3}
              >
                <StoryContext
                  className="storyItem-context"
                  $fontSize={getFontSize()}
                >
                  <span className="num">03.</span>
                  <span className="text3">
                    {currentSection.fields[currentStep].fields.description3}
                  </span>
                </StoryContext>
                <span className="storyBlur" />
                <FocusHolder />
              </ChooseStoryItem>
              <ChooseStoryItem
                onClick={clickHandler}
                onMouseMove={mouseMoveHandlerStoryThrottle}
                onMouseLeave={mouseLeaveHandlerStory}
                className="storyItem"
                ref={storyItem4}
              >
                <StoryContext
                  className="storyItem-context"
                  $fontSize={getFontSize()}
                >
                  <span className="num">04.</span>
                  <span className="text4">
                    {currentSection.fields[currentStep].fields.description4}
                  </span>
                </StoryContext>
                <span className="storyBlur" />
                <FocusHolder />
              </ChooseStoryItem>
            </ChooseStory>
          </ChooseStoryWrapper>
        );
      case 1:
        return (
          <>
            <FormContainer
              className="formTen"
              $color={currentTheme.textColor}
              $bg={getBackground()}
            >
              <ScheduleHeader $color={currentTheme.textColor}>
                {currentSection.fields[currentStep].fields.mainText}
              </ScheduleHeader>
              <FormHeader $color={currentTheme.textColor}>
                {currentSection.fields[currentStep].fields.subText}
              </FormHeader>
              <ScheduleForm
                color={currentTheme.textColor}
                background={getBackground()}
                focus={getFocus()}
                inputFocusHandler={inputFocusHandler}
                inputOnfocusoutHandler={inputOnfocusoutHandler}
                validateData={formDataValidator}
              />
            </FormContainer>
          </>
        );
      case 2:
        return (
          <>
            <MainText
              className="anime"
              $color={currentTheme.textColor}
              $top={getTopMainText()}
              $step={currentStep}
              $fontSize={getFontSize()}
              $left={getLeft()}
              $boxMaxWidth={getBoxMaxWidth()}
            >
              {currentSection.fields[currentStep].fields.mainText}
            </MainText>
            <WatchAgain onClick={watchAgain}>
              {currentSection.fields[currentStep].fields.subText}
              <SvgWatchAgain ref={svgWatch} />
            </WatchAgain>
          </>
        );

      default:
        return;
    }
  };

  switch (currentSectionTitle) {
    case "home": {
      return getHomeContent();
    }
    case "approach": {
      return getApproachContent();
    }
    case "work": {
      return getWorkContent();
    }
    default:
      return;
  }
};

export default App;

const FormContainer = styled.div`
  position: absolute;
  top: 100px;
  padding: 0 78px;
  max-width: 610px;
  opacity: 0;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    width: 92vmin;
    max-width: 92vmin;
    padding: 18px 18px 80px 18px;
    border-color: transparent;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    width: 100%;
  }
`;
const ScheduleHeader = styled.div`
  color: ${({ $color }) => $color};
  font-size: 24px;
  letter-spacing: 0.07em;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    margin-bottom: 40px;
    font-size: 21px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 18px;
  }
`;

const FormHeader = styled.div`
  color: ${({ $color }) => $color};
  font-size: 45px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 28px;
  }
`;

const AnimatedSVG = css`
  display: inline-block;
  stroke: rgba(255, 255, 255, 0);
`;

const AnimtateOutcomeText = styled(OutcomeSVG)`
  width: auto;
  height: auto;
  transform-origin: left;
  ${AnimatedSVG};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 2;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-row-start: 2;
    margin: 20px 0px 0px !important;
  }
`;
const AnimatedPartnersText = styled(PartnersSVG)`
  width: auto;
  height: auto;
  transform-origin: right;
  ${AnimatedSVG};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 2;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-row-start: 2;
    margin: 20px 0px 0px !important;
  }
`;
const AnimatedVisionText = styled(VisionSVG)`
  width: auto;
  height: auto;
  transform-origin: left;
  ${AnimatedSVG};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 2;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-row-start: 2;
    margin: 20px 0px 0px !important;
  }
`;
const AnimatedVeteransText = styled(VeteransSVG)`
  width: auto;
  height: auto;
  transform-origin: right;
  ${AnimatedSVG};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 2;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-row-start: 2;
    margin: 20px 0px 0px !important;
  }
`;
// const AnimatedServiceText = styled(ServiceSvg)`
//   width: 400px;
//   height: 100px;
//   transform-origin: right;
//   ${AnimatedSVG};
//   margin-bottom: 10px;

//   @media (max-width: ${BREAKPOINTS.tablet}px) {
//     grid-row-start: 3;
//     width: 286px;
//     height: 86px;
//   }
//   @media (max-width: ${BREAKPOINTS.mob}px) {
//     grid-row-start: 3;
//     width: 65%;
//     height: 58px;
//   }
// `;
const MainText = styled.div`
  opacity: 0;
  position: fixed;
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize[0]};
  top: ${({ $top }) => $top};
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "center")};
  left: ${({ $left }) => $left};
  max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.deskXl.t1};
  white-space: pre-line;
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: 45px;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    font-size: ${({ $fontSize }) => $fontSize[1]};
    max-width: ${({ $boxMaxWidth }) =>
      $boxMaxWidth.deskM ? $boxMaxWidth.deskM.t1 : $boxMaxWidth.deskXl.t1};
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.tablet.t1};
    font-size: ${({ $fontSize }) => $fontSize[1]};
    top: ${({ $top }) => $top};
    line-height: 42px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: ${({ $fontSize }) => $fontSize[2]};
    max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.mob.t1};
    line-height: 27px;
  }
`;
const MainTextSecond = styled(MainText)`
  max-width: ${({ $boxMaxWidth }) =>
    $boxMaxWidth.deskXl.t2 ? $boxMaxWidth.deskXl.t2 : "80%"};

  @media (max-width: ${BREAKPOINTS.xl}px) {
    max-width: ${({ $boxMaxWidth }) =>
      $boxMaxWidth.deskM ? $boxMaxWidth.deskM.t2 : "80%"};
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: ${({ $boxMaxWidth }) =>
      $boxMaxWidth.tablet.t2 ? $boxMaxWidth.tablet.t2 : "80%"};
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    max-width: ${({ $boxMaxWidth }) =>
      $boxMaxWidth.mob.t2 ? $boxMaxWidth.mob.t2 : "80%"};
  }
`;

const Continue = styled.div`
  color: #fff;
  position: absolute;
  top: ${({ $top }) => $top};
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "center")};
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  padding-bottom: 5px;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 4px;
    background: #fff;
    transition: 0.7s ease;
    opacity: 1;
  }
`;

const ContinueArrow = styled.span`
  content: "\ea3c";
  font-size: 28px;
  height: 20px;
  width: 5px;
  @media (min-width: ${BREAKPOINTS.tablet}px) {
    &:hover {
      &:after {
        width: 0;
        opacity: 0;
      }
      svg {
        transform: rotate(45deg);
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    bottom: 78px;
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    bottom: 78px;
  }
`;

const CallActionBtn = styled.a`
  color: ${({ $color }) => $color};
  font-size: 15px;
  letter-spacing: 3px;
  text-decoration: none;
  justify-self: center;
  position: relative;
  display: block;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease;

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
    font-size: 15px;
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
`;

const ScheduleBtnAnimation = keyframes`
	0%   { stroke-dashoffset: 520;}
	100% {stroke-dashoffset: 0;}
`;

const ScheduleBtnBorder = styled(RightBtnSvg)`
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0%;
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

const ScheduleBtn = styled(CallActionBtn)`
  background: ${({ $bg }) => $bg};
  padding: 13px 15px;
  border-radius: 67px;
  white-space: nowrap;
  border: 1px solid transparent;
  position: relative;
  transition: 0.2s ease-in-out;

  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    &:hover {
      background: none;

      ${ScheduleBtnBorder} {
        animation: ${ScheduleBtnAnimation} 0.5s ease-in;
        animation-direction: normal;
        stroke: ${({ $bg }) => $bg};
        stroke-dashoffset: 0;
      }
    }
    &:active {
      background: ${({ $bg }) => $bg};
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
grid `
        : `
none `};
    align-self: stretch;
    align-items: center;
    transition: 0.3s ease;
    background: none !important;
    color: var(--block1-text-primary);
    font-size: 21px;
    border-radius: 0 0 45px 45px;
    border-bottom: 1px solid var(--block1-text-secondary);

    & > span {
      padding-left: 21px;
    }
  }
`;

const WatchAgain = styled.div`
  color: #fff;
  position: absolute;
  bottom: 4%;
  text-decoration: none;
  font-size: 28px;
  cursor: pointer;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 4px;
    background: #fff;
    transition: 0.7s ease;
    opacity: 1;
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    &:hover {
      &:after {
        width: 0;
        opacity: 0;
      }
      svg {
        transform: rotate(45deg);
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    bottom: 78px;
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    bottom: 78px;
  }
`;
const SvgWatchAgain = styled(WatchAgainSvg)`
  stroke: #fff;
  width: 25px;
  height: 25px;
  display: inline-block;
  position: absolute;
  right: -40px;
  top: 8px;
  transition: 0.2s linear;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    width: 20px;
    height: 20px;
    top: 2px;
  }
`;
const ChooseStoryWrapper = styled.div`
  padding-left: 30px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    position: absolute;
    top: 14%;
    width: 90%;
    padding-left: 0;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    width: 100%;
  }
`;
const ChooseStoryTextContainer = styled.div`
  position: relative;

  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    .storyBlur {
      display: block;
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      border: none;
      transition: 0.2s ease;
    }
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    .storyBlur {
      display: none;
    }
  }
`;
const ChooseStoryText = styled.div`
  opacity: 0;
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize[0]};
  text-align: left;
  max-width: 1200px;
  white-space: pre-line;
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: 35px;
  padding: 0 0 2rem 1.2rem;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    font-size: ${({ $fontSize }) => $fontSize[1]};
    line-height: 27px;
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: 85%;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 14px;
    padding: 0 0 1.5rem 1rem;
    line-height: 20px;
  }
`;
const ChooseStoryTitle = styled.div`
  opacity: 0;
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize[0]};
  text-align: left;
  max-width: 1200px;
  white-space: pre-line;
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: 35px;
  padding: 0 0 0 1.2rem;
  margin-bottom: 5px;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    font-size: ${({ $fontSize }) => $fontSize[1]};
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: 85%;
    margin-top: 5%;
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) and (orientation: landscape) {
    margin-top: 0;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    max-width: 100%;
    font-size: 8vmin;
    padding: 0 0 1rem 1rem;
    margin-top: 0;
  }
`;
const ChooseStory = styled.div`
  top: 260px;
  display: grid;
  grid-template-columns: repeat(2, 570px);
  column-gap: 0;
  row-gap: 0;
  transition: 0.2s ease-in-out;
  transform-style: preserve-3d;
  transform-origin: center;
  opacity: 0;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: 100%;
    margin: 5% auto 0 auto;
    grid-template-columns: repeat(2, 49%);
    grid-row-gap: 10%;
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) and (orientation: landscape) {
    margin: 0 auto 0 auto;
    grid-row-gap: 0;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-template-columns: 1fr;
    grid-row-gap: 0;
    margin-bottom: 100px;
  }
`;
const ChooseStoryItem = styled.div`
  position: relative;
  cursor: pointer;
  transition: 0.2s ease;

  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    .storyBlur {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      border: none;
      transition: 0.2s ease;
    }
  }
`;
const StoryContext = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: ${({ $fontSize }) => $fontSize.itemText[0]};
  line-height: 40px;
  z-index: 0;
  transition: all 0.2s ease;
  transform-style: preserve-3d;
  padding: 2.5rem 0 0 1.2rem;

  & span.num {
    font-size: ${({ $fontSize }) => $fontSize.numText[0]};
    border-bottom: 1px solid #fff;
    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 85%;
    line-height: normal;
  }

  & span[class^="text"] {
    font-size: ${({ $fontSize }) => $fontSize.itemText[0]};
    max-width: 490px;
  }

  @media (max-width: ${BREAKPOINTS.xl}px) {
    font-size: ${({ $fontSize }) => $fontSize.itemText[1]};
    line-height: 35px;

    & span.num {
      font-size: ${({ $fontSize }) => $fontSize.numText[1]};
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    & span[class^="text"] {
      font-size: ${({ $fontSize }) => $fontSize.itemText[1]};
      max-width: 410px;
    }
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    & span.num {
      width: 95%;
    }
    & span[class^="text"] {
      max-width: 100%;
    }
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    padding: 0 1rem 1.5rem 1rem;

    & span.num {
      font-size: 28px;
    }
    & span[class^="text"] {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
const FocusHolder = styled.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    display: none;
  }
`;
const CustomBlockWrapper = styled.div`
  position: absolute;
  top: ${({ $top }) => $top[0]};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  transform: translateY(-50%);
  max-width: ${({ $maxWidth }) => $maxWidth};

  @media (max-width: ${BREAKPOINTS.xl}px) {
    top: ${({ $top }) => $top[1]};
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    left: 70px;
    top: 65%;
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) and (orientation: landscape) {
    top: 60%;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    left: 4%;
    top: 96%;
    //bottom: 160px;
    padding-left: 20px;
    backdrop-filter: blur(14px);
  }
`;
const CustomBlockMobGradient = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.mob}px) {
    display: block;
    width: 100%;
    height: 72px;
    position: fixed;
    //border: 1px solid red;
    backdrop-filter: blur(4px);
    bottom: 0;
    left: 0;
  }
`;
const CustomBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100%;
  transition: left 1s, right 1s;
  align-items: ${({ $align }) => $align};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    display: grid;
    grid-template-columns: ${({ $mobGridCols }) => $mobGridCols.tablet};
    grid-template-rows: repeat(6, auto);
    max-width: 90%;
    //left: 70px;
    transform: translateX(0) translateY(0);
    //top: 42%;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    left: 25px;
    grid-template-columns: 100%;
    top: 39%;
    margin-bottom: 40px;
    padding-bottom: 100px;
  }
`;
const CustomText = styled.div`
  position: relative;
  font-size: 21px;
  line-height: 31px;
  color: #fff;
  margin: ${({ $margin }) => ($margin ? $margin.desk : "15px 0 0 0")};
  opacity: 0;
  text-align: ${({ $right }) => ($right ? "right" : "left")};
  letter-spacing: 1px;

  &:after {
    position: none;
    content: "";
    left: -15px;
    top: 12px;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    margin: ${({ $margin }) => ($margin ? $margin.tablet : "15px 0 0 0")};
    font-size: 18px;
    text-align: left;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 14px;
    margin: 0;
  }
`;
const CustomID = styled.div`
  font-size: 48px;
  margin: ${({ $margin }) => $margin.desk};
  opacity: 0;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 1;
    font-size: 36px;
    margin: ${({ $margin }) => $margin.tablet};
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-row-start: 1;
    font-size: 28px;
  }
`;
