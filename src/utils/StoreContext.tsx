import React, { useEffect, useMemo, useState } from "react";
import { Link } from "../types";

const allLinks: Link[] = [
  {
    id: "1",
    url: "https://vk.com/https://vk.com/https://vk.com/https://vk.com/",
    title: "VK dj hiie vk qw we er rt ty yu ui iu io iu yu io kj hg gf fg",
  },
  { id: "2", url: "https://vk.com/", title: "VK2" },
  { id: "3", url: "https://vk.com/", title: "V3" },
  { id: "4", url: "https://vk.com/", title: "VK4" },
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
