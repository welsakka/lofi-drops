import React from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import Container from '@material-ui/core/Container';

class Radio extends React.Component {

    constructor() {
        super();
        this.state = {
            channels : [],
            activeChannel : ""
            
        }
    }

    render() {
        return (
            <div className="Radio">
                <ReactAudioPlayer
                    className="chillLofi"
                    src={}
                />
                <ReactAudioPlayer
                    className="animeStyle"
                    src={}
                />
                <ReactAudioPlayer
                    className="bossaNova"
                    src={}
                />
            </div>

        );
    }

}