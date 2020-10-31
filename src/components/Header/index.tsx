import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import { FiSettings } from 'react-icons/fi';

import SwipeableDrawer from '../SwipeableDrawer';
import { Container, Title } from './styles';

const Header: React.FC = () => {
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
           }
          ]
        }
      />
      
      <Title>
        Nome da sua aplicação
      </Title>
    </Container>
  );
};

export default Header;