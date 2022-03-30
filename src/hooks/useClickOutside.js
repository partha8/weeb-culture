import { useEffect, useRef } from "react";

export const useClickOutside = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    const clickHandler = (e) => {
      if (domNode.current && !domNode.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", clickHandler);
    return () => document.removeEventListener("mousedown", clickHandler);
  });
  return domNode;
};
