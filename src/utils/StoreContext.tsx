import React, { useMemo, useState } from "react";
import { Link } from "../types";

const allLinks: Link[] = [
  { url: "https://vk.com/", title: "VK dj hiie" },
  { url: "https://vk.com/", title: "VK2" },
  { url: "https://vk.com/", title: "V3" },
  { url: "https://vk.com/", title: "VK4" },
  // { url: "https://vk.com/", title: "V" },
  // { url: "https://vk.com/", title: "VK" },
];

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
  const [links, setLinks] = useState<Array<Link>>(allLinks);

  const storeContextValue = useMemo(
    () => ({
      links,
      setLinks,
    }),
    [links, setLinks]
  );

  return (
    <StoreContext.Provider value={storeContextValue}>
      {children}
    </StoreContext.Provider>
  );
};
