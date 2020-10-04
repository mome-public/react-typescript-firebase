import React, { FC } from 'react';
import { Header, Footer } from 'components/organisms';

export const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
