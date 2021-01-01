import React, { FC } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

const Video: FC<{ id: string }> = ({ id }) => (
  <ResponsiveEmbed src={`https://www.youtube.com/embed/${id}?showinfo=0`} frameBorder="0" allowFullScreen />
);

export default Video;
