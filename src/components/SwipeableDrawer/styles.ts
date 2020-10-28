import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 60px;
  background: transparent;
  border-radius: 50%;
  border: none;
  outline: none;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }

  :active {
  }
`;

export const Drawer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 100%;
  background-color: ${props => props.theme.colors.drawer.background};

  @media screen and (max-width: 600px) {
  }
`;

export const DrawerBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.5;
`;