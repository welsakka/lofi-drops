import React from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';

//Channel class - Multiple channels to a radio. Includes all necessary data for 
//each channel
class Channel extends React.Component {

    render(){
        return(
            <div className="channel">
                <ReactAudioPlayer
                    className={this.props.station.name}
                    src={this.props.station.src}
                    autoPlay
                    loop='true'
                    muted={this.props.station.isMuted}

                />
                {this.props.station.isTunedIn && <img src={this.props.station.gif}></img>}
            </div>
        )
    }
}

export default Channel;