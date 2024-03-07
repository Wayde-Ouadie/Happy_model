// global resources
import React from "react";
import Link from "next/link";
// style
import StyleNameGestion from "helpers/ClassNameCreator";
import StagesStyle from "./Stages.module.scss";
const cg = StyleNameGestion(StagesStyle);

const Stages = ({ register }) => {
  return (
    <>
      <div className={cg("items", "stages")}>
        {register.stages.list.map((stage, index) => (
          <li className={cg("item")} key={index}>
            <p className={cg("number")}>{stage.number}</p>
            <p className={cg("value")}>
              {Array.isArray(stage.value) ? (
                  stage.value.map((e, i) => <span key={i} className={cg('value')}>{!!e.link ? <Link href={e.link} className={cg('link')}>{e.text}</Link> : e.text}</span>)
              ) : (
                stage.value
              )}

            </p>
          </li>
        ))}
      </div>
    </>
  );
};

export default Stages;
