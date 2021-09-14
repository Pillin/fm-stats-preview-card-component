import React from "react";
import styled from "@emotion/styled";
import { H1, P } from "./components/Typography";
import Stat from "./components/Stat";
import "./styles.css";
import { IMG } from "./components/Image";

const STATS = [
  {
    value: "10k+",
    name: "Companies"
  },
  {
    value: "314",
    name: "Templates"
  },
  {
    value: "12M+",
    name: "Queries"
  }
];

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: hsl(244, 38%, 16%);
  @media (min-width: 769px) {
    flex-direction: row-reverse;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  justify-content: space-between;
  padding: 24px;
  max-width: 540px;
  @media (min-width: 679px) {
    padding: 60px;
    min-height: 500px;
  }
`;

const StatContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: space-between;
  min-height: 200px;
  justify-content: space-between;
  padding: 24px 0px 0px 0px;
  @media (min-width: 679px) {
    flex-direction: row;
    min-height: 20px;
  }
`;

const BlenderImg = styled.section`
  background-color: hsl(277, 64%, 61%);
  > picture {
    mix-blend-mode: multiply;
  }
`;

export default function App() {
  return (
    <Container>
      <BlenderImg>
        <IMG
          mobile="/images/image-header-mobile.jpg"
          desktop="/images/image-header-desktop.jpg"
          alt=""
        />
      </BlenderImg>
      <Content>
        <H1>
          <span>Get </span>
          <strong>insights</strong>
          <span> that help your business grow</span>
        </H1>
        <P>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer, experience, and overall efficiency
        </P>
        <StatContainer>
          {STATS.map((elem, index) => (
            <Stat {...elem} key={`stat-${index}`} />
          ))}
        </StatContainer>
      </Content>
    </Container>
  );
}
