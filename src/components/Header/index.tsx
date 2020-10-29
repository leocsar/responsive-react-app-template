import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import { FiSettings } from 'react-icons/fi';

import SwipeableDrawer from '../SwipeableDrawer';
import { Container, Title } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <SwipeableDrawer
        action={() => alert('oeeee')}
        items={[
          { 
            title: 'Página inicial',
            icon: <FiSettings color={colors.drawer.drawerItemText} size={24} />,
            route: ''
          },
          { 
            title: 'Configurações',
            icon: <FiSettings color={colors.drawer.drawerItemText} size={24} />,
            route: 'settings'
           },
           { 
            title: 'Opção 3',
            icon: <FiSettings color={colors.drawer.drawerItemText} size={24} />,
            route: 'home'
          },
          { 
            title: 'Opção 4',
            icon: <FiSettings color={colors.drawer.drawerItemText} size={24} />,
            route: 'home'
            }
          ]
        }
      />
      
      <Title>
        Controle Financeiro
      </Title>

      <Switch 
        onChange={toggleTheme}
        checked={title == 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.switches.onColor}
      />
    </Container>
  );
};

export default Header;