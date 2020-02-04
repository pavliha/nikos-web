import React from 'react'
import { string } from 'prop-types'
import ResponsiveEmbed from 'react-responsive-embed'

const Video = ({ id }) =>
  <ResponsiveEmbed
    src={`https://www.youtube.com/embed/${id}?showinfo=0`}
    frameBorder="0"
    allowFullScreen
  />

Video.propTypes = {
  id: string.isRequired,
}

export default Video
