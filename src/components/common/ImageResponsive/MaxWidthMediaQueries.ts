import { log } from 'util';
import { respondMin, respondMax, respondBetween } from '../../../styles/mixins';
import { css } from 'styled-components';

export type BetweenProps = [number, string, string];
export type MinOrMaxProps = [number, string];
export type BreakPoint = [string, string];

export interface MediaQueryAttributes {
  between: BetweenProps;
  min: MinOrMaxProps;
  max: MinOrMaxProps;
}

export enum MediaQuery {
  Between = 'between',
  Max = 'max',
  Min = 'min',
}

export type MediaQueryAttributesPartial = Partial<MediaQueryAttributes>;
export type MediaQueryPartial = Partial<MediaQuery>;

export interface maxWidthProps {
  maxWidthSize: string;
  breakPointKey: string;
}

export interface MaxWithMediaProps {
  maxWidth?: maxWidthProps;
  maxWidthMediaQueries?: MediaQueryAttributesPartial[];
}

export class MaxWidthMediaBuilder {
  mediaQuery: MediaQueryPartial;
  maxWidth: number | string;
  breakPoint: BreakPoint | any;
  mediaValues: BetweenProps | MinOrMaxProps;

  init(maxWidthProps: MediaQueryAttributesPartial) {
    // @ts-ignore
    this.mediaQuery = Object.keys(maxWidthProps).shift();
    this.mediaValues = maxWidthProps[this.mediaQuery];
    this.maxWidth = this.mediaValues.shift();
    this.breakPoint = this.mediaValues;

    return this.getMediaQuery();
  }

  mediaQueryExist() {
    return Object.values(MediaQuery).includes(this.mediaQuery);
  }

  getMediaQuery() {
    const innerCss = css`
      max-width: ${this.maxWidth + 'px'};
    `;
    const mediaQueryParams = [...this.breakPoint, innerCss];

    switch (this.mediaQuery) {
      case MediaQuery.Min:
        // @ts-ignore
        return respondMin(...mediaQueryParams);
      case MediaQuery.Max:
        // @ts-ignore
        return respondMax(...mediaQueryParams);
      case MediaQuery.Between:
        // @ts-ignore
        return respondBetween(...mediaQueryParams);
    }
  }
}
