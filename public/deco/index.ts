import sloganMotivation from './sloganMotivation.png';
import sloganCart from './sloganCart.png';

import planete_blue_1 from './planete_blue_1.png';

import deco_blue_2 from './deco_blue_2.png';
import deco_blue_1 from './deco_blue_1.png';
import deco_red from './deco_red.png';
import deco_green from './deco_green.png';
import deco_purple from './deco_purple.png';
import deco_white from './deco_white.png';

export const slogans = {
      sloganMotivationAbout: sloganMotivation,
      sloganCart: sloganCart,
}

export const decoration = {
      planete_blue_1: planete_blue_1,
}

export const decorationBack = {
      deco_red: deco_red,
      deco_blue_1: deco_blue_1,
      deco_blue_2: deco_blue_2,
      deco_green: deco_green,
      deco_purple: deco_purple,
      deco_white: deco_white,
}

export type NDecorationBack = keyof typeof decorationBack;