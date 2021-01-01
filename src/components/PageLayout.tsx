import { makeStyles, Typography } from '@material-ui/core';
import React, { FC, HTMLAttributes } from 'react';
import { HeaderListItem } from './HeaderListItem';
import { Header } from './Header';

const useStyles = makeStyles({
  footer: {
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }
});

interface Props extends HTMLAttributes<HTMLDivElement> {
  transparentHeader?: boolean;
}
const PageLayout: FC<Props> = ({ transparentHeader = false, children, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <div {...props}>
        <Header transparent={transparentHeader}>
          <HeaderListItem to="/">ГЛАВНАЯ</HeaderListItem>
          <HeaderListItem to="/photos">ФОТОГАЛЕРЕЯ</HeaderListItem>
          <HeaderListItem to="/videos">ОБРАЗЦЫ ВИДЕО</HeaderListItem>
          <HeaderListItem to="/prices">ЦЕНЫ И УСЛУГИ</HeaderListItem>
          <HeaderListItem to="/contacts">КОНТАКТЫ</HeaderListItem>
        </Header>
        {children}
      </div>
      <div className={classes.footer}>
        <Typography color="inherit">Николай Костюк &copy; {new Date().getFullYear()}</Typography>
      </div>
    </>
  );
};

export default PageLayout;
