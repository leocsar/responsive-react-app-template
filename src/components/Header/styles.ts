import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 9px;

  @media screen and (max-width: 600px) {
    padding: 0 16px 0 0;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;