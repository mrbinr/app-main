import React from 'react';
import ReactDOM from 'react-dom';
import AppChild from 'app-child';

const Welcome = () => {
  return (
    <>
      <h1>
        Hello I am main app!
      </h1>
      <AppChild />
    </>
  )
};

ReactDOM.render(<Welcome />, document.getElementById('root'));
