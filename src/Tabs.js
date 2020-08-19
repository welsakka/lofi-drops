import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Tabs.css"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Channel from './Channel.js'

export default function SimpleTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeStation = (i) => {
    return (
      <Channel
          station={{
              name: props.channels[i].name,
              source: props.channels[i].src,
              gif: props.channels[i].gif
          }}
      />
    )
  }


  return (
    <div className="tabs">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Chill lofi" />
          <Tab label="Anime style" />
          <Tab label="Jazz Hop" />
        </Tabs>
      </AppBar>
      {value === 0 && changeStation(0)}
      {value === 1 && changeStation(1)}
    </div>
  );
}
