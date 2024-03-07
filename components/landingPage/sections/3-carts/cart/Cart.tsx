// global resources
import React, { useState, useEffect, useContext } from 'react'

import { motion } from 'framer-motion';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import CartStyle from './Cart.module.scss'
const cg = StyleNameGestion(CartStyle)

import { Modal, Portal } from 'components/uiKits';

import { ScrollProvider } from 'components/layout/animationConf/AnimationConf';

const Cart = ({ image, title, option: {attribute, value}, index, tag}: any) => {
      const [ showModal, setShowModal ] = useState(false);
      const { pauseScroller, restartScroll } = useContext(ScrollProvider);
      const detectKeyDown = (e) => {
            if(!e) return;
            if(['Escape', ' ', 13].includes(e.key)){
                  setShowModal(false);
            }
      }
      useEffect(() => {
            document.addEventListener('keydown', detectKeyDown, true);
      }, [])
      useEffect(() => {
            if(showModal){
                  pauseScroller();
            }else{
                  restartScroll();
            }
      }, [showModal]);
      return (
            <>
                  <Portal selector='#tooltip'>
                        <Modal showModal={showModal} setShowModal={setShowModal}>{image[title]}</Modal>
                  </Portal>

                  <div className={cg(`container img_${index}`, 'cart')} onClick={() => setShowModal(true)}>
                        <div className={cg('content', 'cart')} >
                              <div className={cg('container')} >
                                    <div className={cg('left', 'cart')} >
                                          <h4 className={cg('name', 'left')} >
                                                {title}
                                          </h4>
                                          <span className={cg('option', 'left')} >
                                                {value}
                                          </span>
                                    </div>
                                    <div className={cg('right', 'cart')} >
                                          <div className={cg('tag', 'cart')}>{tag}</div>
                                    </div>
                              </div>
                        </div>
                        <div className={cg('image', 'cart')} >
                              {image[title]}
                        </div>
                  </div>
            </>
      )
}

export default Cart;