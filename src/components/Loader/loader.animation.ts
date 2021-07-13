export const container  = {
  show: {
    transition: {
      staggerChildren:0.5,
    }
  }
};
export const loaderAnimation = {
  hidden: {opacity: 0, y: 100},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.33, .4, 0.02, .99],
      duration: 1.4,
      delay:1.4
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: [1, .24, .84, .57],
      duration: .8

    },
  },
}
