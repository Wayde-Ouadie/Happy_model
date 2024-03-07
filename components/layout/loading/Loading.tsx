// global resources
import React from 'react'

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import LoadingStyle from './Loading.module.scss'
const cg = StyleNameGestion(LoadingStyle)

import { motion } from 'framer-motion';

const variants = {
      hidden: { opacity: 0, y: 20 },
      show: {
            opacity: 1, y: 0, transition: {
                  staggerChildren: 0.6,
                  delayChildren: 1,
                  ease: 'easeOut',
                  duration: 1.6
            }
      }
}
const Loading = ({ children }) => {
      
      return (
            <>
                  <motion.div variants={variants} initial={'hidden'} animate={'show'}>
                        {children}
                  </motion.div>
                  
            </>
      )
}

export default Loading;