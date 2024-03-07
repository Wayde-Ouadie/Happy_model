import { motion, AnimatePresence } from "framer-motion";

const variants = {
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
};
const Animation = ({ key, children }) => {
  return (
    <>
      <motion.div
        key={key}
        custom={key}
        variants={variants}
        initial="enter"
        animate="center"
      //   style={{ zIndex: 10 }}
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 25 },
          opacity: { duration: 0.1 },
          duration: 0.2,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Animation;
