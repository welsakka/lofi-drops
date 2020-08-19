import React from 'react';
import './App.css';
import Channel from './Channel.js';
import Container from '@material-ui/core/Container';

import song from './assets/music/bebop.mp3';
import gif1 from './assets/gifs/anime.gif';
import gif2 from './assets/gifs/cowboy.gif';
import SimpleTabs from './Tabs';

class Radio extends React.Component {

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



    render() {
        return (
            <div className="radio">
                <header>
                    <SimpleTabs channels={this.state.channels} />
                </header>
            </div>
        )
    }
}

export default Radio;