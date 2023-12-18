import React from 'react';

const One = ({ children }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <p>One Component</p>
      {children}
    </div>
  );
};

export default One;