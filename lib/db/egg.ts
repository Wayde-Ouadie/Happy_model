import { RARITY } from "./type"
import { getNftByRarity, TNftsValue } from './rarity';
import { TImageValue } from './cart';
import eggsImage from 'public/eggs';

import { PACK } from 'components/register/form/registerValidator';

export enum EGG {
      BLUE= 'blue',
      RED= 'red',
      PURPLE= 'purple',
}

export type TEggValue = {
      price: number,
      pourcents: {value: number, rarity: TNftsValue & { name: RARITY }}[],
      image: TImageValue['image'],
      pack: PACK,
}  

export const eggs = new Map<EGG, TEggValue>([
      [EGG.BLUE, {
            price: 0.059,
            pack: PACK.PACK_1,
            pourcents: [
                  {
                        value: 15,
                        rarity: getNftByRarity(RARITY.COMMUN)
                  },
                  {
                        value: 20,
                        rarity: getNftByRarity(RARITY.RARE)
                  },
                  {
                        value: 30,
                        rarity: getNftByRarity(RARITY.EPIC)
                  },
                  {
                        value: 35,
                        rarity: getNftByRarity(RARITY.LEGEND)
                  }
            ],
            image: {
                  src: eggsImage[`egg_${EGG.BLUE}`].src,
                  alt: `egg_${EGG.BLUE}`
            }
      }],
      [EGG.RED, {
            price: 0.079,
            pack: PACK.PACK_2,
            pourcents: [
                  {
                        value: 5,
                        rarity: getNftByRarity(RARITY.COMMUN)
                  },
                  {
                        value: 10,
                        rarity: getNftByRarity(RARITY.RARE)
                  },
                  {
                        value: 20,
                        rarity: getNftByRarity(RARITY.EPIC)
                  },
                  {
                        value: 65,
                        rarity: getNftByRarity(RARITY.LEGEND)
                  }
            ],
            image: {
                  src: eggsImage[`egg_${EGG.RED}`].src,
                  alt: `egg_${EGG.RED}`
            }
      }],
      [EGG.PURPLE, {
            price: 0.099,
            pack: PACK.PACK_3,
            pourcents: [
                  {
                        value: 0.5,
                        rarity: getNftByRarity(RARITY.COMMUN)
                  },
                  {
                        value: 2.5,
                        rarity: getNftByRarity(RARITY.RARE)
                  },
                  {
                        value: 7,
                        rarity: getNftByRarity(RARITY.EPIC)
                  },
                  {
                        value: 90,
                        rarity: getNftByRarity(RARITY.LEGEND)
                  }
            ],
            image: {
                  src: eggsImage[`egg_${EGG.PURPLE}`].src,
                  alt: `egg_${EGG.PURPLE}`
            }
      }],
]);

export const getEgg = (egg: EGG):  TEggValue & { name: EGG } => {
      return {...eggs.get(egg), name: egg};
}

export const listEggsGenerator: () => EGG[] = () => Object.keys(EGG).map(key => EGG[key])

export const getEggByPack: (pack: PACK) => TEggValue = (pack: PACK) => [...eggs].find(([key, value], index) => value.pack == pack)[1];
