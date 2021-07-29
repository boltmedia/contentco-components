import React from 'react';
import ReactDOM from 'react-dom';
 //import {Button} from '../../build/'
import Button from '../../build/Button'

const HelloWorld = () => {
    return (
        <h1>
            <Button>
                name Import button
            </Button>

           
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));