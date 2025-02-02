import { useContext } from "react";
import { GlobalContext } from "../../context";


function ContextText () {


    const {theme} = useContext(GlobalContext)
    console.log(theme);
    

    return (
        <div>
            <h1 style={{
                color: theme === 'light' ? "blue" : "yellow",
                backgroundColor: theme === 'light' ? "white" : "red",
                fontFamily: "Arial",
                fontWeight: "bold"
                }} className="text-xl text-white mt-6">Hello, I am a context text component!</h1>
        </div>
    )
}

export default ContextText;