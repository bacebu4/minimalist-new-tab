import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../utils/StoreContext";
import { LinkElement } from "./components/LinkElement";

const SavedLinksContainer = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SavedLinks: React.FC = () => {
  const { links } = useContext(StoreContext);

  return (
    <SavedLinksContainer>
      {links.map((link) => (
        <LinkElement mt={32} link={link} key={link.id} />
      ))}
    </SavedLinksContainer>
  );
};
