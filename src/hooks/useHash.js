/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import getHash from "../utils/getHash";

export const useHash = delay => {
  const [color, setColor] = useState(`#${getHash(6)}`);
  const setHashColor = () => setColor(`#${getHash(6)}`);

  useEffect(() => {
    let id = setInterval(setHashColor, delay);
    console.log('??');

    return () => clearInterval(id);
  }, []);

  return color;
};