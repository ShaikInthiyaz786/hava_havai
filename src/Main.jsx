import React, { useState } from 'react';
import { Provider, defaultTheme, lightTheme, darkTheme, Button } from '@adobe/react-spectrum';
import App from './App';

const Main = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <Provider theme={theme}>
      <Button variant="cta" onPress={toggleTheme}>
        Toggle Theme
      </Button>
      <App />
    </Provider>
  );
};

export default Main;
