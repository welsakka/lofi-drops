import React from 'react';


class AddButton extends React.Component{
    render(){
        return (
        <div>
            <p>What is happening</p>
            <button className = 'testButton' onClick={() => alert('yeet')}>
                {"click here"}
            </button>
        </div>
        );
    };
}

export default AddButton