// global resources
import React from 'react'

import Icons from '../IconsList';

const Icon = ({ size, name, ...props }) => {
   return (
        <>
            <svg width={size} height={size}  {...props}>
                {
                    Icons[name]({ width: size, height: size, ...props })
                }
            </svg>
        </>
    )
}

export default Icon;