import React from "react";
import Header from "./components/Header";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyle />
        {/* Header have a prop alterarThema, if we called her, we will activate the function of father called toggleTheme */}
        <Header alterarThema={toggleTheme}></Header>
      </div>
    </ThemeProvider>
  );
};

export default App;
