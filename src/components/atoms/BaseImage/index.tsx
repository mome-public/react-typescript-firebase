import React, { FC } from 'react';

type Props = {
  src: string;
  alt?: string;
};

const BaseImage: FC<Props> = ({ src, alt = '' }) => {
  return <img src={src} alt={alt} className="image" />;
};

export default BaseImage;
