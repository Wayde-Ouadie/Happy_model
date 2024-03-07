// global resources
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import FooterStyle from './Footer.module.scss'
const cg = StyleNameGestion(FooterStyle)

import { mainMenuItems, home } from "lib/conf/route";
import { useI18n, useGoToItemLink } from 'helpers/hooks';

import Image from "next/image";

import socialNetworkIcons from "public/socialNetwork";
import { socialNetworkList } from "lib/conf/socialNetwork";

import { SectionContext } from 'pages/_app';


// media
import logo from "public/logo";
import colors from 'lib/identity/colors';
import { Icon, SelectLang } from '@uiKits';
import { useRouter } from 'next/router';


const Menu = ({ content }) => {
      const { linker } = useGoToItemLink();
      const { section } = useContext(SectionContext);

      return (
            <>
                  <ul className={cg('items', 'nav')}>
                        {
                              mainMenuItems.map(([key, value], index) => (
                                    <li key={index} onClick={() => linker({ page: value.page, offsetTop: section(value.id) })} className={cg('item')} >
                                          {content[key]}
                                    </li>
                              ))
                        }
                  </ul>
            </>
      )
}

const Footer = ({ children }) => {
      const { menu, footer } = useI18n();
      const { linker } = useGoToItemLink();

      const router = useRouter();
      const [ basePath, setBasePath ] = useState(null);
      useEffect(() => {
            setBasePath(router.basePath)
      }, [router])
      return (
            <>

                  {children}
                  <div className={cg('container', 'footer')} >
                        <div className={cg('body', 'header')} >
                              <div className={cg('left')} >
                                    <div className={cg(`logo`, "intro")} onClick={() => linker({ page: home.page, offsetTop: () => 0 })} >
                                          <Image src={logo.symbol} alt="logo_happy_water" />
                                    </div>
                                    <div className={cg('description', 'intro')} >
                                          <p>
                                                {footer.description}
                                          </p>
                                    </div>
                                    <ul className={cg('socialNetwork', 'intro')} >
                                          {socialNetworkList.map((value, key) => {
                                                return (
                                                      <li key={key} className={cg('item')}>
                                                            {socialNetworkIcons[value.icon]({ color: colors.light_1 })}
                                                      </li>
                                                )
                                          })}
                                    </ul>
                              </div>
                              <div className={cg('right')} >
                                    <div className={cg('goToTop')} onClick={() => linker({ page: null, offsetTop: () => 0 })}>
                                          <Icon name='ArrowUp' size='32' color={colors.grey_5} />
                                    </div>
                                    <div className={cg('lang')} >
                                          <p className={cg('title', 'lang')} >
                                                {footer.langTitle}
                                          </p>
                                          <span className={cg('select', 'lang')} >
                                                <SelectLang type='large' />
                                          </span>
                                    </div>
                              </div>
                        </div>
                        <div className={cg('menu')} >
                              <span className={cg('space')} ></span>
                              <div className={cg('content')} >
                                    <Menu content={menu} />
                                    <p className={cg('copyright')}>{footer.copyright}</p>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Footer;