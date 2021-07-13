import React, {useRef} from "react"
import * as S from './loader.styles';
import {useEffect} from "react";
import gsap from 'gsap';
import {motion} from 'framer-motion'

interface headerImg{
setLoading:any
}
const Loader:React.FC<headerImg> = ({setLoading}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000)

    gsap.from(".LoaderWrapper",{x:"-100%" , duration:1.2})
    return () => clearTimeout(timer)

  }, [])


  const container  = {
    initial: {
      transition: {
        staggerChildren:3,

      }
    },
    exit: {
      transition: {
        duration:1,
        staggerChildren:3,

      }
    }
  };
  const loaderAnimation = {
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
        duration:1

      },
    },
  }


  return (
    <S.Loader_Wrapper
      className={"loader"}
      layoutId="main-image-1"
      variants={container}
      onAnimationComplete={() => setLoading(false)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <S.Layer

        className={"LoaderWrapper"}


      >

      </S.Layer>
      <S.Loader_Title_Container>
              <motion.h1
                layoutId={"title"}
              >
                <motion.span
                  className={"words"}
                  variants={loaderAnimation}
                >
                Pixel
                </motion.span>
                <motion.span
                  className={"red words"}
                  variants={loaderAnimation}
                >
                Studio
                </motion.span>
              </motion.h1>
      </S.Loader_Title_Container>
    </S.Loader_Wrapper>
  )
}
export default Loader;
