import styled from "styled-components";
import { Link } from "../types";
import { LinkElement } from "./LinkElement";

const LinksContainer = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

type LinksProps = {
  links: Link[];
};

export const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <LinksContainer>
      {links.map((link) => (
        <LinkElement mt={32} link={link} key={link.title} />
      ))}
    </LinksContainer>
  );
};
