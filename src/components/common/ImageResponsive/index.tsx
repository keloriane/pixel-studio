import * as S from './imageResponsive.styles';
import _ from 'lodash';
import React from 'react';
import {
  MaxWithMediaProps,
  MediaQueryAttributesPartial,
} from './MaxWidthMediaQueries';

export interface ImageIF {
  src?: string;
  maxWidthMediaQueries?: Array<MediaQueryAttributesPartial>;
  minHeight?: string | number;
  maxHeight?: string | number;
  minWidth?: string | number;
  objectFit?: string;
}

const ImageResponsive: React.FC<ImageIF> = (props) => {
  let { src } = props;
  const { maxWidthMediaQueries } = props;
  return (
    <S.ImageWrapper
      className={'ImageResponsive'}
      maxWidthMediaQueries={maxWidthMediaQueries}
    >
      <S.Image className={'ImageResponsive_Image'} {...props} src={src} />
    </S.ImageWrapper>
  );
};

export default ImageResponsive;
