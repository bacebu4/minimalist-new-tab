import { FlexBox, withLayoutStyles } from "react-layout-library";
import styled from "styled-components";
import { Link } from "../types";

function getFaviconPath(url: string): string {
  const splittedUrl = url.split(".");
  const faviconPath = `http://${splittedUrl[splittedUrl.length - 2]}.${
    splittedUrl[splittedUrl.length - 1]
  }/favicon.ico`;
  return faviconPath;
}

type LinkElementProps = {
  link: Link;
};

const Title = withLayoutStyles(styled.h2`
  font-size: 22px;
  font-family: "Sora", sans-serif;
`);

const Subtitle = styled.a`
  color: #949494;
  font-size: 14px;

  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const LinkElementLayout: React.FC<LinkElementProps> = ({ link }) => {
  return (
    <FlexBox direction="column">
      <FlexBox ai="center" mb={4}>
        <img
          width={20}
          height={20}
          src={getFaviconPath(link.url)}
          alt="favicon"
        />
        <Title ml={8}>{link.title}</Title>
      </FlexBox>
      <Subtitle href={`https://${link.url}`}> {link.url} </Subtitle>
    </FlexBox>
  );
};

export const LinkElement = withLayoutStyles(LinkElementLayout);
