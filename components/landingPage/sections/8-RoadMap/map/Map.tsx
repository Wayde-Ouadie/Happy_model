// global resources
import React, { useCallback, useEffect, useRef, useState } from "react";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import MapStyle from "./Map.module.scss";
const cg = StyleNameGestion(MapStyle);

import Draw from "./Draw";
import { useContainerDimensions, useAbsoluteHeight } from "helpers/hooks";

// const widthCenterSvg = 4;
const widthHeadOfSvg = 51;

const Item = ({ index, stage, calculDimensionSvg, screen }) => {
  return (
    <>
      <li
        key={index}
        className={cg(`${index + 1}`, "stageContent", `grid_col_of_map_col`)}
      >
        <div className={cg(`text`, "stage")}>
          <h4 className={cg("title", "stage")}>{stage.title}</h4>
          <p className={cg("description", "stage")}>{stage.description}</p>
        </div>
        <div className={cg(`image`, "stage")}>
          <Draw
            name={`stage` + (index + 1)}
            screen={screen}
            calculDimensionSvg={calculDimensionSvg(index)}
          />
        </div>
      </li>
    </>
  );
};

const toFixedNumber = (num ,digits, base = 10) => {
  var pow = Math.pow(base, digits);
  return Math.round(num * pow) / pow;
}
const Map = ({ roadMap }) => {
  const ref = useRef();

 
  const dimension = useContainerDimensions(ref);
  const [widthCenterSvg, setWidthCenterSvg] = useState<number>(4);
  const [screen, setScreen] = useState<'mobile' | 'laptop'>();

  const convertPourcentToPixel = useCallback<(pourcent: number) => number>((pourcent) => {
    return toFixedNumber((pourcent * dimension.width / 100), 20);
  },[dimension.width])
  const calculDimensionSvg = useCallback(
    (index) => (width: number, height: number) => {
      const newWidth = convertPourcentToPixel((width * widthCenterSvg) / widthHeadOfSvg);
      const newHeight = newWidth * height / width;
      return { width: newWidth, height: newHeight };
    },
    [dimension.width, widthCenterSvg]
  );
  useEffect(() => {
    if(dimension.width > 1380){
      setWidthCenterSvg(3.9);
    } else if (dimension.width > 943 ){
      setWidthCenterSvg(3.8);
    } else if(dimension.width > 576 ) {
      setWidthCenterSvg(7);
    } else {
      setWidthCenterSvg(9);
    }
  }, [dimension.width]);
  useEffect(() => {
    function generateSize() {
      if(innerWidth > 1024){
        setScreen('laptop');
      }else {
        setScreen('mobile');
      }
    }
    generateSize();
    window.addEventListener('resize', generateSize);
    return () => window.removeEventListener('resize', generateSize);
  }, []);
  return (
    <>
      <ul className={cg("content", "map", "grid_col_of_map")} ref={ref}>
        {roadMap.stages.map((stage, index) => {
          return <Item screen={screen} key={index} stage={stage} index={index} calculDimensionSvg={calculDimensionSvg}/>;
        })}
      </ul>
      <style>
        {`
          .grid_col_of_map{
            grid-template-columns: repeat(1, 1fr) ${convertPourcentToPixel(widthCenterSvg)}px;
          }
          .grid_col_of_map_col{
            grid-template-columns: repeat(6, 1fr) ${convertPourcentToPixel(widthCenterSvg)}px;
          }
          @media (min-width: 1024px) {
            .grid_col_of_map{
              grid-template-columns: repeat(1, 1fr) ${convertPourcentToPixel(widthCenterSvg)}px repeat(1, 1fr);
            }
            .grid_col_of_map_col{
              grid-template-columns: repeat(6, 1fr) ${convertPourcentToPixel(widthCenterSvg)}px repeat(6, 1fr)
            }
          }
        `}
      </style>
    </>
  );
};

export default Map;
