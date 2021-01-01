import React, { FC, ReactNode } from 'react';
import { ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import CheckIcon from 'mdi-react/CheckIcon';

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: theme.palette.success.main
  }
}));

interface Props {
  children: ReactNode;
}

const CheckListItem: FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemIcon>
        <CheckIcon className={classes.icon} />
      </ListItemIcon>
      <ListItemText primary={children} />
    </ListItem>
  );
};

export default CheckListItem;
