import React, { useState } from 'react';

export function Togglable({ children  }) {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => setHidden(old => !old);

  return (
    <div>
      <div>
        <button testid="toggle" onClick={toggleHidden}>
          {hidden ? 'M' : 'Unm'}ount
        </button>
      </div>
      {!hidden && children}
    </div>
  );
}
