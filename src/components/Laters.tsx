import { FlexBox, withLayoutStyles } from "react-layout-library";
import { LaterCard } from "./LaterCard";

type LatersProps = {
  className?: string;
};

const LatersLayout: React.FC<LatersProps> = ({ className }) => {
  return (
    <FlexBox className={className}>
      <LaterCard link={{ title: "GH Flow", url: "docs.github.com", time: 3 }} />
      <LaterCard
        link={{ title: "GH Flow", url: "docs.github.com", time: 3 }}
        ml={32}
      />
    </FlexBox>
  );
};

export const Laters = withLayoutStyles(LatersLayout);
