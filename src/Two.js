import React from 'react';

const Two = ({ children }) => {
  return (
    <div style={{ border: '1px solid red', padding: '10px' }}>
      <p>Two Component</p>
      {children}
    </div>
  );
};

export default Two;