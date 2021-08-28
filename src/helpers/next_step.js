import {
  getFadeOutCustomText,
  getFadeOutFormTen,
  getFadeOutMainText,
  getFadeOutProgressSvg,
} from "./animations";
import { setProgress } from "../store/actions/actionCreator";

export const getNextStepFromForm = (progressSvgArray) => {
  getFadeOutProgressSvg(progressSvgArray, () => {
    getFadeOutFormTen([".footer"], 0, () => null);
    getFadeOutFormTen([".formTen"], 100, () => null);
    // getFadeOutFormTen([".formTen"], 100, () => {
    //   setTimeout(
    //     () => store.dispatch(setProgress(nextStep, currentSectionTitle)),
    //     500
    //   );
    // });

    return;
  });
};

export const getStandardNextStep = (
  nextStep,
  currentSectionTitle,
  dispatch
) => {};
