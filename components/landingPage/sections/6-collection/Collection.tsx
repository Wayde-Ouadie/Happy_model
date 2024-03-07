// global resources
import React, {useContext } from 'react'
import Image from 'next/image';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import CollectionStyle from './Collection.module.scss'
const cg = StyleNameGestion(CollectionStyle)

import collections from 'public/collection';
import next from 'public/icon/next.svg';
import { useI18n } from 'helpers/hooks';

import back from 'public/collection/back.svg';
import { useGoToItemLink } from 'helpers/hooks';
import { SectionContext } from 'pages/_app';


import { PAGE_LINK } from 'lib/conf/route';

import { ROUTE_BREAKPOINT } from 'lib/conf/route';

const Collection = ({ }) => {
    const { sections: { collection } } = useI18n();
    const { linker } = useGoToItemLink();
    const { section } = useContext(SectionContext);

    
    return (
        <>
            <div className={cg('container', 'collection')} >
                <div className={cg('header', 'collection')} >
                    <h2 className={cg('title')} >
                        {collection.title}
                    </h2>
                </div>
                <div className={cg('body', 'collection')} >
                    <div className={cg('image', 'body')} >
                        <div className={cg('collection_1', 'image')} >
                            <Image src={collections.purple} priority alt='collection purple' />
                        </div>
                        <div className={cg('collection_2', 'image')} >
                            <div className={cg('imageCenter')} >
                                
                                <Image src={collections.blue} priority alt='collection blue' />
                            </div>
                            <div className={cg('back')} >
                                <Image src={back} alt='back dark' priority />
                            </div>
                        </div>
                        <div className={cg('collection_3', 'image')} >
                            <Image src={collections.yellow} priority alt='collection yellow' />
                        </div>
                    </div>
                    <div className={cg('button', 'body')} >
                        <Image onClick={() => linker({ page: PAGE_LINK.HOME, offsetTop: section(ROUTE_BREAKPOINT.ROAD_MAP) })} src={next} alt='next icon' priority />
                    </div>
                    <div className={cg('text', 'body')}>
                        <h4 className={cg('left', 'text')} >
                            {collection.motivation.left}
                        </h4>
                        <h4 className={cg('right', 'text')} >
                            {collection.motivation.right}
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection;