import React, {useEffect} from "react";
import * as S from './cursor.styles'
import Cursor from "../../../utils/cursors";
import "./cursors.scss";
import gsap from 'gsap';
import {getMousePos} from "../../../utils/helpers";



const CursorAnimation = () => {

    useEffect(() => {
        const cursor = new Cursor(document.querySelector(".cursor"));
     /*   gsap.to("#initialblob" , { MorphSVGPlugin: "#extendblob" , duration: 5    })*/

    }, [])
    return (
        <S.Cursor_Container>
            <div className="cursor">

               <svg viewBox="0 0 111 115" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/*           <path id={"initialblob"} fill-rule="evenodd" clip-rule="evenodd" d="M109.37 56.1979C110.778 74.2013 114.71 95.0372 101.19 107.039C87.2574 119.407 66.3138 114.707 48.1361 110.557C29.9732 106.411 9.05457 101.564 1.93343 84.3796C-4.96765 67.7267 8.15858 50.9771 16.9147 35.2168C24.7389 21.1339 32.4608 5.60335 48.0356 1.39939C64.1935 -2.96194 81.474 3.28228 93.9453 14.4247C105.601 24.8382 108.152 40.6323 109.37 56.1979Z" fill="#EB5757"/>
                   <path id={"extendblob"} fill-rule="evenodd" clip-rule="evenodd" d="M52.0589 1.70461C68.5197 0.416895 87.5702 -3.17758 98.5433 9.18335C109.852 21.9226 105.554 41.0717 101.76 57.6918C97.9691 74.2984 93.5374 93.4247 77.8259 99.9356C62.5998 106.245 47.2854 94.2439 32.8755 86.238C19.9994 79.0843 5.7995 72.024 1.95576 57.7837C-2.03188 43.0103 3.67731 27.2105 13.865 15.8077C23.3862 5.15084 37.827 2.81796 52.0589 1.70461Z" fill="#EB5757"/>
*/}
               </svg>
                <div className="cursor-inner">

                </div>
            </div>
            <div className="s-cursor">

            </div>
        </S.Cursor_Container>
    );
};

export default CursorAnimation;