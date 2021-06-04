import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 2rem;
  
  background: ${props => props.theme.colors.background};
  color: #FFF;
`;

export const Illustration = styled.img`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;