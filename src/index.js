// import the reac and react dom librareies
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return <div>hi there!</div>;
};

// take teh react componten an show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
