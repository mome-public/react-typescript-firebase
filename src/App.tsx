import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider'; // eslint-disable-line import/no-extraneous-dependencies
import { theme } from 'styles/theme';
import BaseButton from 'components/atoms/BaseButton';
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
      <BaseButton />
    </div>
  </ThemeProvider>
);

export default App;
