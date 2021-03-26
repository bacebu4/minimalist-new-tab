import { useEffect, useState } from "react";
import styled from "styled-components";

const TimeTitle = styled.h1`
  font-size: 44px;
  font-weight: 600;
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

  return <TimeTitle>{currentTime.toLocaleTimeString()}</TimeTitle>;
};
