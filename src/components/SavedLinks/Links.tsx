import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../utils/StoreContext";
import { LinkElement } from "./components/LinkElement";

const LinksContainer = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Links: React.FC = () => {
  const { links } = useContext(StoreContext);

  return (
    <LinksContainer>
      {links.map((link) => (
        <LinkElement mt={32} link={link} key={link.id} />
      ))}
    </LinksContainer>
  );
};
