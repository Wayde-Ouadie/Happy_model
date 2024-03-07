// global resources
import React, { useState, useEffect, useMemo, useCallback } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import FormStyle from "./Form.module.scss";
const cg = StyleNameGestion(FormStyle);

import { Button, Form as FormUi } from "components/uiKits";
import { IFormInput, validatorRegister, questions } from "./registerValidator";
import axios from "axios";
import { externalLink } from "lib/conf/route";

import { TContentForm } from "locales/en";

import { Notification } from "components/uiKits";

import { listEggsGenerator } from "lib/db/egg";

const Questions = ({
  content,
  register,
  errors,
  control,
}: {
  content: TContentForm;
  register: any;
  errors: any;
  control: any;
}) => {
  const defaultPara = (index, question) => ({
    key: index,
    error: errors[question.name]?.message,
    // @ts-ignore
    required: !!content.errors[question.name]?.required,
    label: content.question[question.name].label,
    register: register,
    name: question.name,
    placeholder: content.question[question.name].placeholder,
    type: question.type,
  });

  const selectOptions = useCallback((question) => (question.options(
    // @ts-ignore
    content.question[question.name]?.options
  )), []);
  const selectDefaultOption = useCallback((question, options) => options.find(
    (option) => option.key == question.defaultOption
  ), [])
  return (
    <>
      {questions.map((question, index) => {
        if (question.component == "Select") {
          // @ts-ignore
          return React.createElement(FormUi.Select, {
            ...defaultPara(index, question),
            control: control,
            options: selectOptions(question),
            defaultOption: selectDefaultOption(question, selectOptions(question)),
          });
        }
        if (question.component == "Checkbox") {
          return React.createElement(FormUi.Checkbox, {
            ...defaultPara(index, question),
          });
        }
        if (question.component == "Textarea") {
          return React.createElement(FormUi.Textarea, {
            ...defaultPara(index, question),
            rows: 4,
          });
        }
        return React.createElement(FormUi.Input, {
          ...defaultPara(index, question),
        });
      })}
    </>
  );
};

import { FORM_INPUT, initRegister } from "./registerValidator";
import { useI18n } from "helpers/hooks";

const Form = ({ content }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(validatorRegister(content.errors)),
  });
  const [isSend, setIsSend] = useState(null);
  const [sendError, setSendError] = useState(null);

  useEffect(() => {
    const pack = watch()[FORM_INPUT.PACK];
    if (pack) {
      setValue(FORM_INPUT.PACK, pack);
    } else {
      setValue(FORM_INPUT.PACK, initRegister[FORM_INPUT.PACK]);
    }
  }, []);


  const onSubmit = useCallback((allData: IFormInput) => {
    axios
      .post(externalLink.zapierHook, JSON.stringify(allData))
      .then(() => setIsSend(true))
      .catch(() => setSendError(content.errors.submit.api));
    reset();
  }, []);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={cg("container", "component")}
      >
        {!isSend ? (
          <>
            <h3 className={cg("title", "form")}>{content.title}</h3>
            <div className={cg("question", "form")}>
              <Questions
                errors={errors}
                control={control}
                content={content}
                register={register}
              />

            </div>
            <div className={cg("button", "form")}>
              <p className={cg('required')}>{content.required}</p>
              <Button back="white" size="lg" action={() => null} shadow={true} type="submit">
                {content.button}
              </Button>
              {sendError && <Notification type="error" text={sendError} />}
            </div>
          </>
        ) : (
          <>
            <div className={cg('thanks', 'component')} >
              <h3 className={cg('title')} >
                {content.thanks.title}
              </h3>
              <p className={cg('description')}>{content.thanks.description}</p>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default Form;
