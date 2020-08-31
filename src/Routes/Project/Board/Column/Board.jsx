import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Board = () => {
  const columns = useSelector((store) => store.project.columns);

  {
    columns === {}
      ? console.log('columns is empty')
      : console.log('columns NOT empty');
  }
  const [state, setState] = useState(columns);
  console.log('state', state);
  return (
    <div>
      <h1>Project title</h1>
    </div>
  );
};

export default Board;
