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
                    className={this.props.name}
                    src={this.props.source}
                    autoPlay
                />
                <img src={this.props.gif}></img>
            </div>
        )
    }
}