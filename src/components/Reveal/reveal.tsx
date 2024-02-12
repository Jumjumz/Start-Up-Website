import { useInView, motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

interface Props {
  children: JSX.Element;
}

export const FadeLeft = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export const FadeRight = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export const MoveUp = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("offup");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        offup: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="offup"
      animate={mainControls}
      transition={{ duration: 2, delay: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export const MoveDown = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("offup");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        offup: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="offup"
      animate={mainControls}
      transition={{ duration: 2, delay: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export const ShowUp = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("showUp");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        showUp: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="showUp"
      animate={mainControls}
      transition={{ duration: 2, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
