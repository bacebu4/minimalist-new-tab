import { FlexBox, withLayoutStyles } from "react-layout-library";
import styled from "styled-components";
import { Link } from "../types";
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
  font-size: 22px;
  font-family: "Sora", sans-serif;
`);

const LinkElementSubtitle = styled.div`
  color: #949494;
  font-size: 14px;
  font-weight: 300;

  text-decoration: none;
`;

const LinkElementWrapper = styled(FlexBox)`
  padding: 12px;
  border-radius: 15px;
  cursor: pointer;

  :hover {
    background-color: #fafafa;
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
          <img
            width={20}
            height={20}
            src={getFaviconPath(link.url)}
            alt="favicon"
          />
          <LinkElementTitle ml={8}>{link.title}</LinkElementTitle>
        </FlexBox>
        <LinkElementSubtitle>{link.url}</LinkElementSubtitle>
      </FlexBox>
    </LinkElementWrapper>
  );
};

export const LinkElement = withLayoutStyles(LinkElementLayout);
