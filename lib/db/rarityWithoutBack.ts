import { TImageMap, TImageKey, TImageValue } from "./cart";
import { RARITY, COLORS } from "./type";
import { getRarityWithoutBack } from "public/rarityWithoutBack";

const generateDatabaseImageWithoutBack = (): TImageMap => {
  const mapOfImageWithoutBack = new Map<TImageKey, TImageValue>();
  Object.keys(RARITY).map<void>((keyRarity: keyof typeof RARITY) => {
    Object.keys(COLORS).map((keyColor: keyof typeof COLORS) => {
      mapOfImageWithoutBack.set(
        { rarity: RARITY[keyRarity], color: COLORS[keyColor] },
        {
          image: {
            src: getRarityWithoutBack(RARITY[keyRarity], COLORS[keyColor]),
            alt: `image rarity ${keyRarity} color ${keyColor} without background`,
          },
        }
      );
    });
  });
  return mapOfImageWithoutBack;
};

export const rarityWithoutBack = generateDatabaseImageWithoutBack();

export const imageRarityWithoutBackByRarity = (
  color: COLORS
): [TImageKey, TImageValue][] => {
  return [...rarityWithoutBack].filter(([key, value]) => key.color == color);
};

export const imageRarityWithoutBackByRarityAndColor = (
  rarity: RARITY
): ((color: COLORS) => TImageValue) => {
  return function (color: COLORS): TImageValue {
    return [...rarityWithoutBack].filter(
      ([key]) => key.rarity == rarity && key.color == color
    )[0][1];
  };
};
