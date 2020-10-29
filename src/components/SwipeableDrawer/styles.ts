import styled from 'styled-components';
import { shade } from 'polished';

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
  align-items: flex-start;
  flex-direction: column;
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

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: transparent;
  margin 0 0 20px 0;
  border-style: solid;
  border-width: 0 0 0.5px 0;
  border-color: ${shade(0.5, '#f5f5f5')};
`;

export const DrawerItem = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 14px;

  :hover {
    background-color: ${props => props.theme.colors.drawer.drawerItemHover};
  }
`;

export const DrawerItemText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${props => props.theme.colors.drawer.drawerItemText};
  margin: 0 0 0 28px;
`;