import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider'; // eslint-disable-line import/no-extraneous-dependencies
import { theme } from 'styles/theme';
import { BaseButton, BaseImage } from 'components/atoms';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BaseButton href="https://www.bakery-lab.tokyo/">
        テストテキスト
      </BaseButton>
      <BaseImage src="https://mome.fan/_nuxt/img/08f6d87.png" alt="test" />
    </div>
  </ThemeProvider>
);

export default App;
