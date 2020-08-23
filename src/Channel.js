import React from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';

//Channel class - Multiple channels to a radio. Includes all necessary data for 
//each channel
function Channel (props) {

    return(
        <div className="channel">
            <ReactAudioPlayer
                className={props.station.name}
                src={props.station.src}
                autoPlay
                loop='true'
                muted={props.station.isMuted}

            />
            {props.station.isTunedIn && <img src={props.station.gif}></img>}
        </div>
    )
}

export default Channel;