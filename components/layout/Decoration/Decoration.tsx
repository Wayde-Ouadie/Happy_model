// global resources
import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import DecorationStyle from './Decoration.module.scss'
const cg = StyleNameGestion(DecorationStyle)

import { decorationBack } from 'public/deco';
import { Dimensions } from 'tabler-icons-react';

const ImageDeco = ({ marginTop, className, dimension, decoName }) => {
    const [top, setTop] = useState(null);
    useEffect(() => {
          setTop(marginTop());
    }, [marginTop()]);
    if (!top && top != 0) return null;
    return (
          <>
                <div className={`absolute flex ${className}`} style={{ marginTop: `${top}px` }}>
                      <Image src={decorationBack[decoName]} priority width={dimension} height={dimension} alt='deco happy water' />
                </div>
          </>
    )
}

const Decoration = ({ children, images, geSectionOffset }) => {
    const decoration = useMemo(() => (<div className='absolute h-[100%] w-full z-0 max-w-[100vw] overflow-hidden'>
          <div className='relative' >
                {images.map(({ decoName, className, dimension, section }, index) => React.createElement(ImageDeco, {
                    key: index,
                    dimension: dimension,
                    className: className,
                    decoName: decoName,
                    marginTop: geSectionOffset(section)
                }))}
          </div>
    </div>), [images, ]);
    return (
          <>
                <span className='relative max-w-[100vw] overflow-hidden' >
                      {decoration}
                      <span className='z-30'>
                            {children}
                      </span>
                </span>
          </>
    )
}

export default Decoration;