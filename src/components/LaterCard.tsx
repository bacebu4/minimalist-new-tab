import { FlexBox, withLayoutStyles } from "react-layout-library";
import styled from "styled-components";
import { LaterLink } from "../types";

type LaterCardProps = {
  link: LaterLink;
  className?: string;
};

const LaterCardWrapper = styled(FlexBox)`
  background-color: #fafafa;
  border-radius: 21px;
`;

const LaterCardTitle = withLayoutStyles(styled.h2`
  font-size: 17px;
  font-family: "Sora", sans-serif;
  font-weight: 600;
`);

const LaterCardSubtitle = styled.a`
  color: #949494;
  font-size: 17px;

  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  border-radius: 10px 0px 0px 10px;
`;

const LaterCardLayout: React.FC<LaterCardProps> = ({ link, className }) => {
  return (
    <LaterCardWrapper
      padding="16px 24px 16px 16px"
      ai="center"
      className={className}
    >
      <Image
        width={96}
        height={66}
        src="https://pocket-image-cache.com//filters:no_upscale():format(jpg):extract_cover()/https%3A%2F%2Fhabr.com%2Fshare%2Fpublication%2F106912%2Fe4ac3d35daad3bf3ff8c5938d4f5cc04%2F%3Fv%3D1"
        alt=""
      />
      <FlexBox direction="column" ml={16}>
        <LaterCardTitle mb={4}>{link.title}</LaterCardTitle>
        <LaterCardSubtitle>{`${link.url} – ${link.time} min`}</LaterCardSubtitle>
      </FlexBox>
    </LaterCardWrapper>
  );
};

export const LaterCard = withLayoutStyles(LaterCardLayout);
