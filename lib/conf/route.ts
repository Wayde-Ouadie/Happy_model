
export enum ROUTE_BREAKPOINT {
      HOME = 'home',
      ABOUT = 'about',
      CARTS = 'carts',
      OVERVIEW = 'overview',
      EGGS = 'eggs',
      COLLECTION = 'collection',
      ASSETS = 'assets',
      ROAD_MAP = 'roadMap',
      MISSION = 'mission',
      TEAM = 'team',
      MOTIVATION= 'motivation',
      DISCLAIMER = 'disclaimer',
      REGISTER = 'register',
      LITE_PAPER = 'litePaper',
}

export enum PAGE_LINK {
      HOME = '/',
      DISCLAIMER = 'disclaimer',
      REGISTER = 'register',
      LITE_PAPER = 'litePaper',
}


enum MENU {
      MAIN = 'main',
      SECONDARY = 'secondary',
      SOCIAL_NETWORK = 'external',
      CONFIDENTIAL = 'confidential',
      ACTION = 'action',
}

type TRouterItem = {
      page: PAGE_LINK,
      inMenu: MENU[],
      id?: ROUTE_BREAKPOINT
}

export const externalLink = {
      zapierHook: 'https://hooks.zapier.com/hooks/catch/2684662/b0jq0te/',
}

const routerMap = new Map<ROUTE_BREAKPOINT, TRouterItem>([
      [ROUTE_BREAKPOINT.HOME, {
            page: PAGE_LINK.HOME,
            inMenu: [MENU.MAIN, MENU.SECONDARY],
            id: ROUTE_BREAKPOINT.HOME
      }],
      [ROUTE_BREAKPOINT.ABOUT, {
            page: PAGE_LINK.HOME,
            inMenu: [MENU.MAIN, MENU.SECONDARY],
            id: ROUTE_BREAKPOINT.ABOUT
      }],
      [ROUTE_BREAKPOINT.CARTS, {
            page: PAGE_LINK.HOME,
            inMenu: [MENU.MAIN, ,MENU.SECONDARY],
            id: ROUTE_BREAKPOINT.CARTS
      }],
      [ROUTE_BREAKPOINT.OVERVIEW, {
            inMenu: [MENU.SECONDARY],
            page: PAGE_LINK.HOME,
            id: ROUTE_BREAKPOINT.OVERVIEW
      }],
      [ROUTE_BREAKPOINT.EGGS, {
            page: PAGE_LINK.HOME,
            inMenu: [MENU.MAIN, MENU.SECONDARY],
            id: ROUTE_BREAKPOINT.EGGS,
      }],
      [ROUTE_BREAKPOINT.ASSETS, {
            page: PAGE_LINK.HOME,
            inMenu: [MENU.SECONDARY],
            id: ROUTE_BREAKPOINT.ASSETS,
      }],
      [ROUTE_BREAKPOINT.ROAD_MAP, {
            page: PAGE_LINK.HOME,
            inMenu: [MENU.MAIN, MENU.SECONDARY],
            id: ROUTE_BREAKPOINT.ROAD_MAP,
      }],
      [ROUTE_BREAKPOINT.TEAM, {
            page: PAGE_LINK.HOME,
            inMenu: [MENU.MAIN, MENU.SECONDARY],
            id: ROUTE_BREAKPOINT.TEAM,
      }],
      [ROUTE_BREAKPOINT.DISCLAIMER, {
            page: PAGE_LINK.DISCLAIMER,
            inMenu: [MENU.MAIN, MENU.CONFIDENTIAL],
      }],
      [ROUTE_BREAKPOINT.REGISTER, {
            page: PAGE_LINK.REGISTER,
            inMenu: [MENU.SECONDARY, MENU.ACTION],
      }],
      [ROUTE_BREAKPOINT.LITE_PAPER, {
            page: PAGE_LINK.LITE_PAPER,
            inMenu: [MENU.ACTION]
      }]
]);

export const mainMenuItems = [...routerMap].filter(([key, value]) => !!value.inMenu.includes(MENU.MAIN));
export const secondaryMenuItems = [...routerMap].filter(([key, value]) => !!value.inMenu.includes(MENU.SECONDARY));
export const confidentialityMenuItems = [...routerMap].filter(([key, value]) => !!value.inMenu.includes(MENU.CONFIDENTIAL));

export const getBreakPointPage = (breakPoint: ROUTE_BREAKPOINT) => (routerMap.get(breakPoint).page)
export const home = routerMap.get(ROUTE_BREAKPOINT.HOME);

export default routerMap;