// global resources
import React, { FC } from 'react'

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import ButtonStyle from './Button.module.scss'
const cg = StyleNameGestion(ButtonStyle)

// type
import { Props } from './ButtonType';

// components
import { Icon } from '@uiKits';

const Button: FC<Props> = ({ back = 'none', icon = null, shadow = false, border = 'none', size = 'sm', action= () => null, children, ...buttonProps }) => {
      
      return (
            <>
                  <button type='button' onClick={action} className={cg(`back_${back} shadow_${!!shadow ? 'active' : 'none'} border_${border} size_${size}`, 'button')} {...buttonProps}>
                        <span className={cg('text')}>{children}</span>
                        {icon}
                  </button>
            </>
      )
}

export default Button;