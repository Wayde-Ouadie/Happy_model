// global resources
import React, { useEffect, useState } from "react";
import Image from "next/image";
// style
import StyleNameGestion from "helpers/ClassNameCreator";
import ContentStyle from "./Content.module.scss";
const cg = StyleNameGestion(ContentStyle);

import { useI18n } from "helpers/hooks";

import { Icon } from "components/uiKits";

import images from "public/images";
import colors from 'lib/identity/colors';

const Row1 = ({ content }) => {
  
  return (
    <>
      <div className={cg("row1", "title", 'row_gsap')}>
        <h1 className={cg("title")}>{content.title[0]}</h1>
        <span className={cg("image")}>
          <Image src={images.intro.ocean_vector} priority alt={content.alt} />
        </span>
        <h1 className={cg("title")}>{content.title[1]}</h1>
      </div>
    </>
  );
};
const Row2 = ({ content }) => {
  const [ocean_gradien_image, setOcean_gradien_image] = useState(null);
  useEffect(() => {
    setOcean_gradien_image(() => window.innerWidth > 768 ? images.intro.ocean_gradien : images.intro.ocean_gradien_small);
  }, [window.innerWidth]);
  if(!ocean_gradien_image) return null;
  return (
    <>
      <div className={cg("row2", "title", 'row_gsap')}>
        <span className={cg("image")}>
          <Image src={ocean_gradien_image} priority alt={content.alt} />
        </span>
        <h1 className={cg("title")}>{content.title[2]}</h1>
        <span className={cg("description")}>
          <Icon name="Copyright" size="16" color={colors.light_4} />
          <p className={cg("text")}>{content.date}</p>
        </span>
      </div>
    </>
  );
};

const Row3 = ({ content }) => {
  return (
    <>
      <div className={cg("row3", "title", 'row_gsap')}>
        <h1 className={cg("title")}>{content.title[3]}</h1>
        <h1 className={cg("title")}>{content.title[4]}</h1>
      </div>
    </>
  );
};

const Content = ({}) => {
  const {
    sections: { home },
  } = useI18n();
  return (
    <>
      <div className={cg("container", "content")}>
        <span className={cg('content', 'container', 'text_gsap')} >
          <div className={cg("title", "content")}>
            <Row1 content={home} />
            <Row2 content={home} />
            <Row3 content={home} />
          </div>
          <div className={cg('description', 'content')} >
            <p className={cg("text")}>{home.description}</p>
          </div>
        </span>
      </div>
    </>
  );
};

export default Content;
