// global resources
import React from 'react'

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import NavStyle from './Nav.module.scss'
const cg = StyleNameGestion(NavStyle)

import { Icon } from 'components/uiKits';
import colors from 'lib/identity/colors';

const Nav = ({ dir, action, size,iconName = 'ArrowNarrow', rounded= 'auto',children }) => {
    
    return (
        <>
            <button type='button' className={cg(`rounded_${rounded}`,'navButton')} onClick={action} >
                {children?.length && <p className={cg('content')} >
                    {children}
                </p>}
                <Icon color={colors.light_1} name={`${iconName}${dir == 1? 'Right' : 'Left'}`} size={size} />
            </button>
        </>
    )
}

export default Nav;