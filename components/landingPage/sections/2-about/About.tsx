// global resources
import React from 'react'
import Image from 'next/image';
// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import AboutStyle from './About.module.scss'
const cg = StyleNameGestion(AboutStyle)

import { nftPrecentation } from 'public/nft';
import { slogans } from 'public/deco';
import { useI18n } from 'helpers/hooks';

import { Icon } from 'components/uiKits';

import colors from 'lib/identity/colors';

import { Button } from 'components/uiKits';
import { useGoToItemLink } from 'helpers/hooks';

import { PAGE_LINK } from 'lib/conf/route';

const About = ({ }) => {
      const { sections: { about } } = useI18n();
      const { linker } = useGoToItemLink();

      return (
            <>
                  <div className={cg('about')} >
                        <div className={cg('container', 'about')} >
                              <div className={cg('motivation', 'about')} >
                                    <div className={cg('slogan', 'motivation')} >
                                          <Image src={slogans.sloganMotivationAbout} alt='motivation happy water' />
                                    </div>
                                    <div className={cg('text', 'motivation')} >
                                          {about.motivation}
                                    </div>
                              </div>
                              <div className={cg('images', 'about')} >
                                    <div className={cg('title', 'image')}>
                                          <p className={cg('subtitle')}>{about.subtitle}</p>
                                          <h1 className={cg('title')}>{about.title}</h1>
                                    </div>
                                    <div className={cg('nft', 'image')}>
                                          <Image src={nftPrecentation.legendaryAbout.src} alt='nft happy water' />
                                    </div>
                              </div>
                              <div className={cg('description', 'about')} >
                                    <p className={cg('text')}>
                                          {about.description}
                                    </p>
                                    <div className={cg('action')}>
                                          <Button action={() => linker({ page: PAGE_LINK.REGISTER })} size='lg' icon={<Icon size='32' color={colors.secondary_1} name='ArrowBarRight' />}>{about.action}</Button>
                                    </div>
                              </div>
                        </div>
                        <div className={cg('other', 'about')} >
                              <Image src={nftPrecentation.communAbout.src} alt='Commun other nft' />
                        </div>
                  </div>
            </>
      )
}

export default About;