import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider'; // eslint-disable-line import/no-extraneous-dependencies
import { theme } from 'styles/theme';
import Router from 'Router';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

export default App;
