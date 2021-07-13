import styled from "styled-components";
import {motion } from 'framer-motion';


export const Loader_Wrapper = styled(motion.div)`
  width: 98vw;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position:absolute;
  overflow: hidden;
  top:1vw;
  left: 1vw;
  bottom:1vw;
  right:1vw;



`;
export const Layer = styled(motion.div) `
  width: 98vw;
  height: 98vh;
  background-color: #282038;
  position: absolute;


`

export const Loader_Title_Container = styled(motion.div)`
  height: 200px;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Rowdies', cursive;
    font-style: normal;
    font-weight: bold;
    font-size: 101px;
    letter-spacing: 0.04em;
    font-variant: small-caps;
    color: #FFFFFF;
    overflow: hidden;
    text-transform: uppercase;
    span {
      display: block;

    }

  }

`
