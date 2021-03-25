import { FlexBox } from "react-layout-library";
import { LinkElement } from "./components/LinkElement";

const App: React.FC = () => {
  return (
    <>
      <FlexBox jc="center" ai="center" h="100vh">
        <LinkElement link={{ title: "GH Flow", url: "docs.github.com" }} />
      </FlexBox>
    </>
  );
};

export default App;
