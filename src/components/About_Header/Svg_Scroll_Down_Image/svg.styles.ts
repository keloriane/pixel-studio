import styled from "styled-components";


export const Svg_Scroll = styled.div`
  position: absolute;
  left: 49%;
  top: 58%;
  .white{
    z-index: 2;
    path {

    fill: white;
      
    }
  }
  .black{
    z-index: -1;
    path {
  
    fill: black;
      
    }
  }
  
  
  .hello {
    transform-origin: center center;
    mix-blend-mode: difference;
  animation: rotate-animation 10s infinite linear;
  
    
  }
  

  @keyframes rotate-animation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
