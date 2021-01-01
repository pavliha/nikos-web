import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { IconButton, makeStyles, Theme } from '@material-ui/core';
import MenuIcon from 'mdi-react/MenuIcon';
import CloseIcon from 'mdi-react/CloseIcon';

interface HeaderContextValue {
  onClick: () => void;
}
export const HeaderContext = createContext<HeaderContextValue>({ onClick: () => {} });

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    transition: 'all .2s ease-out 0.1s',
    minHeight: 60
  },
  list: {
    flexGrow: 1,
    display: 'none',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    alignItems: 'center',
    listStyle: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row'
    }
  },
  iconButton: {
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    padding: 20,
    color: 'white'
  }
}));

interface Props {
  transparent?: boolean;
  children: ReactNode;
}
export const Header: FC<Props> = ({ transparent, children }) => {
  const classes = useStyles();
  const [color, setColor] = useState<string>(transparent ? 'transparent' : 'rgba(0,0,0,0.7)');
  const [isExpanded, setExpanded] = useState<boolean>();

  const listenScrollEvent = () => {
    setColor(window.scrollY > 400 ? 'rgba(0,0,0,0.7)' : 'transparent');
  };

  useEffect(() => {
    if (transparent) {
      window.addEventListener('scroll', listenScrollEvent);
    }
  }, [transparent]);

  return (
    <HeaderContext.Provider value={{ onClick: () => setExpanded(false) }}>
      <nav className={classes.root} style={{ backgroundColor: color }}>
        <ul
          className={classes.list}
          style={{ display: isExpanded ? 'flex' : undefined, backgroundColor: isExpanded ? 'rgba(0,0,0,0.7)' : color }}>
          {children}
        </ul>
        <IconButton className={classes.iconButton} onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </nav>
    </HeaderContext.Provider>
  );
};
