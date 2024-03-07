// global resources
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import EggsSlideStyle from './EggsSlide.module.scss'
const cg = StyleNameGestion(EggsSlideStyle)

import ItemPourcent from './ItemPourcent';
import { getEgg, listEggsGenerator, EGG } from 'lib/db/egg';

import { Icon, NavSlide, Button } from 'components/uiKits';

import { COLORS } from 'lib/db';

import { useSwap } from 'helpers/hooks';

import ethSvg from 'public/icon/eth.svg';
import decoWater from 'public/decoWater';
import { decoration } from 'public/deco';
import Animation from '../Animation';
import { useGoToItemLink } from 'helpers/hooks';
import { PAGE_LINK } from 'lib/conf/route';


import { LayoutGroup } from 'framer-motion';

const listEggs = listEggsGenerator();

const deco = [
      [decoWater.water_light_blue_1, decoration.planete_blue_1, decoWater.water_light_blue_3],
      [decoWater.water_red_1, decoWater.water_red_2, decoWater.water_red_4],
      [decoWater.water_purple_1, decoWater.water_purple_2, decoWater.water_purple_5],
]

const EggsSlide = ({ content }) => {
      const { position, direction, paginate } = useSwap(listEggs.length - 1);
      const [egg, setEggs]= useState(null);
      useEffect(() => {
            setEggs(getEgg(listEggs[position]))
      }, [position])
    const { linker } = useGoToItemLink();

      if(!egg) return null;
      return (
            <>
                  <div className={cg('container', 'eggsSlide')} >
                        <div className={cg('text', 'eggsSlide')} >
                              <div className={cg('content', 'text')} >
                                    <h2 className={cg('title', 'content')} >
                                          <Animation isChange={position} name='opacity' mode='wait' >
                                                {content.title[listEggs[position]]}
                                          </Animation>
                                    </h2>
                                    <span className={cg('description', 'content')} >
                                          <Animation isChange={position} name='opacity' mode='wait' >
                                                {content.description[listEggs[position]]}
                                          </Animation>
                                    </span>
                                    <div className={cg('action', 'content')} >
                                          <Button action={() => linker({ page: PAGE_LINK.REGISTER })} back='white' size='sm' shadow={true} >
                                                {content.action}
                                          </Button>
                                    </div>
                              </div>
                              <div className={cg('nav', 'text')} >
                                    <NavSlide dir={-1} size='22' iconName='ArrowNarrow' rounded='full' action={() => paginate(-1)} >
                                    </NavSlide>
                                    <NavSlide dir={1} size='22' iconName='ArrowNarrow' rounded='full' action={() => paginate(1)}>
                                          {content.nav.next}
                                    </NavSlide>
                              </div>
                        </div>
                        <div className={cg('image', 'eggsSlide')} >
                              <div className={cg('deco')}>
                                    <div className={cg('num_1', 'decoImage')} >
                                          <Animation isChange={position} name='bottomToTopLast' mode='wait' >

                                                <Image src={deco[position][0]} alt='egg image water decoration' />
                                          </Animation>

                                    </div>
                                    <div className={cg('num_2', 'decoImage')} >
                                          <Animation isChange={position} name='bottomToTopLast' mode='wait' >
                                                <Image src={deco[position][1]} alt='egg image water decoration' />
                                          </Animation>

                                    </div>
                                    <div className={cg('num_3', 'decoImage')} >
                                          <Animation isChange={position} name='bottomToTopLast' mode='wait' >

                                                <Image src={deco[position][2]} alt='egg image water decoration' />
                                          </Animation>

                                    </div>
                              </div>
                              <div className={cg('egg')}>
                                    <Animation isChange={position} name='bottomToTop' mode='wait' >
                                          <Image src={egg.image.src} alt={`image egg ${egg.name}`} />
                                    </Animation>
                              </div>
                              <Animation isChange={position} name='opacity' mode='popLayout' className={cg(`${listEggs[position]}`, 'background')} >
                                    <div className={cg('color')}>
                                    </div>
                              </Animation>
                        </div>
                        <div className={cg('data', 'eggsSlide')} >
                              <div className={cg('price', 'data')} >
                                    <div className={cg('head', 'price')} >
                                          <p className={cg('text')} >
                                                {content.price}
                                          </p>
                                    </div>
                                    <div className={cg('content', 'price')} >
                                          <div className={cg('icon')} >
                                                <Image src={ethSvg} alt='svg eth price of egg' width='46px' height='46px' />
                                          </div>
                                          <h4 className={cg('priceValue')}>
                                                <Animation isChange={position} name='scrollText' mode='popLayout'>
                                                      {egg.price}
                                                </Animation>
                                          </h4>
                                    </div>
                              </div>
                              <ul className={cg('characteristic', 'data')} >
                                    <LayoutGroup id='listRarities'>
                                          {egg.pourcents.map(({ value, rarity }, index) => {
                                                const image = rarity.imageWithoutBack(COLORS.BLUE).image;
                                                return <li key={`key_${value}_${index}`}>
                                                      <ItemPourcent position={position} pourcent={value} name={rarity.name} >
                                                            <Image src={image.src} alt={image.alt} />
                                                      </ItemPourcent>
                                                </li>
                                          })}
                                    </LayoutGroup>
                              </ul>
                        </div>
                  </div>
            </>
      )
}

export default EggsSlide;