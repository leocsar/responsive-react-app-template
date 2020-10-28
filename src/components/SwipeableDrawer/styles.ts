import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 60px;
  height: 60px;
  background: transparent;
  border-radius: 50%;
  border: none;
  outline: none;

  @media screen and (max-width: 600px) {
    justify-content: center;
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
  
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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