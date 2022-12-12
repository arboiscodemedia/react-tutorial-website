import MenuRoutes from "./MenuRoutes";
 
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { createContext } from "react"; 
import { useState } from "react";


export const Context = createContext("false");

function App() {
  const [dark, setDarkMode] = useState(false);

  const handleMode = () => {
    setDarkMode(!dark);
  };
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light"
    }
  });

  return (
    <Context.Provider value={{ handleMode }}>
        <ThemeProvider theme={theme}>
        <div className="App">  
          <MenuRoutes/>
        </div>
    </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
