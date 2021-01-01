import React, { FC, HTMLAttributes, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, useLocation } from '@reach/router';
import clsx from 'clsx';
import { HeaderContext } from './Header';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: '14pt',
    color: '#e8eced',
    textDecoration: 'none',
    '&:hover': {
      color: '#fff',
      borderTop: '5px solid rgba(0,0,0,1)',
      borderBottom: '5px solid transparent'
    }
  },
  selected: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
});

interface Props extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
  to: string;
}
export const HeaderListItem: FC<Props> = ({ to, className, children, ...props }) => {
  const classes = useStyles();
  const location = useLocation();
  const { onClick } = useContext(HeaderContext);

  return (
    <li {...props} className={clsx(classes.root, className)}>
      <Link to={to} className={clsx(classes.link, { [classes.selected]: location.pathname === to })} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};
