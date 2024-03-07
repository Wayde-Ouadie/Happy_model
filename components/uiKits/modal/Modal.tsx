// global resources
import React, {useCallback } from 'react'

import { motion, AnimatePresence } from 'framer-motion';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import ModelStyle from './Model.module.scss'
const cg = StyleNameGestion(ModelStyle)

const backdrop = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
}

const modal = {
      hidden: {
            y: '-100vh',
            opacity: 0,
      },
      visible: {
            y: '0px',
            opacity: 1,
            transition: { delay: 0.5 }
      }
}

const Model = ({ showModal, setShowModal, children }) => {
      
      return (
            <>
                        
                  <AnimatePresence mode='wait' >
                        {showModal && (
                              <motion.div  className={cg('backdrop')} variants={backdrop} initial='hidden' animate='visible' exit='hidden'>
                                    <motion.div className={cg('modal')} variants={modal} >
                                          {children}
                                    </motion.div>
                                    <div className={cg('back')} onClick={() => setShowModal(false)}></div>
                              </motion.div>
                        )}
                  </AnimatePresence>

            </>
      )
}

export default Model;