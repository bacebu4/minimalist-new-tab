import { FlexBox } from "react-layout-library";
import { Laters } from "./components/Laters";
import { SavedLinks } from "./components/SavedLinks/SavedLinks";
import { Settings } from "./components/Settings/Settings";
import { Time } from "./components/Time";
import { Weather } from "./components/Weather";
import { StoreContextProvider } from "./utils/StoreContext";

const App: React.FC = () => {
  return (
    <StoreContextProvider>
      <Weather />
      <Settings />

      <FlexBox jc="center" ai="center" h="100vh" direction="column">
        <Time />
        <SavedLinks />
        <Laters mt={32} />
      </FlexBox>
    </StoreContextProvider>
  );
};

export default App;
