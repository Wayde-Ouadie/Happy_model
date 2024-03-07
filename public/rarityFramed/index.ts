import { COLORS, RARITY } from "lib/db";
import { StaticImageData } from "next/image";

import rarity_commun_blue from "./rarity_commun_blue.png";
import rarity_commun_green from "./rarity_commun_green.png";
import rarity_commun_purple from "./rarity_commun_purple.png";
import rarity_commun_red from "./rarity_commun_red.png";
import rarity_commun_yellow from "./rarity_commun_yellow.png";

import rarity_epic_blue from "./rarity_epic_blue.png";
import rarity_epic_green from "./rarity_epic_green.png";
import rarity_epic_purple from "./rarity_epic_purple.png";
import rarity_epic_red from "./rarity_epic_red.png";
import rarity_epic_yellow from "./rarity_epic_yellow.png";

import rarity_legend_blue from "./rarity_legend_blue.png";
import rarity_legend_green from "./rarity_legend_green.png";
import rarity_legend_purple from "./rarity_legend_purple.png";
import rarity_legend_red from "./rarity_legend_red.png";
import rarity_legend_yellow from "./rarity_legend_yellow.png";

import rarity_rare_blue from "./rarity_rare_blue.png";
import rarity_rare_green from "./rarity_rare_green.png";
import rarity_rare_purple from "./rarity_rare_purple.png";
import rarity_rare_red from "./rarity_rare_red.png";
import rarity_rare_yellow from "./rarity_rare_yellow.png";

const rarities = {
  rarity_commun_blue: {
    src: rarity_commun_blue,
  },
  rarity_commun_green: {
    src: rarity_commun_green,
  },
  rarity_commun_purple: {
    src: rarity_commun_purple,
  },
  rarity_commun_red: {
    src: rarity_commun_red,
  },
  rarity_commun_yellow: {
    src: rarity_commun_yellow
  },
  rarity_epic_blue: { src: rarity_epic_blue },
  rarity_epic_green: { src: rarity_epic_green },
  rarity_epic_purple: { src: rarity_epic_purple },
  rarity_epic_red: { src: rarity_epic_red },
  rarity_epic_yellow: { src: rarity_epic_yellow },
  rarity_legend_blue: { src: rarity_legend_blue },
  rarity_legend_green: { src: rarity_legend_green },
  rarity_legend_purple: { src: rarity_legend_purple },
  rarity_legend_red: { src: rarity_legend_red },
  rarity_legend_yellow: { src: rarity_legend_yellow },
  rarity_rare_blue: { src: rarity_rare_blue },
  rarity_rare_green: { src: rarity_rare_green },
  rarity_rare_purple: { src: rarity_rare_purple },
  rarity_rare_red: { src: rarity_rare_red },
  rarity_rare_yellow: { src: rarity_rare_yellow },
};

export default rarities;

export const getRarities = (name: RARITY, color: COLORS): StaticImageData => {
  return rarities[`rarity_${name}_${color}`].src;
}