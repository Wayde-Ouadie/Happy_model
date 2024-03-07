import { TImageMap, TImageValue, TImageKey } from "./cart";
import { RARITY, COLORS } from "./type";

import { getRarities } from "public/rarityFramed";

const generateDatabaseImageFramed = (): TImageMap => {
  const mapOfImageFramed: TImageMap = new Map<TImageKey, TImageValue>();
  Object.keys(RARITY).map<void>((keyRarity: keyof typeof RARITY) => {
    Object.keys(COLORS).map((keyColor: keyof typeof COLORS) => {
      mapOfImageFramed.set(
        { rarity: RARITY[keyRarity], color: COLORS[keyColor] },
        {
          image: {
            src: getRarities(RARITY[keyRarity], COLORS[keyColor]),
            alt: `image rarity ${keyRarity} color ${keyColor} without background`,
          },
        }
      );
    });
  });
  return mapOfImageFramed;
};

export const rarityFramed = generateDatabaseImageFramed();

export const imageRarityFramedByRarity = (
  color: COLORS
): [TImageKey, TImageValue][] => {
  return [...rarityFramed].filter(([key, value]) => key.color == color);
};

export const imageRarityFramedByRarityAndColor = (
  rarity: RARITY
): ((color: COLORS) => TImageValue) => {
  return function (color: COLORS): TImageValue {
    return [...rarityFramed].filter(
      ([key]) => key.rarity == rarity && key.color == color
    )[0][1];
  };
};
