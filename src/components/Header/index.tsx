import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import SwipeableDrawer from '../SwipeableDrawer'

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