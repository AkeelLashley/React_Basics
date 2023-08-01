import React from 'react';

const Greeting = () => {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello, World!'),
    React.createElement('p', null, 'Welcome to our website.'),
    React.createElement('button', null, 'Click me')
  );
};
export default Greeting;