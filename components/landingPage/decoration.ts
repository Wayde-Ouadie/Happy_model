import { ROUTE_BREAKPOINT } from 'lib/conf/route';
import { NDecorationBack } from 'public/deco';

type TDecoration = {
    section: ROUTE_BREAKPOINT,
    decoName: NDecorationBack,
    className: string,
    dimension: string,
}

export const decoPosition: TDecoration[] = [
    {
          decoName: 'deco_blue_1',
          dimension: '1000',
          className: `
                -right-[31%] xl:-right-[24%] 2xl:-right-[20%]
                -top-[200px] sm:-top-[300px] md:-top-[430px] xl:-top-[400px]
                w-11/12 lg:w-full
                justify-end blur-xl
                opacity-40`,
          section: ROUTE_BREAKPOINT.HOME,
    },
    {
          decoName: 'deco_white',
          dimension: '1000',
          className: `
                -left-[38%] sm:-left-[45%] md:-left-[32%] lg:-left-[30%] xl:-left-[22%] 2xl:-left-[16%]
                -top-[180px] sm:-top-[300px] md:-top-[380px]
                justify-start
                w-11/12 md:w-full
                opacity-50 blur-lg
          `,
          section: ROUTE_BREAKPOINT.HOME,
    },
    {
          decoName: 'deco_red',
          dimension: '750',
          className: `
                -right-[35%] xl:-right-[26%] 2xl:-right-[20%]
                -top-10 sm:-top-[20px] lg:-top-[43px] xl:-top-[40px]
                w-9/12 2xl:w-full
                justify-end blur-xl
                opacity-30
                `,
          section: ROUTE_BREAKPOINT.HOME,
    },
    {
          decoName: 'deco_blue_1',
          dimension: '1000',
          className: `
                -left-[30%] sm:-left-[40%] lg:-left-[32%] 2xl:-left-[25%] 4xl:-left-[20%]
                top-[60rem] sm:top-96 xl:top-60 2xl:top-40 4xl:top-96
                w-full
                justify-start
                opacity-[0.45]
          `,
          section: ROUTE_BREAKPOINT.ABOUT,
    },
    {
          decoName: 'deco_blue_2',
          dimension: '1100',
          className: `
                -top-[22rem] lg:-top-[14rem] xl:-top-[22rem] 2xl:-top-[16rem]
                -right-[14rem] lg:-right-[20rem] xl:-right-[32rem] 4xl:-right-[30rem]
                justify-end
                opacity-50
                w-11/12 2xl:w-full
          `,
          section: ROUTE_BREAKPOINT.ABOUT,
    },

    {
          decoName: 'deco_purple',
          dimension: '800',
          className: `
                -top-20
                w-full
                opacity-50
                justify-center
          `,
          section: ROUTE_BREAKPOINT.CARTS
    },
    {
          decoName: 'deco_blue_2',
          dimension: '1200',
          className: `
                justify-end
                opacity-40
                top-[12rem] lg:-top-[6rem]
                -right-[20rem]
          `,
          section: ROUTE_BREAKPOINT.OVERVIEW
    },
    {
          decoName: 'deco_red',
          dimension: '1200',
          className: `
                opacity-30 lg:opacity-40
                top-0 md:-top-20 3xl:top-0
                -left-28 md:-left-60 lg:-left-40 4xl:left-0
                justify-start
                w-full
          `,
          section: ROUTE_BREAKPOINT.EGGS
    },
    {
          decoName: 'deco_purple',
          dimension: '800',
          className: `
                opacity-30 lg:opacity-40
                -right-[4rem] sm:-right-[6rem] md:-right-[20rem] lg:-right-32 4xl:right-0
                -top-10 sm:-top-40 md:-top-80 lg:-top-60 4xl:-top-40
                w-11/12 xl:w-full
                justify-end`,
          section: ROUTE_BREAKPOINT.EGGS,
    },
    {
          decoName: 'deco_blue_2',
          dimension: '900',
          className: `
                top-[22rem] sm:top-[16rem] lg:top-[20rem]
                -right-8 sm:-right-10
                opacity-30 lg:opacity-40
                justify-end w-10/12 lg:w-full
          `,
          section: ROUTE_BREAKPOINT.EGGS,
    },
    {
          decoName: 'deco_green',
          dimension: '900',
          className: `
                top-[20rem]
                -left-[12rem]
                opacity-50
          `,
          section: ROUTE_BREAKPOINT.COLLECTION,
    },
    {
          decoName: 'deco_purple',
          dimension: '920',
          className: `
                top-[28vh]
                -right-[20vw]
                opacity-40
          `,
          section: ROUTE_BREAKPOINT.MISSION
    },
    {
          decoName: 'deco_red',
          dimension: '800',
          className: `-right-[15rem] top-[70vh] blur-3xl opacity-40`,
          section: ROUTE_BREAKPOINT.ROAD_MAP
    },
    {
      decoName: 'deco_purple',
      dimension: '900',
      className: `
            blur-3xl
            -top-[30rem]
            md:-left-[16rem] xl:-left-[22rem]
            opacity-40 border-2
            `,
      section: ROUTE_BREAKPOINT.TEAM
    },
]