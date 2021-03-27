import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";
import { FlexBox } from "react-layout-library";
import settingsButtonImage from "../assets/settingsButtonImage.png";
import { CloseButton } from "./CloseButton";

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
  color: #949494;
  font-weight: 600;
  text-transform: uppercase;
`;

const SettingsExplanation = styled.p`
  color: #949494;
  font-weight: 400;
  line-height: 1.6rem;
  max-width: 80%;
`;

export const Settings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

        <section>
          <SettingsUppercase>Important some</SettingsUppercase>
          <SettingsExplanation>Use it wisely here</SettingsExplanation>
        </section>
      </Modal>
    </>
  );
};
