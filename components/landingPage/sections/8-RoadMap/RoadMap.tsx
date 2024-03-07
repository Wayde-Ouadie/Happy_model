// global resources
import React, { useState, useEffect, useRef } from "react";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import MapStyle from "./RoadMap.module.scss";
const cg = StyleNameGestion(MapStyle);

import { useI18n } from "helpers/hooks";

import MapCompoment from "./map";

const RoadMap = ({}) => {
  const {
    sections: { roadMap },
  } = useI18n();

  return (
    <>
      <div className={cg("container", "roadMap")}>
        <div className={cg("head", "roadMap")}>
          <h2 className={cg("title", "head")}>{roadMap.title}</h2>
          <p className={cg("description", "head")}>{roadMap.description}</p>
        </div>
        <div className={cg("map", "roadMap")}>
          <MapCompoment roadMap={roadMap} />
        </div>
      </div>
    </>
  );
};

export default RoadMap;
