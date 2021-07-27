import React from 'react';
import ReactDOM from 'react-dom';
// import {Button} from '../../build/index.esm.js'

const HelloWorld = () => {
    return (
        <h1>
            {/* <Button>
                testing button component
            </Button> */}
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));