import * as React from 'react';

interface IProps {
  text: string;
  as: React.ElementType;
}

const Heading1: React.FC<IProps> = ({ text, as }) => {
  const Element = as;

  return <Element>{text}</Element>;
};

export default Heading1;
