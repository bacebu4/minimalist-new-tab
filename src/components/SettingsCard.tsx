import styled from "styled-components";
import { FlexBox } from "react-layout-library";
import { GRAY } from "../utils/colors";
import close from "../assets/close.svg";
import { Link } from "../types";

type SettingsCardProps = {
  link: Link;
};

const SettingsCardWrapper = styled(FlexBox)`
  padding: 12px 16px;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    background-color: ${GRAY}1a;
  }
`;

const SettingsCardTitle = styled.span`
  font-weight: 500;
`;

const SettingsCardSubtitle = styled.span`
  margin-top: 4px;
  font-weight: 300;
  color: ${GRAY};
`;

export const SettingsCard: React.FC<SettingsCardProps> = ({ link }) => {
  return (
    <SettingsCardWrapper ai="center" jc="space-between">
      <FlexBox direction="column">
        <SettingsCardTitle>{link.title}</SettingsCardTitle>
        <SettingsCardSubtitle>{link.url}</SettingsCardSubtitle>
      </FlexBox>
      <img width={12} src={close} alt="delete" />
    </SettingsCardWrapper>
  );
};
