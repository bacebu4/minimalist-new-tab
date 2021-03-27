import { FlexBox } from "react-layout-library";
import { LaterCard } from "./components/LaterCard";
import { LinkElement } from "./components/LinkElement";
import { Settings } from "./components/Settings";
import { Time } from "./components/Time";
import { Weather } from "./components/Weather";

const App: React.FC = () => {
  return (
    <>
      <Weather />
      <Settings />

      <FlexBox jc="center" ai="center" h="100vh" direction="column">
        <Time />
        <LinkElement
          mt={32}
          link={{ title: "GH Flow", url: "docs.github.com" }}
        />
        <LaterCard
          mt={32}
          link={{ title: "GH Flow", url: "docs.github.com", time: 3 }}
        />
      </FlexBox>
    </>
  );
};

export default App;
