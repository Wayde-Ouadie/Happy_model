import { RARITY, COLORS } from './type';

import nftCart from 'public/nftCart';
import { StaticImageData } from 'next/image';

export type TImageKey = {rarity: RARITY, color: COLORS};
export type TImageValue = {image: { src :StaticImageData, alt: string }};
export type TImageMap = Map<TImageKey, TImageValue>;

const generateDatabaseCart = (): TImageMap => {
      const mapOfCarts: TImageMap = new Map<TImageKey, TImageValue>()
      Object.keys(RARITY).map<void>((keyPersonnage) => {
          Object.keys(COLORS).map((keyColor) => {
              mapOfCarts.set({rarity: RARITY[keyPersonnage], color: COLORS[keyColor]}, { image: {src: nftCart[(`cart_${RARITY[keyPersonnage]}_${COLORS[keyColor]}`)], alt: `image_cart_${RARITY[keyPersonnage]}_${COLORS[keyColor]}` }})
          })
      })
      return mapOfCarts;
}

export const carts = generateDatabaseCart();


export const cartByColor = (color: COLORS): [TImageKey, TImageValue][] => {
    return [...carts].filter(([key, value]) => key.color == color);
}

export const cartByRarity = ( rarity: RARITY): [TImageKey, TImageValue][] => {
    return [...carts].filter(([key, value]) => key.rarity == rarity);
}

export const cartByColorAndRarity = (rarity: RARITY): (color: COLORS) => TImageValue => {
    return function (color: COLORS): TImageValue {
        return [...carts].filter(([key]) => key.rarity == rarity && key.color == color)[0][1];
    }
}