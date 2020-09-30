import React from 'react';
import NavigationBar from "./components/NavigationBar";
import BookList from "./components/BookList";
import ThemesProvider from "./contexts/Themes";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./contexts/AuthContext";
import BookListContextProvider from "./contexts/BookListContext";

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
            <ThemesProvider>
              <NavigationBar/>
                  <BookListContextProvider>
                      <BookList/>
                  </BookListContextProvider>
              <ToggleTheme/>
            </ThemesProvider>
        </AuthContextProvider>
    </div>
  );
}

export default App;
