import styled from "@emotion/styled";

export const P = styled.p<{ active?: boolean }>`
  color: hsla(0, 0%, 100%, 0.75);
  font-weight: 300;
  margin: 0px;
`;

export const H1 = styled.h1`
  color: hsl(0, 0%, 100%);
  font-weight: 600;
  font-family: "Lexend Deca", sans-serif;
  font-size: 2.4rem;
  > strong {
    color: hsl(277, 64%, 61%);
  }
`;
export const H2 = styled.h2`
  color: hsl(0, 0%, 100%);
  font-weight: 300;
  text-transform: uppercase;
  margin: 4px 0px;
  font-size: 2.7rem;
  letter-spacing: 0.5rem;
`;

export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
