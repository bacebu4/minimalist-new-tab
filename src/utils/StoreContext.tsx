import React, { useEffect, useMemo, useState } from "react";
import { Link } from "../types";
import { LINKS_KEY } from "./variables";

const noop = () => {
  return undefined;
};

type StoreContextType = {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  deleteLink(id: string): void;
};

export const StoreContext = React.createContext<StoreContextType>({
  links: [],
  setLinks: noop,
  deleteLink: noop,
});

export const StoreContextProvider: React.FC = ({ children }) => {
  const [links, setLinks] = useState<Array<Link>>([]);

  useEffect(function getLinksFromLocalStorage() {
    const linksFromLocalStorage = JSON.parse(
      localStorage.getItem(LINKS_KEY) || "[]"
    ) as Link[];

    setLinks(linksFromLocalStorage);
  }, []);

  useEffect(
    function saveLinksToLocalStorage() {
      localStorage.setItem(LINKS_KEY, JSON.stringify(links));
    },
    [links]
  );

  const storeContextValue = useMemo(() => {
    function deleteLink(id: string) {
      setLinks(links.filter((link) => link.id !== id));
    }
    return {
      links,
      setLinks,
      deleteLink,
    };
  }, [links, setLinks]);

  return (
    <StoreContext.Provider value={storeContextValue}>
      {children}
    </StoreContext.Provider>
  );
};
