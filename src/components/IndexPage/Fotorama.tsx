/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Photo } from 'src/api/types';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden'
  }
});

const eventList =
  'fotorama:ready ' + // Fotorama is fully ready
  'fotorama:show ' + // Start of transition to the new frame
  'fotorama:showend ' + // End of the show transition
  'fotorama:load ' + // Stage image of some frame is loaded
  'fotorama:error ' + // Stage image of some frame is broken
  'fotorama:startautoplay ' + // Slideshow is started
  'fotorama:stopautoplay ' + // Slideshow is stopped
  'fotorama:fullscreenenter ' + // Fotorama is fullscreened
  'fotorama:fullscreenexit ' + // Fotorama is unfullscreened
  'fotorama:loadvideo ' + // Video iframe is loaded
  'fotorama:unloadvideo'; // Video iframe is removed

interface Props {
  photos: Photo[];
}
const Fotorama: FC<Props> = ({ photos }) => {
  const classes = useStyles();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.$(document).ready(($: any) => {
      // eslint-disable-next-line prettier/prettier
      $('.fotorama')
        .on(eventList)
        .fotorama();
    });
  }, [photos]);

  return (
    <div className={classes.root}>
      <div
        className="fotorama"
        data-nav="thumbs"
        data-width="100%"
        data-thumbwidth="150"
        data-thumbheight="100"
        data-auto="false">
        {photos.map((photo: Photo) => (
          <img key={photo.id} alt={photo.url} src={photo.url} />
        ))}
      </div>
    </div>
  );
};

export default Fotorama;
