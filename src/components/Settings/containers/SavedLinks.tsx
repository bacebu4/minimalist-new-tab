import { useContext, useState } from "react";
import { FlexBox } from "react-layout-library";
import { Link } from "../../../types";
import { StoreContext } from "../../../utils/StoreContext";
import { BaseButton } from "../../BaseButton";
import { BaseInput } from "../../BaseInput";
import { Switch } from "../../Switch";
import { Section } from "../components/Section";
import { SettingsCard } from "../components/SettingsCard";
import { SettingsExplanation } from "../components/SettingsExplanation";
import { SettingsUppercase } from "../components/SettingsUppercase";

export const SavedLinks: React.FC = () => {
  const [link, setLink] = useState<Link>({ title: "", url: "" });
  const { links, setLinks } = useContext(StoreContext);

  function handleUrlChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLink({ ...link, url: event.target.value });
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLink({ ...link, title: event.target.value });
  }

  function submitNewLink() {
    setLinks([...links, { ...link }]);
    setLink({ title: "", url: "" });
  }
  return (
    <>
      <Section>
        <FlexBox jc="space-between" ai="center" mb={16}>
          <SettingsUppercase>Saved links</SettingsUppercase>
          <Switch />
        </FlexBox>
        {links.map((linkEl) => (
          <SettingsCard link={linkEl} key={linkEl.title} />
        ))}
        <SettingsExplanation>
          Saved links you see at the main screen
        </SettingsExplanation>
      </Section>

      <Section>
        <SettingsUppercase>Add new links (max. 6)</SettingsUppercase>
        <FlexBox mt={16}>
          <BaseInput
            placeholder="Title"
            value={link.title}
            onChange={handleTitleChange}
          />
        </FlexBox>
        <FlexBox mt={16}>
          <BaseInput
            placeholder="URL"
            value={link.url}
            onChange={handleUrlChange}
          />
        </FlexBox>
        <FlexBox mt={16}>
          <BaseButton onClick={submitNewLink}>Add new one</BaseButton>
        </FlexBox>
      </Section>
    </>
  );
};
