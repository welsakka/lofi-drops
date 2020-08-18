import React from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import Container from '@material-ui/core/Container';

//Channel class - Multiple channels to a radio. Includes all necessary data for 
//each channel
class Channel extends React.Component {

    render(){
        return(
            <div className="channel">
                <ReactAudioPlayer
                    className="chillLofi"
                    src={}
                    autoplay
                />
            </div>

        )
    }
}