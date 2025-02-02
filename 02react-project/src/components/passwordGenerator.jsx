import { useEffect, useState, useCallback, useRef } from "react";
import Button from "./products/components/button";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const symbols = "!@#$%&'()*+-/?";

    if (numAllowed) str += nums;
    if (charAllowed) str += symbols;

    for (let i = 0; i < length; i++) {
      const chars = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(chars);
    }

    setPassword(pass);
    // navigator.clipboard.writeText(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed, generatePassword]);

  return (
    <div className="mt-8">
      <div className=" bg-indigo-950 py-6 px-4">
        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            placeholder="Password"
            value={password}
            ref={passwordRef}
            className="outline-2 outline-fuchsia-400 rounded-md block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-white sm:text-sm/6"
          />
          <Button label={"Copy"} className={"bg-fuchsia-600"} onClick={copyPasswordToClipBoard} />
        </div>
        <div className="mt-8 mb-4 flex ">
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            color="red"
            className="w-42 mr-4"
          />
          <label>Lengtn({length})</label>
        </div>
        <div className="flex justify-start items-center gap-12">
          <div className="flex justify-start items-center ">
            <input
              type="checkbox"
              id="number"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
              className="mr-3 size-4"
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex justify-start items-center">
            <input
              type="checkbox"
              id="char"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className="mr-3 size-4"
            />
            <label htmlFor="char">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
