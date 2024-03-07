// global resources
import React, { useState } from 'react'

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import MenuHumbergerStyle from './MenuHumberger.module.scss'
const cg = StyleNameGestion(MenuHumbergerStyle)

// conponent
import MenuButton from './button';
import colors from 'lib/identity/colors';


const MenuHumberger = ({ state, changeState, content, menuRef }) => {
      return (
            <>
                  <div className={cg('humberger', 'menu', 'gsap_menu_humberger_text')} ref={menuRef} onClick={changeState}>
                        {/* <p className={cg(`state_${state ? 'close' : 'open'}`,'text')}>{!!state ? content.close : content.open}</p> */}
                        <p className={cg('state_close', 'text', 'closeGsap')} >
                              {content.open}
                        </p>
                        <p className={cg('state_open', 'text', 'openGsap')} >
                              {content.close}
                        </p>
                        <MenuButton
                              isOpen={state}
                              // @ts-ignore
                              onClick={() => changeState(!state)}
                              strokeWidth="3"
                              color={state ? colors.grey_1 : colors.light_1}
                              lineProps={{ strokeLinecap: "round" }}
                              transition={{ type: "spring", stiffness: 260, damping: 20 }}
                              width="26"
                              height="20"
                        />
                  </div>
            </>
      )
}

export default MenuHumberger;