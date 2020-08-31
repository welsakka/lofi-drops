import React from 'react';
import './App.css';
import styles from './App.css'
import ReactAudioPlayer from 'react-audio-player';

//Channel class - Multiple channels to a radio. Includes all necessary data for 
//each channel
function Channel (props) {

    return(
        <div className={styles[props.cssName]}>
            <ReactAudioPlayer
                className={props.station.name}
                src={props.station.src}
                autoPlay
                loop='true'
                muted={props.station.isMuted}

            />
        </div>
    )
}

export default Channel;