import React from 'react';

import useScrollTo from '../../hooks/use-scroll-to';

import './style';

const ToTop = () => {
  const scrollTo = useScrollTo();

  return (
    <button onClick={scrollTo.top} className='btn btn-danger btn-to-top'>
      To Top
    </button>
  );
};

export default ToTop;
