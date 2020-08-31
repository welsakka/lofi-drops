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
        this.changeChannel = this.changeChannel.bind(this);
    }


    //Method that takes in array index number to identify which channel to tune into. Logic taken from :
    // https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react/43639228
    // Returns an array of objects
    changeChannel(i) {
        this.setState(prevState => {
            return {
                channels : prevState.channels.map( (item, index) => 
                    index === i ? { ...item, isTunedIn : true, isMuted : false} : {...item, isTunedIn : false, isMuted : true}
                )                
            }
        })
    }

    // <button className="chillLofi" onClick={i => this.changeStation(0)}>Chill Lofi</button>
    // <button className="animeStyle" onClick={i => this.changeStation(1)}>Anime Style</button>
    // <button className="jazzHop" onClick={i => this.changeStation(2)}>Jazz Hop</button>
    render() {
        return (
            <div className="radio">
                <header>
                    <Channel station={this.state.channels[0]} />
                    <Channel station={this.state.channels[1]} />
                    <Channel station={this.state.channels[2]} />            
                </header>
                <SimpleTabs onChannelChange0={() => this.changeChannel(0)}
                            onChannelChange1={() => this.changeChannel(1)}
                            onChannelChange2={() => this.changeChannel(2)}
                            state={this.state} />

            </div>
        )
    }
}

export default Radio;