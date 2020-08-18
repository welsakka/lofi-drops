import React from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import Container from '@material-ui/core/Container';

class Radio extends React.Component {

    constructor() {
        super();
        this.state = {
            channels : [],
            activeChannel : null            
        }
    }

    changeStation() {
        return (
            <Channel station={{name: something from the Radio state , source : , gif : }}
        )
    }

}