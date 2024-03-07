import { IconNames } from 'components/uiKits';
import { TSocialNetworkNames } from 'public/socialNetwork';


type TSocialNetwork = {
    state: boolean,
    link: `https://${string}`,
    icon: TSocialNetworkNames
}

const socialNetwork = new Map<TSocialNetworkNames, TSocialNetwork>([
    ['discord', {
        link: 'https://discord.com',
        state: true,
        icon: 'discord'
    }],
    ['facebook', {
        link: 'https://facebook.com',
        state: true,
        icon: 'facebook'
    }],
    ['twitter', {
        link: 'https://twitter.com',
        state: true,
        icon: 'twitter'
    }],
    ['instagram', {
        link: 'https://instagram.com',
        state: true,
        icon: 'instagram'
    }],
    ['medium', {
        link: 'https://medium.com',
        state: true,
        icon: 'medium'
    }]
]);

export default socialNetwork;

export const socialNetworkList = [...socialNetwork].map(([key, value]) => ({key, ...value}))