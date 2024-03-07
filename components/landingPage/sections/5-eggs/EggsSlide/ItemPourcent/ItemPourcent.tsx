// global resources
import React from 'react'
import Image from 'next/image';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import ItemPourcentStyle from './ItemPourcent.module.scss'
const cg = StyleNameGestion(ItemPourcentStyle)

import star from 'public/icon/star.svg';
import Animation from '../../Animation';
import { motion, AnimatePresence } from 'framer-motion';

const ItemPourcent = ({ name, pourcent, position, children }) => {

      return (
            <>
                  <motion.div className={cg('pourcent', 'item')} initial={{ opacity: 1 }} animate={{ opacity: 1 }} >
                        <div className={cg('number', 'item')} >
                              <div className={cg('data')} >
                                    <h5 className={cg('title')} >
                                          {name}
                                    </h5>
                                    <span className={cg('number')} >
                                          <AnimatePresence >
                                                <motion.div key={pourcent} initial={{ opacity: 0 }}
                                                      animate={{ opacity: 1 }}
                                                      exit={{ opacity: 0 }}
                                                      transition={{ duration: 0.6 }}>
                                                      {pourcent}%
                                                </motion.div>
                                          </AnimatePresence>

                                    </span>
                              </div>
                              <div className={cg('value')} >
                                    <div className={cg('pourcent')}>
                                          <motion.div key={pourcent} initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: `${pourcent > 10 ? pourcent : pourcent > 3 ? pourcent * 2 : pourcent * 5}%` }}
                                                exit={{ opacity: 0, width: '100%' }}
                                                transition={{ duration: 0.6, ease: "circOut", type: "tween", }}
                                                style={{ width: 100 }}
                                          />
                                    </div>
                                    <div className={cg('star')} >
                                          <Image src={star} height={30} width={30} alt='svg star' />
                                    </div>

                              </div>
                        </div>
                        <div className={cg('image', 'item')} >
                              <motion.div key={pourcent} initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                              >
                                    {children}
                              </motion.div>
                        </div>
                  </motion.div>
            </>
      )
}

export default ItemPourcent;