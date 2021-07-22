import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  cursor: pointer;

  min-width: 3.5rem;
  height: 3.5rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 50%;
  border: none;
  outline: none;

  background-color: transparent;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Drawer = styled.div`
  position: fixed;

  width: 18rem;
  height: 100%;
  
  left: 0;
  top: 0;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  background-color: ${props => props.theme.colors.drawer.background};
  
  -webkit-box-shadow: 0 .625rem 1.25rem rgba(0, 0, 0, 0.19), 0 .375rem .375rem rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 .625rem 1.25rem rgba(0, 0, 0, 0.19), 0 .375rem .375rem rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 .625rem 1.25rem rgba(0, 0, 0, 0.19), 0 .375rem .375rem rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 .625rem 1.25rem rgba(0, 0, 0, 0.19), 0 .375rem .375rem rgba(0, 0, 0, 0.23);
  box-shadow: 0 .625rem 1.25rem rgba(0, 0, 0, 0.19), 0 .375rem .375rem rgba(0, 0, 0, 0.23);
`;

export const DrawerBackground = styled.div`
  position: fixed;

  width: 100%;
  height: 100%;
  
  left: 0;
  top: 0;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  background-color: #000000;
  opacity: 0.5;
`;

export const DrawerHeader = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0 0 1.5rem 0;
  
  border-style: solid;
  border-width: 0 0 .031rem 0;
  border-color: ${shade(0.5, '#f5f5f5')};
  
  background-color: transparent;
`;

export const DrawerItem = styled.button`
  cursor: pointer;

  width: 100%;
  height: 3rem;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  padding: 1rem;
  
  outline: none;
  border: none;
  
  background-color: transparent;
  
  :hover {
    background-color: ${props => props.theme.colors.drawer.drawerItemHover};
  }
`;

export const DrawerItemText = styled.span`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0 0 0 1rem;
  
  color: ${props => props.theme.colors.drawer.drawerItemText};
`;