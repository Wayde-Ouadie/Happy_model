// global resources
import React, {
  useState,
  useEffect,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";

// style
import StyleNameGestion from "helpers/ClassNameCreator";
import SlideStyle from "./Slide.module.scss";
const cg = StyleNameGestion(SlideStyle);

import Cart from "../cart";

import { useSwap } from "helpers/hooks";
import { AnimationLeftRight } from "components/animation";

// data
import { COLORS, RARITY, nfts, getNftByRarity } from "lib/db";
import { NavSlide } from "@uiKits";
const rarities = [RARITY.COMMUN, RARITY.EPIC, RARITY.LEGEND, RARITY.RARE];

const getRarityImage = (rarity: RARITY) => {
  return getNftByRarity(rarity)?.cartByColor(COLORS.BLUE).image;
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const CartAnimation = ({ index, position, images, content }) => {
  const [elem, setElem] = useState(null);
  useEffect(() => {
    const next = index + position;
    const maxElement = rarities.length - 1;
    if (next == 4) {
    }
    setElem(() => (next <= maxElement ? next : next - (maxElement + 1)));
  }, [position, index]);
  if(!position && position != 0) return null;
  return (
    <>
      <AnimationLeftRight keyPosition={position} custom={position}>
        <Cart
          image={images}
          index={index}
          title={rarities[elem]}
          option={{
            attribute: content.cart.attribute,
            value: getNftByRarity(rarities[elem])?.pseudoName,
          }}
          tag={content.cart.tag}
        />
      </AnimationLeftRight>
    </>
  );
};

const DragAnimation = ({ children, paginate }) => {
  return (
    <>
      <motion.div
        drag="x"
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragElastic={1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1, Math.ceil(Math.abs(velocity.x) / 1200));
            // paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1, Math.ceil(Math.abs(velocity.x) / 1200));
          }
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
const Slide = ({ dimension, content }) => {
  const images = useMemo(
    () => ({
      [RARITY.COMMUN]: (
        <Image
          src={getRarityImage(RARITY.COMMUN).src.src}
          alt={getRarityImage(RARITY.COMMUN).alt}
          priority={true}
          key={0}
        />
      ),
      [RARITY.EPIC]: (
        <Image
          src={getRarityImage(RARITY.EPIC).src.src}
          alt={getRarityImage(RARITY.EPIC).alt}
          priority={true}
          key={1}
        />
      ),
      [RARITY.RARE]: (
        <Image
          src={getRarityImage(RARITY.RARE).src.src}
          alt={getRarityImage(RARITY.RARE).alt}
          priority={true}
          key={3}
        />
      ),
      [RARITY.LEGEND]: (
        <Image
          src={getRarityImage(RARITY.LEGEND).src.src}
          alt={getRarityImage(RARITY.LEGEND).alt}
          priority={true}
          key={4}
        />
      ),
    }),
    []
  );

  const lenghtArray = useMemo(() => {
    const w = dimension.width;
    if (w > 768) {
      return 5;
    } else if (w > 640) {
      return 4;
    } else {
      return 3;
    }
  }, [dimension.width]);

  const { position, direction, paginate } = useSwap(rarities.length - 1);
  return (
    <>
      <div className={cg("navs", "carts")}>
        <div className={cg("left", "navs")}>
          <NavSlide
            dir={-1}
            action={() => paginate(-1, 1)}
            size={dimension?.width > 1000 ? "30" : "24"}
          >
            { }
          </NavSlide>
        </div>
        <div className={cg("right", "navs")}>
          <NavSlide
            dir={1}
            action={() => paginate(1, 1)}
            size={dimension?.width > 1000 ? "30" : "24"}
          >
            { }
          </NavSlide>
        </div>
      </div>
      <div className={cg("items", "carts")}>
        <div className={cg("items_container")}>
          <DragAnimation paginate={paginate}>
            <div className={cg("wrapper")}>
              <AnimatePresence custom={position} >
                {Array.apply(null, { length: lenghtArray }).map((_, index) => {
                  return (
                    <span key={index}>
                      <CartAnimation
                        index={index}
                        position={position}
                        images={images}
                        content={content}
                      />
                    </span>
                  );
                })}
              </AnimatePresence>
            </div>
          </DragAnimation>
        </div>
      </div>
    </>
  );
};

export default Slide;
