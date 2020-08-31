import React from 'react';
import "./Tabs.css"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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