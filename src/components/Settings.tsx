import styled from "styled-components";
import settingsButtonImage from "../assets/settingsButtonImage.png";

const SettingsButton = styled.img`
  position: absolute;
  left: 32px;
  bottom: 32px;
  width: 47px;
  height: 48px;

  cursor: pointer;
`;

export const Settings: React.FC = () => {
  return (
    <>
      <SettingsButton src={settingsButtonImage} />
    </>
  );
};
