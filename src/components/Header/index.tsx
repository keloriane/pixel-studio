import React from "react";
import * as S from './header.styles'
import {Sketch} from "../../utils/header.skecth";
import {useEffect, useRef, useState} from "react";
import gsap from 'gsap'



const Header = () => {

  const headerWrapper = useRef()
  useEffect(()=> {

    let titleArray = [];
    function splitText(text) {
      const wordSplitted = text.split(' ');
      return [...wordSplitted]
        .map(word => `<div class="chars"><div class="words-inside">${word}</div></div>`)
        .join("");
    }
    const words = [...document.querySelectorAll(".text-letter")];
    words.map(word => {
      word.innerHTML = splitText(word.textContent);
      const newLetter = [...word.querySelectorAll(".chars")];
      newLetter.map(letter => {
        titleArray.push(letter);
      });
    });
    let wordsSplitted = document.querySelectorAll('.words-inside');
    const headerTimeline = gsap.timeline();
    headerTimeline
      .from(headerWrapper.current , {duration:1 , opacity:0 , delay:.5})
      .from(wordsSplitted , {duration:.6 , y:200 ,stagger:0.02 , opacity:0 , delay:-.6})
      new Sketch(
          document.querySelector('.sketch'),
          "M397.09 6.2687C468.308 -3.14236 547.544 -4.11786 604.712 39.3094C661.512 82.4569 675.5 159.718 690.725 229.327C704.564 292.595 695.845 354.577 687.723 418.826C677.405 500.443 693.717 594.501 637.015 654.199C578.209 716.112 482.36 730.657 397.09 724.814C315.294 719.21 236.236 682.398 179.958 622.883C129.012 569.008 135.5 487.093 107.439 418.508C76.0016 341.672 -22.1091 275.829 6.00366 197.72C34.3354 119.003 150.668 126.197 225.902 89.367C284.301 60.7785 332.609 14.7895 397.09 6.2687Z",
          "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"

      )
  },[])
  return (
    <S.Header_Wrapper ref={headerWrapper}>
      <S.Header_Title_Wrapper>
        <S.Header_Title id={"header-text-hero"} className={"text-letter"}>
          Creating quality experiences for clients looking for


        </S.Header_Title>
        <S.Header_Title className={"red text-letter"}>
          the best solution.
        </S.Header_Title>
      </S.Header_Title_Wrapper>
      <div className="sketch">

      </div>
      <canvas id="paper">

      </canvas>
    </S.Header_Wrapper>

  )
}
export default Header;
