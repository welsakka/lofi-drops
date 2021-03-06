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

  const tabs = props.state.channels.map( (channel, index) => {
    return (
      <Tab label={channel.name} onClick={props.changeChannelX[index]} />
    )
  });

  return (
    <div className="tabs">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          {tabs}
        </Tabs>
      </AppBar>
    </div>
  );
}