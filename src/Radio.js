import React from 'react';
import './App.css';
import Channel from './Channel.js';
import Container from '@material-ui/core/Container';

import song from './assets/music/bebop.mp3';
import song2 from './assets/music/too_good_too_bad.mp3';
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
                    src: song2,
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
            ],
            activeChannel : 0
        }
        this.changeStation = this.changeStation.bind(this);
    }


    //New idea: Just change the state of the radio component to allow users to switch between channels
    //Figure out how to integrate tabs into the Radio and channel dynamic. Perhaps just define tabs in the Radio component
    changeStation(i) {
        this.setState(prevState => {
            return {
                channels : prevState.channels.map( (item, index) => 
                    index === i ? { ...item, isTunedIn : true, isMuted : false} : {...item, isTunedIn : false, isMuted : true}
                )
            }
        })
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
                <button className="chillLofi" onClick={this.changeStation(0)}>Chill Lofi</button>
                <button className="animeStyle" onClick={this.changeStation(1)}>Anime Style</button>
                <button className="jazzHop" onClick={this.changeStation(2)}>Jazz Hop</button>
            </div>
        )
    }
}

export default Radio;