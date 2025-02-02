import { useContext } from "react";
import { GlobalContext } from "../../context";

function ContextButton() {
  let { handleChangeTheme } = useContext(GlobalContext);
  return (
    <div>
      <button
        onClick={handleChangeTheme}
        className="text-white bg-amber-600 px-4 py-2 rounded-md mt-4 hover:cursor-pointer"
      >
        Context Button
      </button>
    </div>
  );
}

export default ContextButton;
