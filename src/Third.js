// Three 컴포넌트
import React from 'react';

const Three = ({ children }) => {
  return (
    <div style={{ border: '1px solid green', padding: '10px' }}>
      <p>Three Component</p>
      {children}
    </div>
  );
};

export default Three;