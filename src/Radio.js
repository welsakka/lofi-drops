import React from 'react';
import './App.css';
import Channel from './Channel.js';
import Container from '@material-ui/core/Container';

import song from './assets/music/bebop.mp3';
import gif1 from './assets/gifs/anime.gif';
import gif2 from './assets/gifs/cowboy.gif';
import SimpleTabs from './Tabs';

//This class holds all the data for the channels
class Radio extends React.Component {

    constructor() {
        super();
        this.state = {
            channels: [
                {
                    name: "Chill lofi",
                    src: song,
                    gif: gif1,
                    isTunedIn : true,
                    isMuted : false
                },
                {
                    name: "Anime style",
                    src: song,
                    gif: gif2,
                    isTunedIn : false,
                    isMuted : true
                },
                {
                    name: "Jazz Hop",
                    src: song,
                    gif: gif2,
                    isTunedIn : false,
                    isMuted : true
                }
            ]
        }
    }

    changeStation(i) {
        this.setState( {channels :  } )
    }

    //<SimpleTabs channels={this.state.channels} /> Return this back to header
    render() {
        return (
            <div className="radio">
                <header>
                    <Channel station={this.state.channels[0]} />
                    <Channel station={this.state.channels[1]} />
                    <Channel station={this.state.channels[2]} />
                </header>
            </div>
        )
    }
}

export default Radio;