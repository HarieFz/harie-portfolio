"use client";

import { createContext } from "react";

interface InitialContext {
  highlight: string;
  setHighlight: React.Dispatch<React.SetStateAction<string>>;
}

const initialContext = {
  highlight: "",
  setHighlight: () => "",
};

const HighlightContext = createContext<InitialContext>(initialContext);

export default HighlightContext;
