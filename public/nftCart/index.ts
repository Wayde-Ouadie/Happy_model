import { COLORS, RARITY } from "lib/db";
import { StaticImageData } from "next/image";
import cart_commun_blue from "./cart_commun_blue.png";
import cart_commun_green from "./cart_commun_green.png";
import cart_commun_purple from "./cart_commun_purple.png";
import cart_commun_red from "./cart_commun_red.png";
import cart_commun_yellow from "./cart_commun_yellow.png";

import cart_epic_blue from "./cart_epic_blue.png";
import cart_epic_green from "./cart_epic_green.png";
import cart_epic_purple from "./cart_epic_purple.png";
import cart_epic_red from "./cart_epic_red.png";
import cart_epic_yellow from "./cart_epic_yellow.png";

import cart_legend_blue from "./cart_legend_blue.png";
import cart_legend_green from "./cart_legend_green.png";
import cart_legend_purple from "./cart_legend_purple.png";
import cart_legend_red from "./cart_legend_red.png";
import cart_legend_yellow from "./cart_legend_yellow.png";

import cart_rare_blue from "./cart_rare_blue.png";
import cart_rare_green from "./cart_rare_green.png";
import cart_rare_purple from "./cart_rare_purple.png";
import cart_rare_red from "./cart_rare_red.png";
import cart_rare_yellow from "./cart_rare_yellow.png";

const carts = {
  cart_commun_blue: {
    src: cart_commun_blue,
  },
  cart_commun_green: {
    src: cart_commun_green,
  },
  cart_commun_purple: {
    src: cart_commun_purple,
  },
  cart_commun_red: {
    src: cart_commun_red,
  },
  cart_commun_yellow: {
    src: cart_commun_yellow,
  },
  cart_epic_blue: { src: cart_epic_blue },
  cart_epic_green: { src: cart_epic_green },
  cart_epic_purple: { src: cart_epic_purple },
  cart_epic_red: { src: cart_epic_red },
  cart_epic_yellow: { src: cart_epic_yellow },
  cart_legend_blue: { src: cart_legend_blue },
  cart_legend_green: { src: cart_legend_green },
  cart_legend_purple: { src: cart_legend_purple },
  cart_legend_red: { src: cart_legend_red },
  cart_legend_yellow: { src: cart_legend_yellow },
  cart_rare_blue: { src: cart_rare_blue },
  cart_rare_green: { src: cart_rare_green },
  cart_rare_purple: { src: cart_rare_purple },
  cart_rare_red: { src: cart_rare_red },
  cart_rare_yellow: { src: cart_rare_yellow },
};

export default carts;

export const getNftCart = (rarity: RARITY, color: COLORS) : StaticImageData => {
  return carts[`cart_${rarity}_${color}`].src;
}