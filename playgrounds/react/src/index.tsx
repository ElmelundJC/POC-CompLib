import ReactDOM from 'react-dom';
import {} from '@zorken17/react';

import { Button, Lable } from '@zorken17/react';

const App = () => {
  return (
    <>
      <Lable id='1'>Label</Lable>
      <Button label='Button' />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
