import React, { FC } from 'react';

type Props = {
  src: string;
  alt?: string;
};

export const BaseImage: FC<Props> = ({ src, alt = '' }) => {
  return <img src={src} alt={alt} className="a-image" />;
};
