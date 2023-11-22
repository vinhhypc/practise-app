import { motion, useScroll, useSpring } from 'framer-motion';
import Lorem from './Lorem';

function Motion() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="bg-[#d6d6d7] pb-5" transition-style="in:circle:hesitate">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
        className="w-20 h-20 bg-red-400 rounded-full"
      />
      <motion.div
        style={{ pathLength: scrollYProgress }}
        className=" flex justify-center items-center"
      >
        <Lorem />
      </motion.div>
    </div>
  );
}

export default Motion;
