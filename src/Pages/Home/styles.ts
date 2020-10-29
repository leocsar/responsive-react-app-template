import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300vh;
  background: ${props => props.theme.colors.background};
  color #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;