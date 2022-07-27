import { useState } from "react";

export const useRange = initialState => {
  const [state, setState] = useState(initialState);

  const setEventState = ({target}) => setState(target.value);

  return [state, setEventState];
};