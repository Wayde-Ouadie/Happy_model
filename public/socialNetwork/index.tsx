import discord from './discord';
import facebook from './facebook';
import google from './google';
import instagram from './instagram';
import linkedin from './linkedin';
import medium from './medium';
import twitch from './twitch';
import twitter from './twitter';

const socialNetwork = {
    discord,
    facebook,
    google,
    instagram,
    linkedin,
    medium,
    twitch,
    twitter,
} as const;

export type TSocialNetworkNames = keyof typeof socialNetwork;

export default socialNetwork;