import React, { ReactChildren } from 'react';
import _ from 'lodash';
import * as S from './text.styles';
import styled, { css } from 'styled-components';

interface Clamp {
  min: number;
  vw: number;
  max: number;
}

export type FontSizeOrClamp = number | Clamp;

export interface IText {
  as?: React.ElementType;
  backgroundColor?: string;
  color?: string | React.ReactNode;
  className?: string;
  debug?: boolean;
  display?: string;
  fontFamily?: string;
  fontSize?: FontSizeOrClamp | string;
  fontStyle?: string;
  fontWeight?: number;
  lineHeight?: number | string;
  linkHoverColor?: string;
  linkVisitedColor?: string;
  maxWidth?: number;
  noLink?: boolean;
  opacity?: number;
  stacked?: boolean;
  textTransform?: string;
  textDecoration?: string;
  textDecorationColor?: string;
  variants?: any;
  zIndex?: number;
  children?: any | any[];
  maxLines?: number;
  letterSpacing?: string;
  textAlign?: string;
  textIndent?: string;
}

const Text = (props: IText) => {
  return <S.Text className={`${props.className} text-builder`} {...props} />;
};

export default Text;
