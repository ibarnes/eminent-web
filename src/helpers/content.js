import { lightTheme, darkTheme, BREAKPOINTS } from "../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import Contentful from "../helpers/contentful";
import {
  setMenuData,
  setStepsTextData,
  setScheduleData,
  setLightThemeData,
  setDarkThemeData,
  setHomeSection,
  setCurrentSection,
  setCurrentSectionTitle,
  setCurrentThemeData,
} from "../store/actions/actionCreator";

export const getThemeContent = (dispatch) => {
  const _instance = Contentful.getInstance();

  //Get Menu
  _instance.client.getEntries({ content_type: "menu" }).then((res) => {
    const menu = res.items.reduce((acc, prev) => {
      acc = {
        ...acc,
        [prev.fields.title]: prev.fields,
      };

      return acc;
    }, {});

    if (menu) {
      dispatch(setMenuData(menu));
    }
  });


  //Get Schedule Form
  _instance.client.getEntries({ content_type: "scheduleForm" }).then((res) => {
    const scheduleForm = res.items.reduce((acc1, prev1) => {
      acc1 = {
        ...acc1,
        [prev1.fields.title]: prev1.fields,
      };

      return acc1;
    }, {});
    if (scheduleForm) {
      dispatch(setScheduleData(scheduleForm));
    }
  });

  //Set themes
  dispatch(setDarkThemeData(darkTheme));
  dispatch(setLightThemeData(lightTheme));
};

export const getSectionContent = (currentSectionTitle, dispatch) => {
  const _instance = Contentful.getInstance();
  switch (currentSectionTitle) {
    case "home": {
      //Get Home Section and Steps
      _instance.client
        .getEntries({
          links_to_entry: "1eYjwaTrLeIGNNHo6UWMDO",
          select: "fields",
          order: "fields.id",
          content_type: "homePage",
        })
        .then((entries) => {
    
          const sectionItems = {
            fields: entries.items,
            title: "home",
            theme: "dark",
          };
     
          if (sectionItems) {
            dispatch(setCurrentSection(sectionItems));
            dispatch(setCurrentSectionTitle(currentSectionTitle));
            dispatch(setCurrentThemeData(darkTheme));
            console.log("Theme Dark");
          }
        })
        .catch(console.error);
      break;
    }
    case "approach": {
      //Get Approach Section and Steps
      _instance.client
        .getEntries({
          links_to_entry: "64tnedEEonSg9Qt1CPaBql",
          select: "fields",
          order: "fields.id",
          content_type: "homePage",
        })
        .then((entries) => {
          const sectionItems = {
            fields: entries.items,
            title: "approach",
            theme: "light",
          };
    
          if (currentSectionTitle == "approach" && sectionItems) {
            dispatch(setCurrentSection(sectionItems));
            dispatch(setCurrentSectionTitle(currentSectionTitle));
            dispatch(setCurrentThemeData(lightTheme));
            console.log("Theme Light");
          }
        })
        .catch(console.error);
      break;
    }
    default:
      return;
  }
};