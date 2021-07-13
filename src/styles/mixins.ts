import { css } from 'styled-components';
import { breakPoints } from './theme';

export const respondMin = (breakPoint, innerCss) => {
  if (breakPoints[breakPoint]) {
    const breakPointValue = breakPoints[breakPoint];
    return css`
      @media (min-width: ${breakPointValue}) {
        ${innerCss}
      }
    `;
  }
  throw 'error breakpoints doesnt exist';
};

export const respondMax = (breakPoint, innerCss) => {
  if (breakPoints[breakPoint]) {
    const breakPointValue = breakPoints[breakPoint];
    return css`
      @media (max-width: ${breakPointValue}) {
        ${innerCss}
      }
    `;
  }
  throw 'error breakpoints doesnt exist';
};

export const respondBetween = (lower, upper, innerCss) => {
  const lowerBreakPoints = breakPoints[lower];
  const upperBreakPoints = parseInt(breakPoints[upper]) - 1 + 'px';
  if (breakPoints[lower] && breakPoints[upper]) {
    return css`
      @media (min-width: ${lowerBreakPoints}) and (max-width: ${upperBreakPoints}) {
        ${innerCss}
      }
    `;
  } else if (!!breakPoints[lower]) {
    throw 'Your lower breakpoint was invalid:' + breakPoints[lower];
  } else if (!!breakPoints[upper]) {
    throw 'Your upper breakpoint was invalid:' + breakPoints[upper];
  }
};
