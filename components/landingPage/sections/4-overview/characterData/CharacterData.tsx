// global resources
import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import CharacterDataStyle from "./CharacterData.module.scss";
const cg = StyleNameGestion(CharacterDataStyle);

import { motion, AnimatePresence } from "framer-motion";

import { getNftCart as getNftCartImage } from "public/nftCart";
import { COLORS, RARITY } from "lib/db";

import flame from "public/icon/flame.svg";

import SvgBack from "./Back";
import Animation from "../Animation";

const WidgetData = ({ title, subTitle = null, type, children }) => {
  return (
    <>
      <div className={cg(type, "widget")}>
        <div className={cg("title")}>
          <h4>{title}</h4>
        </div>
        <div className={cg("content")}>
          {subTitle && <h6>{subTitle}</h6>}
          <div className={cg("child")}>{children}</div>
        </div>
      </div>
    </>
  );
};




const Content = ({ content, goToColor, dataRarity, isChange, widgets, color }) => {
  const Widget = useMemo(() => ({
    Attribute: () => {
      return (
        <>
          <Animation name="opacity" isChange={isChange}>
            <p className={cg("tag")}>{dataRarity.pseudoName}</p>
          </Animation>
        </>
      )
    },
    Tags: () => {
      return (
        <>
          <ul className={cg("tags")}>
            {color.tags.map((t, index) => (
              <AnimatePresence key={t + index} custom={isChange} mode='wait' >
                <Animation name="opacity" isChange={isChange}>
                  <li className={"item"} >
                    {t}
                  </li>
                </Animation>
              </AnimatePresence>
            ))}

          </ul>
        </>
      )
    },
    Color: () => {
      return (
        <>
          <ul className={cg("colors")}>
            {dataRarity.colors.map((c, index) => (
              <li
                key={c + index}
                onClick={() => goToColor(index)}
                className={cg(c.name, "itemColor")}
              >
                {" "}
              </li>
            ))}
          </ul>
        </>
      )
    }
  }), [color, isChange[0], isChange[1]])

  return (
    <>
      <div className={cg('content')}>
        {
          widgets.map(w => (
            <>
              <WidgetData type={w.widget} title={content[w.id].title} subTitle={content[w.id].subTitle}>
                {React.createElement(Widget[w.widget], {})}
              </WidgetData>
            </>
          ))
        }
      </div>
    </>
  )
}

const CharacterData = ({
  content: {
    widget,
  },
  widgets,
  color,
  dataRarity,
  isChange,
  goToColor,

}) => {
  return (
    <>
      <div className={cg("container", "data")}>
        <Content
          isChange={isChange[0]}
          dataRarity={dataRarity}
          widgets={widgets}
          color={color}
          content={widget}
          goToColor={goToColor}
        />
        <SvgBack isChange={isChange[1]} color={color.name} />
      </div>
    </>
  );
};

export default CharacterData;
