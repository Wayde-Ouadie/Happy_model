import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    };
  },
  center: {
//     zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      // zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    };
  },
};

const Animation = ({ keyPosition, custom, children }) => {
  return (
    <>
      <motion.div
        key={keyPosition}
        custom={custom}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 25 },
          opacity: { duration: 0.65 },
          duration: 0.4,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Animation;
