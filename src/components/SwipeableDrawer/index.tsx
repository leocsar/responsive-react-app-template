import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { ThemeContext } from 'styled-components';
import { FiMenu } from 'react-icons/fi';

import { 
  Button,
  Drawer,
  DrawerBackground,
  DrawerHeader,
  DrawerItem,
  DrawerItemText
} from './styles';

interface itemsInterface {
  title: string;
  icon: any;
  route: string;
}

type items = itemsInterface[];

interface Props {
  action(): void;
  items: items;
}

const SwipeableDrawer: React.FC<Props> = ({ action, items }) => {
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
        style={{ width: drawerStatus ? '100%' : 0 }}
        onClick={toggleDrawer}
      />

      <Drawer
        style={{ width: drawerStatus ? 300 : 0 }}
      >
        <DrawerHeader />

        {
          items.map(item => {
            return (
              <DrawerItem
                style={{ display: drawerStatus ? 'flex' : 'none' }}
              >
                {item.icon}
                <DrawerItemText>{item.title}</DrawerItemText>
              </DrawerItem>
            )
          })
        }
      </Drawer>
    </>
  );
};

export default SwipeableDrawer;