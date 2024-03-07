// global resources
import React, { useEffect, useContext } from 'react'
import Image from 'next/image';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import CartsStyle from './Carts.module.scss'
const cg = StyleNameGestion(CartsStyle)

import { useI18n, useWindowDimension, useContainerDimensions } from 'helpers/hooks';
import { slogans } from 'public/deco';

import Cart from './cart';

import { cartByColor, COLORS, nfts } from 'lib/db';
const blueCarts = cartByColor(COLORS.BLUE)

import { PAGE_LINK } from 'lib/conf/route';
import { useGoToItemLink } from 'helpers/hooks';
import { SectionContext } from 'pages/_app';

import Slide from './slide';
import { ROUTE_BREAKPOINT } from 'lib/conf/route';


const Carts = ({ }) => {
    const { sections: { carts }} = useI18n();
    const dimension = useWindowDimension();
    const { linker } = useGoToItemLink();
    const { section } = useContext(SectionContext);

    if(!dimension) return null;    
    return (
        <>
            <div className={cg('container', 'carts', 'h-full')} >
                <div className={cg('header', 'carts')} >
                    <h2 className={cg('title', 'header')} >
                        {carts.title}
                    </h2>
                    <p className={cg('description', 'header')} >
                        {carts.description}
                    </p>
                </div>
                <Slide dimension={dimension} content={carts} />
                <div className={cg('deco', 'carts')} >
                    <div className={cg('container', 'deco')} >
                        <p className={cg('text', 'deco')} >
                            {carts.motivation}
                        </p>
                        <div className={cg('image', 'deco')} >
                            <Image onClick={() => linker({ page: PAGE_LINK.HOME, offsetTop: section(ROUTE_BREAKPOINT.OVERVIEW) })} src={slogans.sloganCart} alt='image slogan cart' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carts;