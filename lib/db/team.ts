
import { StaticImageData } from 'next/image';
import team from 'public/team';

import { TSocialNetworkNames } from 'public/socialNetwork';
 

type TSocialNetwork = { 
      name: TSocialNetworkNames,
      link: string
} 

export type ITeam = {
      lastName?: string,
      firstName?: string,
      pseudoName: string,
      email?: `${string}@${string}`,
      resume: string,
      title: 'founder' | 'co-founder',
      image?: StaticImageData,
      socialNetworks?: TSocialNetwork[],
      portfolio?: string
      handle: `@${string}`
}

const teams: ITeam[] = [{
      firstName: 'amine',
      pseudoName: 'amine boussik',
      handle: '@amine_boussik',
      // image: team.amineBousik.src,
      title: 'founder',
      resume: 'Ex-game developer. And a PhD in artificial intelligence with a strong background in mathematics and computer science.',
      socialNetworks: [{
            name: 'facebook',
            link: 'http://www.facebook.com',
      }, {
            name: 'linkedin',
            link: 'http://www.linkedin.com',
      }, {
            name: 'twitter',
            link: 'http://twitter.com',
      }, {
            name: 'discord',
            link: 'http://discordapp.com',
      }]
}, {
      firstName: 'Rachid',
      lastName: 'kinta',
      resume: 'Data scientist and AI developer with years of experience in the field. Brings innovative concepts on the financial and design side of the game.',
      handle: '@rachid_kinta',
      pseudoName: 'rachid kinta',
      // image: team.rachidKinta.src,
      title: 'co-founder',
      socialNetworks: [{
            name: 'facebook',
            link: 'https://www.facebook.com',
      }, {
            name: 'twitter',
            link: 'https://twitter.com',
      }, {
            name: 'discord',
            link: 'https://discordapp.com',
      }]
}, {
      firstName: 'mohamed amine',
      lastName: 'sayagh',
      resume: ' Seasoned web developer and blockchain expert, responsible for the website development and the "invisible" side of the project.',
      pseudoName: 'mohamed amine sayagh',
      title: 'co-founder',
      // image: team.mohamedAmineSayagh.src,
      handle: '@amine_sayagh',
      socialNetworks: [{
            name: 'facebook',
            link: 'https://www.facebook.com',
      }, {
            name: 'twitter',
            link: 'https://twitter.com',
      }, {
            name: 'instagram',
            link: 'https://instagram.com',
      }]
},{
      firstName: 'Holyfish',
      pseudoName: 'Holyfish',
      handle: '@Holyfish',
      resume: 'Senior lead artist at ubisoft game studios with more than 10+ years of experience. Responsible for the NFTs and the graphic design of the game.',
      title: 'co-founder',
      // image: team.amineBousik.src,
      socialNetworks: [{
            name: 'facebook',
            link: 'http://www.facebook.com',
      }, {
            name: 'linkedin',
            link: 'http://www.linkedin.com',
      }, {
            name: 'twitter',
            link: 'http://twitter.com',
      }, {
            name: 'discord',
            link: 'http://discordapp.com',
      }]
}];

export default teams;
