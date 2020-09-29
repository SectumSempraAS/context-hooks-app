import React from 'react';
import NavigationBar from "./components/NavigationBar";
import BookList from "./components/BookList";
import ThemesProvider from "./contexts/Themes";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  return (
    <div className="App">
      <ThemesProvider>
          <NavigationBar/>
          <BookList/>
          <ToggleTheme/>
      </ThemesProvider>
    </div>
  );
}

export default App;
