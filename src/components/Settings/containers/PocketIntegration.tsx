import { FlexBox } from "react-layout-library";
import { BaseButton } from "../../BaseButton";
import { BaseInput } from "../../BaseInput";
import { Switch } from "../../Switch";
import { Section } from "../components/Section";
import { SettingsExplanation } from "../components/SettingsExplanation";
import { SettingsUppercase } from "../components/SettingsUppercase";

export const PocketIntegration: React.FC = () => {
  return (
    <Section>
      <FlexBox jc="space-between" ai="center" mb={16}>
        <SettingsUppercase>Pocket Integration</SettingsUppercase>
        <Switch />
      </FlexBox>
      <FlexBox mt={16}>
        <BaseInput placeholder="Your pocket API key here" />
      </FlexBox>

      <FlexBox mt={16}>
        <BaseButton>Save</BaseButton>
      </FlexBox>

      <SettingsExplanation>
        Go to the Pocket website and get your key there and everything will
        work! Trust me!
      </SettingsExplanation>
    </Section>
  );
};
