import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  color:#fff;
  align-items: center;
  padding: 0 30px;
`;
