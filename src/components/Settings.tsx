import styled from "styled-components";
import Modal from "react-modal";
import React, { useContext, useState } from "react";
import { FlexBox } from "react-layout-library";
import settingsButtonImage from "../assets/settingsButtonImage.png";
import { CloseButton } from "./CloseButton";
import { GRAY } from "../utils/colors";
import { SettingsCard } from "./SettingsCard";
import { BaseButton } from "./BaseButton";
import { BaseInput } from "./BaseInput";
import { Switch } from "./Switch";
import { Link } from "../types";
import { StoreContext } from "../utils/StoreContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    maxHeight: "60%",
    border: 0,
    borderRadius: "20px",
    paddingLeft: "44px",
    paddingRight: "44px",
  },
};

const SettingsButton = styled.img`
  position: absolute;
  left: 32px;
  bottom: 32px;
  width: 47px;
  height: 48px;

  cursor: pointer;
`;

const SettingsTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
`;

const SettingsUppercase = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
`;

const SettingsExplanation = styled.p`
  color: ${GRAY};
  font-weight: 400;
  line-height: 1.6rem;
  max-width: 80%;
  margin-top: 16px;
`;

const Section = styled.section`
  margin-top: 44px;
`;

export const Settings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <SettingsButton
        src={settingsButtonImage}
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Whatever"
      >
        <FlexBox jc="space-between" mt={16}>
          <SettingsTitle>Settings</SettingsTitle>
          <CloseButton onClick={() => setIsOpen(false)} />
        </FlexBox>

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

        <Section>
          <FlexBox jc="space-between" ai="center" mb={16}>
            <SettingsUppercase>Weather API</SettingsUppercase>
            <Switch />
          </FlexBox>
          <FlexBox mt={16}>
            <BaseInput placeholder="Your weather API key here" />
          </FlexBox>

          <FlexBox mt={16}>
            <BaseButton>Save</BaseButton>
          </FlexBox>

          <SettingsExplanation>
            Go to the Weather website and get your key there and everything will
            work! Trust me!
          </SettingsExplanation>
        </Section>

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
      </Modal>
    </>
  );
};
