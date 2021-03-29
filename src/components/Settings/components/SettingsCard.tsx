import styled from "styled-components";
import { FlexBox } from "react-layout-library";
import { useContext } from "react";
import { GRAY } from "../../../utils/colors";
import close from "../../../assets/close.svg";
import { Link } from "../../../types";
import { StoreContext } from "../../../utils/StoreContext";

type SettingsCardProps = {
  link: Link;
};

const SettingsCardWrapper = styled(FlexBox)`
  padding: 12px 16px;
  border-radius: 9px;

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
  const { deleteLink } = useContext(StoreContext);

  return (
    <SettingsCardWrapper ai="center" jc="space-between">
      <NowrapContainer>
        <SettingsCardTitle>{link.title}</SettingsCardTitle>
        <SettingsCardSubtitle>{link.url}</SettingsCardSubtitle>
      </NowrapContainer>
      <button
        type="button"
        onClick={() => deleteLink(link.id)}
        style={{ whiteSpace: "nowrap" }}
      >
        <img width={12} src={close} alt="delete" />
      </button>
    </SettingsCardWrapper>
  );
};
