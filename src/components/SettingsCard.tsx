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

const SettingsCardTitle = styled.div`
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SettingsCardSubtitle = styled.div`
  margin-top: 4px;
  font-weight: 300;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${GRAY};
`;

const NowrapContainer = styled.div`
  flex: 1;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SettingsCard: React.FC<SettingsCardProps> = ({ link }) => {
  return (
    <SettingsCardWrapper ai="center" jc="space-between">
      <NowrapContainer>
        <SettingsCardTitle>{link.title}</SettingsCardTitle>
        <SettingsCardSubtitle>{link.url}</SettingsCardSubtitle>
      </NowrapContainer>
      <img
        width={12}
        src={close}
        alt="delete"
        style={{ whiteSpace: "nowrap" }}
      />
    </SettingsCardWrapper>
  );
};
