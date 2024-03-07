import { RARITY, COLORS } from './type';
import { cartByRarity, TImageKey, TImageValue, cartByColorAndRarity } from './cart';
import { imageRarityFramedByRarityAndColor } from './rarityFramed';
import { imageRarityWithoutBackByRarityAndColor } from './rarityWithoutBack';

export type TNftsValue = {
      pseudoName: string,
      colors: { name: COLORS, tags: NFTS_TAGS[] }[],
      carts: [TImageKey, TImageValue][],
      likes: { value: number, unity: string },
      characteristic: {
            attribute: NFT_CHARCTERISTIC,
            value: number,
            unity: 'k' | 'm' | null,
            more: boolean
      }[],
      cartByColor: (color: COLORS) => TImageValue,
      imageFramed: (color: COLORS) => TImageValue,
      imageWithoutBack: (color: COLORS) => TImageValue
}

export type TNfts = Map<RARITY, TNftsValue>;

export enum NFT_CHARCTERISTIC {
      REMAINING = 'remaining',
      STORE = 'store',
      PRODUCTION = 'production',
}


export enum NFTS_TAGS {
      AIRDROPS = 'airdrops',
      BONUS_REWARDS = 'bonus rewards',
      TOKEN_GENERATION = 'token generation',
      DURABILITY = 'durability',
      GOLD_RUSH = 'gold rush',
}

const colorsList = [{ name: COLORS.BLUE, tags: [NFTS_TAGS.AIRDROPS] }, { name: COLORS.GREEN, tags: [NFTS_TAGS.AIRDROPS, NFTS_TAGS.BONUS_REWARDS] }, { name: COLORS.RED, tags: [NFTS_TAGS.AIRDROPS, NFTS_TAGS.BONUS_REWARDS, NFTS_TAGS.TOKEN_GENERATION, NFTS_TAGS.DURABILITY] }, { name: COLORS.PURPLE, tags: [NFTS_TAGS.AIRDROPS, NFTS_TAGS.BONUS_REWARDS, NFTS_TAGS.TOKEN_GENERATION, NFTS_TAGS.DURABILITY] }, { name: COLORS.YELLOW, tags: [NFTS_TAGS.AIRDROPS, NFTS_TAGS.BONUS_REWARDS, NFTS_TAGS.TOKEN_GENERATION, , NFTS_TAGS.DURABILITY, NFTS_TAGS.GOLD_RUSH] }];

export const nfts: TNfts = new Map<RARITY, TNftsValue>([
      [RARITY.EPIC, {
            pseudoName: 'Hedum',
            colors: colorsList,
            characteristic: [{
                  attribute: NFT_CHARCTERISTIC.REMAINING,
                  value: 4,
                  unity: null,
                  more: false
            }, {
                  attribute: NFT_CHARCTERISTIC.STORE,
                  value: 20,
                  unity: null,
                  more: false,
            }, {
                  attribute: NFT_CHARCTERISTIC.PRODUCTION,
                  value: 1.5,
                  unity: 'k',
                  more: false,
            }],
            likes: { value: 208.5, unity: 'k' },
            carts: cartByRarity(RARITY.EPIC),
            cartByColor: cartByColorAndRarity(RARITY.EPIC),
            imageFramed: imageRarityFramedByRarityAndColor(RARITY.EPIC),
            imageWithoutBack: imageRarityWithoutBackByRarityAndColor(RARITY.EPIC)
      }],
      [RARITY.COMMUN, {
            pseudoName: 'Ovum',
            colors: colorsList,
            characteristic: [{
                  attribute: NFT_CHARCTERISTIC.REMAINING,
                  value: 4,
                  unity: null,
                  more: false
            }, {
                  attribute: NFT_CHARCTERISTIC.STORE,
                  value: 20,
                  unity: null,
                  more: false,
            }, {
                  attribute: NFT_CHARCTERISTIC.PRODUCTION,
                  value: 1.5,
                  unity: 'k',
                  more: false,
            }],
            likes: { value: 208.5, unity: 'k' },
            carts: cartByRarity(RARITY.COMMUN),
            cartByColor: cartByColorAndRarity(RARITY.COMMUN),
            imageFramed: imageRarityFramedByRarityAndColor(RARITY.COMMUN),
            imageWithoutBack: imageRarityWithoutBackByRarityAndColor(RARITY.COMMUN)
      }],
      [RARITY.LEGEND, {
            pseudoName: 'Mega bellator',
            colors: colorsList,
            characteristic: [{
                  attribute: NFT_CHARCTERISTIC.REMAINING,
                  value: 4,
                  unity: null,
                  more: false
            }, {
                  attribute: NFT_CHARCTERISTIC.STORE,
                  value: 20,
                  unity: null,
                  more: false,
            }, {
                  attribute: NFT_CHARCTERISTIC.PRODUCTION,
                  value: 1.5,
                  unity: 'k',
                  more: false,
            }],
            likes: { value: 208.5, unity: 'k' },
            carts: cartByRarity(RARITY.LEGEND),
            cartByColor: cartByColorAndRarity(RARITY.LEGEND),
            imageFramed: imageRarityFramedByRarityAndColor(RARITY.LEGEND),
            imageWithoutBack: imageRarityWithoutBackByRarityAndColor(RARITY.LEGEND)
      }],
      [RARITY.RARE, {
            pseudoName: 'Paulum',
            colors: colorsList,
            characteristic: [{
                  attribute: NFT_CHARCTERISTIC.REMAINING,
                  value: 4,
                  unity: null,
                  more: false
            }, {
                  attribute: NFT_CHARCTERISTIC.STORE,
                  value: 20,
                  unity: null,
                  more: false,
            }, {
                  attribute: NFT_CHARCTERISTIC.PRODUCTION,
                  value: 1.5,
                  unity: 'k',
                  more: false,
            }],

            likes: { value: 208.5, unity: 'k' },
            carts: cartByRarity(RARITY.RARE),
            cartByColor: cartByColorAndRarity(RARITY.RARE),
            imageFramed: imageRarityFramedByRarityAndColor(RARITY.RARE),
            imageWithoutBack: imageRarityWithoutBackByRarityAndColor(RARITY.RARE)
      }],
])

export type TNftsArray = [RARITY, TNftsValue][]
export const nftsArray = [...nfts];

export const getNftByRarity = (rarity: RARITY): TNftsValue & { name: RARITY } => {
      return { ...nfts.get(rarity), name: rarity };
}
