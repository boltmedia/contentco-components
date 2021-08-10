import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { InputGroup, InputContainer, TextInput } from 'contentco-components';

// import { Button as ButtonA } from 'contentco-components';
// import ButtonB from 'contentco-components/Button';

const HelloWorld = () => {
  const [title, setTitle] = useState('Initial title');
  const [desc, setDesc] = useState('Initial Desc');

  return (
    <div style={{ backgroundColor: 'gainsboro' }}>
      <InputGroup>
        <InputContainer>
          <TextInput name='title' label='Title' defaultValue={title} />
        </InputContainer>
        <InputContainer>
          <TextInput name='desc' label='Description' defaultValue={desc} />
        </InputContainer>
      </InputGroup>
      <div>
        {`The two inputs should span 100% of the page (flex: 50) with a margin of 10px between them`}
      </div>
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
