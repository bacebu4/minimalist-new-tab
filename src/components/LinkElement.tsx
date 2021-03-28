import { FlexBox, withLayoutStyles } from "react-layout-library";
import styled from "styled-components";
import { Link } from "../types";
import { GRAY, LIGHT_GRAY } from "../utils/colors";
import { openLink } from "../utils/openLink";

function getFaviconPath(url: string): string {
  const splittedUrl = url.split(".");
  const faviconPath = `${splittedUrl[splittedUrl.length - 2]}.${
    splittedUrl[splittedUrl.length - 1]
  }/favicon.ico`;
  return faviconPath;
}

type LinkElementProps = {
  link: Link;
  className?: string;
};

const LinkElementTitle = withLayoutStyles(styled.h2`
  font-size: 20px;
  font-family: "Sora", sans-serif;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 120px;
`);

const LinkElementSubtitle = styled.div`
  color: ${GRAY};
  font-size: 14px;
  font-weight: 300;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 120px;
  text-decoration: none;
`;

const LinkElementWrapper = styled(FlexBox)`
  padding: 12px;
  border-radius: 15px;
  cursor: pointer;

  :hover {
    background-color: ${LIGHT_GRAY};
  }
`;

const LinkElementLayout: React.FC<LinkElementProps> = ({ link, className }) => {
  return (
    <LinkElementWrapper
      className={className}
      jc="center"
      w="160px"
      onClick={() => openLink(link.url)}
    >
      <FlexBox direction="column">
        <FlexBox ai="center" mb={4}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img width={20} height={20} src={getFaviconPath(link.url)} />
          <LinkElementTitle ml={8}>{link.title}</LinkElementTitle>
        </FlexBox>
        <LinkElementSubtitle>{link.url}</LinkElementSubtitle>
      </FlexBox>
    </LinkElementWrapper>
  );
};

export const LinkElement = withLayoutStyles(LinkElementLayout);
