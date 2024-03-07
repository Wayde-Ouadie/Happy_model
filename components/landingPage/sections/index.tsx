import dynamic from 'next/dynamic';


import { default as Home } from './1-home';
import { default as About } from './2-about';
import Carts from './3-carts';
import Overview from './4-overview';
import Eggs from './5-eggs';
import Collection from './6-collection';
import Assets from './7-assets';
import Map from './8-RoadMap';
import Team from './9-Team';
import Motivation from './10-motivation';



import { ROUTE_BREAKPOINT } from 'lib/conf/route';

const Sections = {
    [ROUTE_BREAKPOINT.HOME]: dynamic(() => import('./1-home')),
    [ROUTE_BREAKPOINT.ABOUT]: dynamic(() => import('./2-about')),
    [ROUTE_BREAKPOINT.CARTS]: dynamic(() => import('./3-carts')),
    [ROUTE_BREAKPOINT.OVERVIEW]: dynamic(() => import('./4-overview')),
    [ROUTE_BREAKPOINT.EGGS]: dynamic(() => import('./5-eggs')),
    collection: dynamic(() => import('./6-collection')),
    [ROUTE_BREAKPOINT.ASSETS]: dynamic(() => import('./7-assets')),
    [ROUTE_BREAKPOINT.ROAD_MAP]: dynamic(() => import('./8-RoadMap')),
    [ROUTE_BREAKPOINT.TEAM]: dynamic(() => import('.//9-Team')),
    motivation: dynamic(() => import('./10-motivation')),
    [ROUTE_BREAKPOINT.MISSION]: dynamic(() => import('./11-mission')),
}

export type SectionNames = keyof typeof Sections;

export default Sections;