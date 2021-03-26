import { FlexBox } from "react-layout-library";
import { LaterCard } from "./components/LaterCard";
import { LinkElement } from "./components/LinkElement";
import { Time } from "./components/Time";

const App: React.FC = () => {
  return (
    <>
      <FlexBox jc="center" ai="center" h="100vh" direction="column">
        <Time />
        <LinkElement link={{ title: "GH Flow", url: "docs.github.com" }} />
        <LaterCard
          link={{ title: "GH Flow", url: "docs.github.com", time: 3 }}
        />
      </FlexBox>
    </>
  );
};

export default App;
