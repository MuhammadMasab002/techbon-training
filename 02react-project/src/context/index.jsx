import { createContext, useState } from "react";

// create the context
export const GlobalContext = createContext(null);

// Provider component
// create the global state the receive the component as a children

function GlobalState({ children }) {

    let [theme, setTheme] = useState('light');

    function handleChangeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

  return <GlobalContext.Provider value={{theme, handleChangeTheme}}>{children}</GlobalContext.Provider>;
}

export default GlobalState;
