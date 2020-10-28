import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;