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
};

type items = itemsInterface[];

interface Props {
  action(): void;
  items: items;
};

const SwipeableDrawer: React.FC<Props> = ({ action, items }) => {
  const { colors, title } = useContext( ThemeContext );
  const [drawerStatus, setDrawerStatus] = useState( false );

  const toggleDrawer = () => {
    setDrawerStatus( lastStatus => !lastStatus );
  };

  return (
    <>
      <Button
        onClick={ toggleDrawer }
      >
        <FiMenu
          size={ 24 }
          color={ colors.header.menuIcon }
        />
      </Button>

      <DrawerBackground
        style={{
          height: drawerStatus ? '100%' : 0,
          opacity: drawerStatus ? 0.5 : 0
        }}
        onClick={ toggleDrawer }
      />

      <Drawer
        style={{ width: drawerStatus ? 300 : 0 }}
      >
        <DrawerHeader />

        {
          items.map(item => {
            return (
              <Link
                to={ `/${item.route}` }
                onClick={ toggleDrawer }
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <DrawerItem
                  style={{ display: drawerStatus ? 'flex' : 'none' }}
                >
                  { item.icon }
                  <DrawerItemText>{ item.title }</DrawerItemText>
                </DrawerItem>
              </Link>
            )
          })
        }
      </Drawer>
    </>
  );
};

export default SwipeableDrawer;