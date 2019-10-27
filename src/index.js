// import the reac and react dom librareies
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {

    const buttonText = {text: 'click me'};

    return (
        <div>
            <label className="label" htmlFor="name">enter names</label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue',color:'white' }}>
                {buttonText.text}
            </button>
        </div>
    )
};

// take teh react componten an show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
