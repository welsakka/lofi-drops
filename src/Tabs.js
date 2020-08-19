import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Tabs.css"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Radio from './Radio.js';


export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Chill lofi" />
          <Tab label="Anime style" />
          <Tab label="Jazz Hop" />
        </Tabs>
      </AppBar>
      {value === 0 && Radio.}
    </div>
  );
}
