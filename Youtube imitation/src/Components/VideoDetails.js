import React, { Component } from 'react';

class VideoDetails extends Component {

    render(){
        const url = 'https://www.youtube.com/embed/';

        return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                            src = {url + this.props.video.id.videoID}></iframe>
                </div>
                <div className="details">
                    <div>{this.props.video.snippet.title}</div>
                    <div>{this.props.video.snippet.description}</div>
                </div>
            </div>
        );
    }
}

export default VideoDetails;