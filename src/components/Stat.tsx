import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 769px) {
  }
`;

const Value = styled.span`
  color: hsl(0, 0%, 100%);
  font-size: 1.5rem;
`;

const Title = styled.span`
  color: hsla(0, 0%, 100%, 0.6);
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const Stat = (props: { value: string; name: string }) => {
  return (
    <Container>
      <Value>{props.value}</Value>
      <Title>{props.name}</Title>
    </Container>
  );
};

export default Stat;
