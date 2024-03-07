import { motion, AnimatePresence } from "framer-motion";

const variants = {
      bottomToTopLast: {
            enter: {
                  y: -40,
                  delay: 1.3,
                  opacity: 0,
                  duration: 1.2,
            },
            center: {
                  
                  y: 0, opacity: 1
            },
            exit: {
                  y: 0,
                  opacity: 0,
                  duration: 0.3,
            },
            transition: {
                  y: { type: "spring", stiffness: 300, damping: 10 },
            }
      },
      bottomToTop: {
            enter: {
                  y: -80,
                  opacity: 0,
                  duration: 1.2,
            },
            center: {
                  y: 0, opacity: 1
            },
            exit: {
                  y: 0,
                  opacity: 0,
                  duration: 0.1,
            },
            transition: {
                  y: { type: "spring", stiffness: 300, damping: 10 },
                  // opacity: { duration: 0.4 },
            }
      },
      opacity: {
            enter: {
                  opacity: 0
            },
            center: {
                  opacity: 1
            },
            exit: {
                  opacity: 0
            },
            transition: {
                  x: { type: "spring", stiffness: 300, damping: 25 },
                  opacity: { duration: 0.5 },
                  duration: 0.3,
            }
      },
      scrollText: {
            enter: {
                  y: -10,
                  opacity: 0,
                  duration: 0.4,
            },
            center: {
                  y: 0, opacity: 1
            },
            exit: {
                  y: 10,
                  opacity: 0,
                  duration: 0.3,
            },
            transition: {
                  y: { type: "spring", stiffness: 300, damping: 10 },
                  opacity: { duration: 0.4 },
            }
            
      }
}

const Animation = ({ name= 'bottomToTop', isChange, mode='wait' ,className = '',children }) => {
      return (
            <>    
            <div className={className} >
                  <AnimatePresence initial={false} custom={isChange} mode={mode as 'sync' | 'popLayout' | 'wait'}>
                        <motion.div 
                              key={isChange}
                              custom={isChange}
                              variants={variants[name]}
                              initial='enter'
                              animate='center'
                              exit='exit'
                              transition={variants[name].transition}
                        >
                              {children}
                        </motion.div>
                  </AnimatePresence>
            </div>
            </>
      )
}

export default Animation;