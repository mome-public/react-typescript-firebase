import React from 'react';
import { BaseButton, BaseImage } from 'components/atoms';
import logo from 'assets/images/logo.svg';

export const TopTemplate: React.FC = () => (
  <div className="t-top">
    <header className="t-top-header">
      <img src={logo} className="t-top-logo" alt="logo" />
      <p>
        Edit <code>src/Top.tsx</code> and save to reload.
      </p>
      <a
        className="t-top-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <BaseButton href="https://www.bakery-lab.tokyo/">テストテキスト</BaseButton>
    <BaseImage src="https://mome.fan/_nuxt/img/08f6d87.png" alt="test" />
  </div>
);
