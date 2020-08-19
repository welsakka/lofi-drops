import React from 'react';
import './App.css';
import Channel from './Channel.js';
import Container from '@material-ui/core/Container';

import song from './assets/music/bebop.mp3';
import gif1 from './assets/gifs/anime.gif';
import gif2 from './assets/gifs/cowboy.gif';
import SimpleTabs from './Tabs';

class Radio extends React.Component {

    /*
    channels example:
    [
        {
            name : chillbeats,
            src : "/path/to/src"
            gif : "/path/to/gif"
        }
    ]
    */
    constructor() {
        super();
        this.state = {
            channels: [
                {
                    name: "chillBeats",
                    src: song,
                    gif: gif1
                },
                {
                    name: "animeBeats",
                    src: song,
                    gif: gif2
                }
            ]
        }
    }

    changeStation(i) {
        return (
            <Channel
                station={{
                    name: this.state.channels[i].name,
                    source: this.state.channels[i].src,
                    gif: this.state.channels[i].gif
                }}
            />
        )
    }

    render() {
        return (
            <div className="radio">
                <header>
                    <SimpleTabs/>
                </header>
            </div>
        )
    }
}

export default Radio;