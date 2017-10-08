import React from 'react';

const VideoDetail = ({video}) => {

	// Check for no video. Fixes problem with undefined video while loading
	if(!video){
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-lg-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div><b>{video.snippet.title}</b></div>
				<div>{video.snippet.description}</div>
			</div>
		</div>

	)
}

export default VideoDetail;