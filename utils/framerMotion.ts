export const variants = {
  springInUp: {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  },
  fadeInUp: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  },
  aboutImg: {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  },
  homeSubHeading: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 1.25,
      },
    },
  },
  aboutHeading: {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 1,
      },
    },
  },
  projectImg: {
    initial: {
      opacity: 0,
      x: 60,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "circOut",
        delay: 0.25,
      },
    },
    exit: {
      x: 60,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "backIn",
      },
    },
  },
  projectNext: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
  },
  formContent: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.25,
      },
    },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  },
  staggerFast: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  staggerDelayed: {
    animate: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.25,
      },
    },
  },
  staggerHomeHeading: {
    animate: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  },
  staggerAboutTools: {
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1,
      },
    },
  },
};

export const page = {
  exit: {
    y: 60,
    opacity: 0,
    transition: {
      ease: "backIn",
      duration: 0.5,
    },
  },
};

export const layout = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export const header = (color: string) => {
  return {
    scale: 1.3,
    color: color,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  };
};

export const home = {
  exit: {
    opacity: 0,
    transition: {
      delay: 2,
    },
  },
};

export const rocket = (isSmall?: boolean) => {
  return {
    initial: {
      x: isSmall ? "100%" : "200%",
      y: isSmall ? "150%" : "-100%",
    },
    animate: {
      x: 0,
      y: 0,
      transition: {
        duration: 2,
        delay: 0.5,
        ease: [0.5, 0, 0, 1],
      },
    },
    exit: {
      x: "-60vw",
      y: isSmall ? "-60vh" : "60vh",
      scale: 8,
      transition: {
        duration: 1.5,
        ease: [0.7, 0, 0.84, 0],
      },
    },
  };
};

export const contact = {
  exit: {
    scale: 0.3,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "backIn",
    },
  },
};

export const form = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      delay: 0.25,
    },
  },
  exit: {
    scale: 0.5,
    rotate: -90,
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "backIn",
    },
  },
};

export const btn = {
  scale: 0.95,
  transition: {
    type: "spring",
    bounce: 0.5,
  },
};

export const glowBtn = {
  scale: 1.1,
  textShadow: "0 0 4px #fff",
  boxShadow: "0 0 4px #fff",
  transition: { type: "spring", bounce: 0.6 },
};

export const glowText = {
  scale: 1.1,
  textShadow: "0 0 4px #fff",
  transition: { type: "spring", bounce: 0.6 },
};

export const icon = {
  scale: 1.3,
  transition: { type: "spring", bounce: 0.6 },
};

export const planet1 = {
  scale: 1.4,
  transition: {
    type: "spring",
    bounce: 0.7,
    duration: 1,
  },
};

export const planet2 = {
  scale: 0.75,
  transition: {
    type: "spring",
    bounce: 0.6,
    duration: 1,
  },
};
