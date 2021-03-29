import React, { useEffect, useMemo, useState } from "react";
import { Link } from "../types";

const noop = () => {
  return undefined;
};

type StoreContextType = {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
};

export const StoreContext = React.createContext<StoreContextType>({
  links: [],
  setLinks: noop,
});

export const StoreContextProvider: React.FC = ({ children }) => {
  const [links, setLinks] = useState<Array<Link>>([]);

  const storeContextValue = useMemo(
    () => ({
      links,
      setLinks,
    }),
    [links, setLinks]
  );

  useEffect(function getLinksFromLocalStorage() {
    const linksFromLocalStorage = JSON.parse(
      localStorage.getItem("mnt-links") || "[]"
    ) as Link[];

    setLinks(linksFromLocalStorage);
  }, []);

  useEffect(
    function saveLinksToLocalStorage() {
      localStorage.setItem("mnt-links", JSON.stringify(links));
    },
    [links]
  );

  return (
    <StoreContext.Provider value={storeContextValue}>
      {children}
    </StoreContext.Provider>
  );
};
