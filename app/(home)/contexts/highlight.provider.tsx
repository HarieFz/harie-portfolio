"use client";

import React, { useState } from "react";
import HighlightContext from "./highlight.context";

export default function HighlightProvider({ children }: { children: React.ReactNode }) {
  const [highlight, setHighlight] = useState<string>("");

  return <HighlightContext.Provider value={{ highlight, setHighlight }}>{children}</HighlightContext.Provider>;
}
