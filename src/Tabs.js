import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Tabs.css"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Channel from './Channel.js'
import Radio from './Radio.js'

/*
class SimpleTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.state; 
    this.changeStationTabs = this.changeStationTabs.bind(this);
  }

  changeStationTabs(e) {
    e.preventDefault();

    const {station} = this.state;
    const {changeStation} = this.props.func;

    changeStation(station);

  }

  render() {
    return (
      <div className="tabs">
        <AppBar position="static">
          <Tabs value={value} onChange={i => changeStationTabs(i)}>
            <Tab label= {this.props.channels[0].name} />
            <Tab label= {this.props.channels[1].name} />
            <Tab label= {this.props.channels[2].name} />
          </Tabs>
        </AppBar>
        {value === 0 && }
        {value === 1 && i => {changeStationTabs(0)}}
        {value === 2 && i => {changeStationTabs(0)}}
      </div>
    )
  }
}
*/

//This react component creates the tabs to select channels and handles the logic of switching channels
export default function SimpleTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className="tabs">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label={props.state.channels[0].name} onClick={props.onChannelChange0} />
          <Tab label={props.state.channels[1].name} onClick={props.onChannelChange1}/>
          <Tab label={props.state.channels[2].name} onClick={props.onChannelChange2}/>
        </Tabs>
      </AppBar>
    </div>
  );
}
//export default SimpleTabs