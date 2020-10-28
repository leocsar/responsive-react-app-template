import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { FiMenu } from 'react-icons/fi';

import { Button, Drawer, DrawerBackground } from './styles';

interface Props {
  action(): void;
}

const SwipeableDrawer: React.FC<Props> = ({ action }) => {
  const { colors, title } = useContext(ThemeContext);
  const [drawerStatus, setDrawerStatus] = useState(false);

  function toggleDrawer() {
    setDrawerStatus(lastStatus => !lastStatus);
  }

  return (
    <>
      <Button
        onClick={toggleDrawer}
      >
        <FiMenu
          size={24}
          color={colors.header.menuIcon}
        />
      </Button>

      <DrawerBackground
        style={{ display: drawerStatus ? 'flex' : 'none' }}
        onClick={toggleDrawer}
      />

      <Drawer
        style={{ width: drawerStatus ? 300 : 0 }}
      />
    </>
  );
};

export default SwipeableDrawer;