import { motion, AnimatePresence } from "framer-motion";

const variants = {
  leftToRight: {
    enter: {
      x: -20,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 20,
      opacity: 0,
    },
    transition: {
      x: { type: "spring", stiffness: 300, damping: 25 },
      opacity: { duration: 0.1 },
      duration: 0.2,
    }
  },
  opacity: {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      opacity: { duration: 0.3 },
      duration: 0.3,
    }
  },
};
const Animation = ({ name= 'leftToRight', isChange, mode= 'wait', children }) => {
  return (
    <>
      <AnimatePresence initial={false} custom={isChange} mode={mode as 'sync' | 'popLayout' | 'wait'}>
        <motion.div
          key={isChange}
          custom={isChange}
          variants={variants[name]}
          initial="enter"
          animate="center"
          exit="exit"
          transition={variants[name].transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Animation;
