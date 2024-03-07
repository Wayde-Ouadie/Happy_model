// global resources
import React, { useState } from "react";
import Image from "next/image";

import { slogans } from "public/deco";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import ContentStyle from "./Content.module.scss";
const cg = StyleNameGestion(ContentStyle);

import { Icon, NavSlide } from "components/uiKits";

import Animation from "../Animation";
import { Modal, Portal } from 'components/uiKits';
import images from "public/images";

const ItemsCharacteristic = ({ attribute, value, isChange }) => {
  return (
    <>
      <Animation isChange={isChange[0]}>
        <h4 className={cg("attribute", "item")}>{value}</h4>
      </Animation>
      <p className={cg("value", "item")}>{attribute}</p>
    </>
  );
};

const Content = ({ content, image, characteristic, isChange, pagination, imageCart }) => {
  const [ showModal, setShowModal ] = useState(false);
  console.log(image);
  return (
    <>
      <div className={cg("container", "content")}>
        <div className={cg("description", "content")}>
          <div className={cg("cart")}>
            <Portal selector='#tooltip'>
              <Modal showModal={showModal} setShowModal={setShowModal}><Image src={imageCart.image.src.src} alt='Image rarity' /></Modal>
            </Portal>
            <Animation isChange={isChange} >
              <Image className={'cursor-pointer'} onClick={() => setShowModal(true)} src={imageCart.image.src.src} priority alt='Image rarity' />
            </Animation>

          </div>
          <Animation isChange={isChange[0]}>
            <div className='w-full flex justify-end' >
              <div className={cg("text")}>{content.description}</div>
            </div>
          </Animation>
        </div>
        <div className={cg("image", "content")}>
          <Animation isChange={isChange}>
            <Image
              src={image?.image.src}
              height={680}
              width={520}
              alt={image.image.alt}
            />
          </Animation>
          <div className={cg('next')} >
            <NavSlide dir={1} iconName='Chevrons' action={() => pagination(1)} size='22'>{content.action.next}</NavSlide>
          </div>
        </div>
        <ul className={cg("data", "content")}>
          {characteristic.map((c, index) => {
            const itemAttribute = content.characteristic[c.attribute];
            const itemValue = c.value + c.unity + (c.more ? "+" : "");
            return (
              <li className={cg("item")} key={c.attribute + "_" + index}>
                <ItemsCharacteristic
                  attribute={itemAttribute}
                  value={itemValue}
                  isChange={isChange}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Content;
