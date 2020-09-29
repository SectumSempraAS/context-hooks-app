import React from 'react';
import NavigationBar from "./components/NavigationBar";
import BookList from "./components/BookList";
import ThemesProvider from "./contexts/Themes";

function App() {
  return (
    <div className="App">
      <ThemesProvider>
          <NavigationBar/>
          <BookList/>
      </ThemesProvider>
    </div>
  );
}

export default App;
