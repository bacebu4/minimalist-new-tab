import { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";

const TimeTitle = styled.h1`
  font-size: 44px;
  font-weight: 600;
`;

const DateSubtitle = styled.h2`
  margin-top: 24px;
  color: #949494;
  font-size: 24px;
  font-weight: 300;
`;

export const Time: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  function tick() {
    setCurrentTime(new Date());
  }

  useEffect(function startUpdating() {
    const intervalId = setInterval(tick, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <TimeTitle>{format(currentTime, "HH:mm")}</TimeTitle>
      <DateSubtitle>{format(currentTime, "eeee, do MMMM")}</DateSubtitle>
    </>
  );
};
