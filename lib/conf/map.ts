
import Route from './route';
import SocialNetwork from './socialNetwork';

const MAP = {
      Route,
      SocialNetwork,
      externLink: {
            zapierHook: ''
      }
} as const;

export type TMap = typeof MAP;

export default MAP;