import React from 'react';
import ReactDOM from 'react-dom/client';


function App(){
    return (
        <h1>
            <h1>Hello React App</h1>
        </h1>
    )
}
// create a root element in react v18
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App/></React.StrictMode>);    // render the app component to the root element