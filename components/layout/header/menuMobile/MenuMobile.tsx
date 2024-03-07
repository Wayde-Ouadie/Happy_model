// global resources
import React, { useCallback, useContext } from "react";
import Image from 'next/image';

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import MenuMobileStyle from "./MenuMobile.module.scss";
const cg = StyleNameGestion(MenuMobileStyle);

import { motion, AnimatePresence } from "framer-motion";

// lib
import { secondaryMenuItems, confidentialityMenuItems } from "lib/conf/route";
import { socialNetworkList } from "lib/conf/socialNetwork";

// helpers
import { useGoToItemLink, useGsapTimeline } from "helpers/hooks";

import { Icon } from "components/uiKits";
import colors from "lib/identity/colors";

import {
  translateToDown,
  handleHoverExit,
  rollToTop,
  rollToDown,
} from "lib/animation";
import { SectionContext } from "pages/_app";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


const MainMenuItems = ({ goToLink, content }) => {
  return (
    <>
      <ul className={cg("items", "menu")}>
        {secondaryMenuItems.map(([key, value]) => (
          <li
            key={key}
            onClick={() => goToLink({ id: value.id, page: value.page })}
            className={cg("item")}
            onMouseEnter={(e) => translateToDown(e)}
            onMouseLeave={(e) => handleHoverExit(e)}
          >
            {content[key]}
          </li>
        ))}
      </ul>
    </>
  );
};

import socialNetworkIcons from "public/socialNetwork";

const Content = ({ content, goToLink }) => {
  return (
    <>
      <div className={cg("content", "menu", "menu_layer_gsap")}>
        <MainMenuItems goToLink={goToLink} content={content} />
        <div className={cg("footer", "menu")}>
          <motion.ul variants={variantsUl} className={cg("socialNetwork", "footer")}>
            {socialNetworkList.map((value) => {
              return (
              <motion.li
                key={value.key}
                onMouseEnter={(e) => rollToTop(e)}
                onMouseLeave={(e) => rollToDown(e)}
                className={cg("item")}
              >
                {socialNetworkIcons[value.icon]({ color: colors.light_1 })}
              </motion.li>
            )
          })}
          </motion.ul>
          <ul className={cg("confidential", "footer")}>
            {confidentialityMenuItems.map(([key, value]) => (
              <li
                key={key}
                className={cg("item")}
                onMouseEnter={(e) =>
                  rollToTop(e, colors.light_4, colors.dark_5)
                }
                onMouseLeave={(e) =>
                  rollToDown(e, colors.light_4, colors.dark_5)
                }
              >
                {content[key]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const MenuMobile = ({ content, changeState, state }) => {
  const { linker } = useGoToItemLink();
  const { section } = useContext(SectionContext);
  const goToLink = useCallback(
    (para) => {
      linker({ ...para, offsetTop: section(para.id) });
      changeState();
    },
    [state]
  );

  return (
    <>
      <AnimatePresence mode='wait'>
        {state && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cg("container", "menu", "humberger_menu_gsap")}
          >
            <Content content={content} goToLink={goToLink} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuMobile;
