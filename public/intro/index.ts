import cloud_4xl from './cloud_4xl.svg';
import cloud_3xl from './cloud_3xl.svg';
import cloud_2xl from './cloud_2xl.svg';
import cloud_xl from './cloud_xl.svg';
import cloud_lg from './cloud_lg.svg';
import cloud_md from './cloud_md.svg';
import cloud_sm from './cloud_sm.svg';
import cloud_xs from './cloud_xs.svg';

import water_4xl from './water_4xl.svg';
import water_3xl from './water_3xl.svg';
import water_2xl from './water_2xl.svg';
import water_xl from './water_xl.svg';
import water_lg from './water_lg.svg';
import water_md from './water_md.svg';
import water_sm from './water_sm.svg';
import water_xs from './water_xs.svg';

import lune_4xl from './lune_4xl.svg';
import lune_3xl from './lune_xl.svg';
import lune_2xl from './lune_2xl.svg';
import lune_xl from './lune_xl.svg';
import lune_lg from './lune_lg.svg';
import lune_md from './lune_md.svg';
import lune_sm from './lune_sm.svg';
import lune_xs from './lune_xs.svg';

import stars_4xl from './stars_4xl.svg';
import stars_3xl from './stars_2xl.svg';
import stars_2xl from './stars_2xl.svg';
import stars_xl from './stars_xl.svg';
import stars_lg from './stars_lg.svg';
import stars_md from './stars_md.svg';
import stars_sm from './stars_sm.svg';
import stars_xs from './stars_xs.svg';

import { BREAKPOINT } from 'helpers/hooks';

const images = {
    cloud: {
        [BREAKPOINT['4XL']]: { src: cloud_4xl },
        [BREAKPOINT['3XL']]: { src: cloud_3xl },
        [BREAKPOINT['2XL']]: { src: cloud_2xl },
        [BREAKPOINT.XL]: { src: cloud_xl },
        [BREAKPOINT.LG]: { src: cloud_lg },
        [BREAKPOINT.MD]: { src: cloud_md },
        [BREAKPOINT.SM]: { src: cloud_sm },
        [BREAKPOINT.XS]: { src: cloud_xs },
        [BREAKPOINT.XXS]: { src: cloud_xs },
        [BREAKPOINT.XXXS]: { src: cloud_xs}
    },
    lune: {
        [BREAKPOINT['4XL']]: {src: lune_2xl, coefficient: 4 },
        [BREAKPOINT['3XL']]: {src: lune_2xl , coefficient: 4 },
        [BREAKPOINT['2XL']]: {src: lune_2xl , coefficient: 4 },
        [BREAKPOINT.XL]: {src: lune_2xl , coefficient: 3.3 },
        [BREAKPOINT.LG]: {src: lune_2xl , coefficient: 2.85 },
        [BREAKPOINT.MD]: {src: lune_2xl , coefficient: 2.4 },
        [BREAKPOINT.SM]: {src: lune_2xl , coefficient: 2 },
        [BREAKPOINT.XS]: {src: lune_2xl , coefficient: 1.6 },
        [BREAKPOINT.XXS]: {src: lune_2xl , coefficient: 1.2 },
        [BREAKPOINT.XXXS]: { src: lune_2xl , coefficient: 0.55}
    },
    stars: {
        [BREAKPOINT['4XL']]: { src: stars_4xl },
        [BREAKPOINT['3XL']]: { src: stars_3xl },
        [BREAKPOINT['2XL']]: { src: stars_2xl },
        [BREAKPOINT.XL]: { src: stars_xl },
        [BREAKPOINT.LG]: { src: stars_lg },
        [BREAKPOINT.MD]: { src: stars_md },
        [BREAKPOINT.SM]: { src: stars_sm },
        [BREAKPOINT.XS]: { src: stars_xs },
        [BREAKPOINT.XXS]: { src: stars_xs },
        [BREAKPOINT.XXXS]: { src: stars_xs }
    },
    water: {
        [BREAKPOINT['4XL']]: { src: water_4xl },
        [BREAKPOINT['3XL']]: { src: water_3xl },
        [BREAKPOINT['2XL']]: { src: water_2xl },
        [BREAKPOINT.XL]: { src: water_xl },
        [BREAKPOINT.LG]: { src: water_lg },
        [BREAKPOINT.MD]: { src: water_md },
        [BREAKPOINT.SM]: { src: water_sm },
        [BREAKPOINT.XS]: { src: water_xs },
        [BREAKPOINT.XXS]: { src: water_xs },
        [BREAKPOINT.XXXS]: { src: water_xs }

    }
}

export default images;