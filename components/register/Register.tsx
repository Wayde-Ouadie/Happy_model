// global resources
import React from "react";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import RegisterStyle from "./Register.module.scss";
const cg = StyleNameGestion(RegisterStyle);

import Form from "./form";
import { useI18n } from "helpers/hooks";

import Stages from './stages';

import { Loading } from 'components/layout';

const Register = ({ }) => {
  const { register } = useI18n();

  return (
    <>
      <Loading>
        <div className={cg("container", "register")}>
          <div className={cg("head", "register")}>
            <h1 className={cg("title", "head")}>
              {register.title[0]} <span>{register.title[1]}</span>
            </h1>
            <p className={cg("para", "head")}>{register.description}</p>
          </div>
          <div className={cg("body", "register")}>
            <ul className={cg("stages", "body")}>
              <h4 className={cg('title', 'body')}>{register.stages.title}</h4>
              <Stages register={register} />
            </ul>
            <div className={cg("form", "body")}>
              <Form content={register.form} />
            </div>
          </div>
        </div>
      </Loading>

    </>
  );
};

export default Register;
