import React, { FC, ReactNode } from 'react';
import classNames from 'clsx';
import { makeStyles } from '@material-ui/core';
import { Photo } from 'src/api/types';

const useStyles = makeStyles({
  root: {
    backgroundSize: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  overlay: {
    display: 'flex',
    flexDirection: 'column',
    opacity: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      opacity: 1,
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
  },

  portrait: {
    gridRow: 'span 2'
  },

  closeIcon: {
    color: 'red'
  }
});

interface Props {
  photo: Photo;
  children?: ReactNode;
  onSelect: (photo: Photo) => void;
}

const PhotosGridItem: FC<Props> = ({ photo, children, onSelect }) => {
  const classes = useStyles();
  return (
    <div
      onClick={() => onSelect(photo)}
      className={classNames({ [classes.root]: true, [classes.portrait]: photo.isPortrait })}
      style={{ backgroundImage: `url(${photo.url})` }}>
      <div className={classes.overlay}>{children}</div>
    </div>
  );
};

export default PhotosGridItem;
