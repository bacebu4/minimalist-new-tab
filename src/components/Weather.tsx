import { FlexBox } from "react-layout-library";
import styled from "styled-components";
import rain from "../assets/rain.png";

const WeatherWrapper = styled(FlexBox)`
  position: absolute;
  width: 497px;
  height: 98px;
  left: 32px;
  top: 32px;

  padding-left: 16px;

  color: white;
  font-weight: 300;
  background: linear-gradient(86.62deg, #a17496 0%, #704298 100%);
  border-radius: 21px;
`;

const WeatherTemperature = styled.h2`
  font-weight: 600;
  font-size: 32px;
`;

const WeatherCity = styled.h3`
  margin-bottom: 4px;
  font-weight: 600;
`;

const WeatherImage = styled.img`
  width: 69px;
  height: 68px;

  margin-left: auto;
  margin-right: 24px;
`;

export const Weather: React.FC = () => {
  return (
    <WeatherWrapper ai="center">
      <WeatherTemperature>-6° C</WeatherTemperature>
      <FlexBox direction="column" ml={16}>
        <WeatherCity>Saint-Petersburg</WeatherCity>
        <div>2% chance of precip through</div>
      </FlexBox>
      <WeatherImage src={rain} />
    </WeatherWrapper>
  );
};
