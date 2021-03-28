import { useState } from "react";
import { FlexBox } from "react-layout-library";
import { Laters } from "./components/Laters";
import { Links } from "./components/Links";
import { Settings } from "./components/Settings";
import { Time } from "./components/Time";
import { Weather } from "./components/Weather";
import { Link } from "./types";

const allLinks: Link[] = [
  { url: "https://vk.com/", title: "VK dj hiie" },
  { url: "https://vk.com/", title: "VK2" },
  { url: "https://vk.com/", title: "V3" },
  { url: "https://vk.com/", title: "VK4" },
  // { url: "https://vk.com/", title: "V" },
  // { url: "https://vk.com/", title: "VK" },
];

const App: React.FC = () => {
  const [links] = useState<Array<Link>>(allLinks);
  return (
    <>
      <Weather />
      <Settings />

      <FlexBox jc="center" ai="center" h="100vh" direction="column">
        <Time />
        <Links links={links} />
        <Laters mt={32} />
      </FlexBox>
    </>
  );
};

export default App;
