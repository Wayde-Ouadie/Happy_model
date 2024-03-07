import { ROUTE_BREAKPOINT } from "lib/conf/route";

import { RARITY, COLORS } from "lib/db/type";
import { NFTS_TAGS, NFT_CHARCTERISTIC } from "lib/db/rarity";
import { EGG } from "lib/db/egg";
import { FORM_INPUT } from "components/register/form/registerValidator";

import { PACK } from "components/register/form/registerValidator";

const en = {
  head: {
    index: {
      title: 'Happy Water',
      description: 'Happy water is a 3D play-to-earn NFT game where the player controls oceanic heroes as NFTs to protect our oceans against evil beings polluting them.'
    },
    litepaper: {
      title: 'Happy Water - Litepaper',
      description: 'Happy water is a 3D play-to-earn NFT game where the player controls oceanic heroes as NFTs to protect our oceans against evil beings polluting them.'
    },
    register: {
      title: 'Happy Water - Register',
      description: 'Happy water is a 3D play-to-earn NFT game where the player controls oceanic heroes as NFTs to protect our oceans against evil beings polluting them.'
    },
    disclaimer: {
      title: 'Happy Water - Disclaimer',
      description: 'Happy water is a 3D play-to-earn NFT game where the player controls oceanic heroes as NFTs to protect our oceans against evil beings polluting them.'
    }
  },
  widget: {
    art: "Show",
  },
  menu: {
    [ROUTE_BREAKPOINT.HOME]: "Intro",
    [ROUTE_BREAKPOINT.ABOUT]: "About",
    [ROUTE_BREAKPOINT.CARTS]: "NFTs",
    [ROUTE_BREAKPOINT.OVERVIEW]: "Overview",
    [ROUTE_BREAKPOINT.ROAD_MAP]: "Roadmap",
    [ROUTE_BREAKPOINT.EGGS]: "Eggs",
    [ROUTE_BREAKPOINT.ASSETS]: "Assets",
    [ROUTE_BREAKPOINT.TEAM]: "Team",
    [ROUTE_BREAKPOINT.DISCLAIMER]: "Disclaimer",
    [ROUTE_BREAKPOINT.REGISTER]: "Register",
    [ROUTE_BREAKPOINT.LITE_PAPER]: "Late Paper",
  },
  infoBar: {
    phase_1: "Phase 1: Genesis  NFTs ",
    phase_2: "Phase 2: Utiliy NFTs ",
  },
  header: {
    actions: {
      main: "Register",
      secondary: "Litepaper",
    },
    menuAction: {
      open: "MENU",
      close: "CLOSE",
    },
  },
  sections: {
    [ROUTE_BREAKPOINT.HOME]: {
      title: ["Play", "Earn", "and Assemble", "Oceanic", "NFTs"],
      date: "2022",
      description:
        "A 3D rogue-like shoot-em up P2E game on the Ethereum network. \n Fight your way through hordes of enemies polluting the ocean and stop their spread! ",
      alt: "image ocean happy water",
    },
    [ROUTE_BREAKPOINT.ABOUT]: {
      title: "About the game",
      subtitle: null,
      motivation:
        "Happy water is a 3D play-to-earn NFT game where the player controls oceanic heroes as NFTs to protect our oceans against evil beings polluting them.",
      description:
        "Discover a plethora of oceanic heroes as NFTs, each with their own rarity, quality, and unique gimmicks all while earning crypto and in-game rewards. Furthermore, players will be able to enhance and evolve these NFTs, or trade them ! Check out our lite paper for more information!",
      action: "Show more (coming soon)",
    },
    [ROUTE_BREAKPOINT.CARTS]: {
      title: "your trump cards to dominate the game",
      description:
        "Discover the genesis NFTs, each one representing a unique oceanic creature. They will be characterized by their rarities : Common < Rare < Epic < Legendary, indicating how powerful they are ! ",
      motivation:
        "Each NFT is available in many skin variations you can check down below ",
      cart: {
        attribute: "Name",
        tag: "show",
      },
    },
    [ROUTE_BREAKPOINT.OVERVIEW]: {
      title: "In many skin variations",
      widget: {
        '1': {
          title: 'Name',
          subTitle: 'Pseudo name',
        },
        '2': {
          title: 'Tags',
          subTitle: 'Discover the NFTs'
        },
        '3': {
          title: "Skins",
          subTitle: 'Choose your Skin'
        },
      },
      description: {
        [RARITY.EPIC]:
          "A small and agile fish cleaning the oceans and making them a healthy place to live. It may not be the biggest or the strongest, but it is definitely one of the most important fish in the sea.",
        [RARITY.COMMUN]:
          "A young oceanic hero trying his best to keep the oceans a happy place. Brave and adventurous, a balanced character for a perfect experience in the game.",
        [RARITY.LEGEND]:
          "A strong youthful oceanic hero with the sole purpose to constantly defend the oceans from evil beings and is always ready to help those in need. A perfect choice for a top tier oceanic hero.",
        [RARITY.RARE]:
          "A very powerful and seasoned oceanic hero, who has been fighting to keep the oceans clean and safe for many years. The strongest character in the game, no doubt.",
      },
      characteristic: {
        [NFT_CHARCTERISTIC.PRODUCTION]: "SUPPLY",
        [NFT_CHARCTERISTIC.STORE]: "SKINS",
        [NFT_CHARCTERISTIC.REMAINING]: "RARITIES",
      },
      tags: {
        [NFTS_TAGS.AIRDROPS]: "Airdrops",
        [NFTS_TAGS.BONUS_REWARDS]: "bonus rewards",
        [NFTS_TAGS.DURABILITY]: "durability",
        [NFTS_TAGS.GOLD_RUSH]: "gold rush",
        [NFTS_TAGS.TOKEN_GENERATION]: 'token generation'
      },
      action: {
        next: "Next",
      },
    },
    [ROUTE_BREAKPOINT.EGGS]: {
      motivation: ["YOUR", "EGGs", "PLAN"],
      title: {
        [EGG.BLUE]: "Normal Egg",
        [EGG.PURPLE]: "Exalted Egg",
        [EGG.RED]: "Advanced Egg",
      },
      description: {
        [EGG.BLUE]:
          "The basic egg gives you a chance at getting high rarity NFTs at a minimal investment, and is perfect for those who want to expand their collection.   Available during phase one only ! ",
        [EGG.RED]:
          "A balanced egg that has a higher chance uncover a legendary NFT, perfect for getting the higher rarity NFTs. Available during phase one only ! ",
        [EGG.PURPLE]:
          "The best egg for those who want an almost guaranteed chance at getting the legendary NFTs.  Available during phase one only ! ",
      },
      price: "Price",
      action: "Reserve",
      nav: {
        next: "Next",
      },
    },
    [ROUTE_BREAKPOINT.COLLECTION]: {
      title: "Check out some of the phase 2 assets",
      motivation: {
        left: "Continuously adding",
        right: "Always expanding",
      },
    },
    [ROUTE_BREAKPOINT.ASSETS]: {
      title: "Even more utility NFTs are coming !",
    },
    [ROUTE_BREAKPOINT.ROAD_MAP]: {
      title: "The Roadmap",
      description: "Can be summarized in 5 major points",
      stages: [
        {
          title: "First quarter of 2023",
          description:
            "The team will reveal of the genesis NFTs that will play the role of playable characters (Phase 1), and share the litepaper summarizing all the aspects of the game and NFTs benefits, as well as the minting date and the gimmicks behind being whitelisted to the project. Ends with the reveal of the plan for phase 2 and which benefits it would bring to genesis holders and new investors.",
        },
        {
          title: "Second quarter of 2023",
          description:
            "Commencement of the game development and blockchain implementation in order to start working on our token, also during this phase, the team will publish a detailed whitepaper detailing all aspects of the game including tokenomics, game mechanics, reward system etc .. Finally the team will reveal a first prototype of the game.",
        },
        {
          title: "Third quarter of 2023",
          description:
            "During this period, the team will work on deploying an alpha version of the game in which genesis holders for both Phase 1 & Phase 2 will participate exclusively. Furthermore, the team will hold a private token sale event in order to start TGE and begin rewarding genesis holders for both Phase 1 & 2.",
        },
        {
          title: "Fourth quarter of 2023",
          description:
            "This phase will mostly consist of finalizing game development and blockchain. The aim here is to have a beta version of the game that genesis holders and token-holders from the private sale can experience and will have priority to play, also the team will start working on a dedicated marketplace for the game.",
        },
        {
          title: "First quarter of 2024",
          description:
            "This period will be dedicated to deploying a final version of the game and hold a public token sale, also it will be celebrated by organizing a charity event in which all sorts of holders will take part into. ",
        },
      ],
    },
    [ROUTE_BREAKPOINT.MISSION]: {
      title: "on a mission to clean up the ocean",
      description:
        "Coming along with Phase 2 is a marine habitat that will serve as a resting station for your NFTs. Fighting pollution and making sure our oceans stay clean is our duty, and as such, you will also be assigned the task to clean up the NFTs habitats in order to keep their resting bonuses maxed!",
      action: ["Not clean", "Clean Up"],
    },
    [ROUTE_BREAKPOINT.MOTIVATION]: {
      title: "Join our Whitelist Now !",
      description:
        "Fill up the form below and follow the instructions to have a chance to get whitelisted !",
      action: "Join Us",
    },
    [ROUTE_BREAKPOINT.TEAM]: {
      title: "our team",
    },
  },
  register: {
    title: ["The next generation of", "NFTs game"],
    description:
      "Deep in the see, a new adventure is starting. Join us by subscribing to our Whitelist",
    stages: {
      title: "Requirements",
      list: [
        {
          number: "01",
          value: [
            { text: "Follow our " },
            { link: "https://twitter.com/Happywater_NFT", text: "twitter" },
            { text: " page !" },
          ],
        },
        {
          number: "02",
          value: [
            { text: "Join our discord server at " },
            { link: "http://discord.gg/DpxBmT3mpe", text: "discord" },
            { text: ' !' },
          ],
        },
        {
          number: "03",
          value:
            "Be active on the discord ! A level 10 minimum on our discord server is required !",
        },
        {
          number: "04",
          value:
            "Fill out the form to the right for a chance to get picked up for our whitelist !",
        },
      ],
    },
    form: {
      title: "Whitelist registration form",
      question: {
        [FORM_INPUT.TWITTER_HANDLE]: {
          label: "Twitter Handle",
          placeholder: "Twitter Handle",
        },
        [FORM_INPUT.DISCORD_HANDLE]: {
          label: "Discord Handle",
          placeholder: "Discord Handle",
        },
        [FORM_INPUT.WALLET_ADDRESS]: {
          label: "ERC20 Wallet Address",
          placeholder: "ERC20 Wallet Address",
        },
        [FORM_INPUT.EMAIL]: { label: "Email", placeholder: "Email" },
        [FORM_INPUT.PACK]: {
          label: "Which Pack are you more interested to buy",
          options: {
            [PACK.PACK_1]: "Normal Egg",
            [PACK.PACK_2]: "Advanced Egg",
            [PACK.PACK_3]: "Exalted Egg",
          },
          placeholder: "Pack",
        },
        [FORM_INPUT.ADDITIONAL_INFO]: {
          label: "Additional infos",
          placeholder: "Additionnal information",
        },
        [FORM_INPUT.EMAIL_ME]: { label: "Email me a copy of my responses" },
      },
      errors: {
        [FORM_INPUT.TWITTER_HANDLE]: {
          required: "required twitter handle",
          matches: "invalid twitter handle format",
        },
        [FORM_INPUT.DISCORD_HANDLE]: {
          required: "required telegram handle",
          matches: "invalid discord handle format",
        },
        [FORM_INPUT.WALLET_ADDRESS]: {
          required: "required wallet address",
          matches: "wallet address doesn't respect wallet format",
        },
        [FORM_INPUT.EMAIL]: {
          required: "required email",
          email: "wrong email format",
        },
        [FORM_INPUT.PACK]: { oneOf: `pack don't exist` },
        [FORM_INPUT.ADDITIONAL_INFO]: {},
        [FORM_INPUT.EMAIL_ME]: {},
        submit: {
          api: "Error request",
        },
      },
      required: 'The fields marked with * are mandatory',
      button: "Join us",
      thanks: {
        title: "Thank you for registering !",
        description:
          'Whitelist spot winners are announced in our discord server. Please keep in mind that registering here doesn\'t guarantee a whitelist spot, check our social pages and participate in our giveaways to maximize your chances !',
      },
    },
  },
  lang: {
    title: "lang",
    list: [
      { extension: "fr", title: "French", shortTitle: "Fr" },
      { extension: "en", title: "English", shortTitle: "En" },
    ],
  },
  footer: {
    description: 'Dive into the deep ocean and save our world !',
    copyright: '© 2022 HAPPY WATER - All Rights Reserved',
    langTitle: 'lang :',
  }
} as const;

export default en;

export type TError = typeof en.register.form.errors;

export type TEn = typeof en;

export type TContentForm = typeof en.register.form;
