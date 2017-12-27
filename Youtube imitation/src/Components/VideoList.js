import React, { Component } from 'react';
import VideoItem from './VideoItem';


class VideoList extends Component {


    render() {
        return (
            <ul className="col-md-4 list-group" >
                {Object.keys(this.props.videos).map(video => {
                    return (
                        <VideoItem
                            key={this.props.videos[video].etag}
                            video={this.props.videos[video]}
                            onVideoSelect={this.props.onVideoSelect}
                        />
                        // console.log(this.props.videos[video].etag)
                    )
                })}
            </ul >
        );
    }

}

export default VideoList;