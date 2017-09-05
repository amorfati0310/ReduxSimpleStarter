import React from 'react'

const VideoDetail = ({video}) => {

  if(!video){
    return (
      <div>Loading!...........</div>
    )
  }
  const videoId = video.id.videoId;
  const url = `htttps://www.youtube.com/embed/${videoId}`

  return (
    <div className="video-detail col-md-8">
      <iframe className="w-100 16by9" src={url}></iframe>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default VideoDetail;
