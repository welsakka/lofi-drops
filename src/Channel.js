import React from 'react';
import './App.css';
import styles from './App.css'
import ReactAudioPlayer from 'react-audio-player';

//Channel class - Multiple channels to a radio. Includes all necessary data for 
//each channel
function Channel(props) {

    const handleOnEnded = () => {
        
    }
    return (
        <div className={styles[props.cssName]}>
            <ReactAudioPlayer
                className={props.station.name}
                src={process.env.PUBLIC_URL + "/chill/too_good_too_bad.mp3"}
                autoPlay
                loop='true'
                muted={props.station.isMuted}
                onEnded={handleOnEnded}

            />
        </div>
    )
}

export default Channel;