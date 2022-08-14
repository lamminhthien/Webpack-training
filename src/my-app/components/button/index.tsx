import * as React from 'react';

interface IProps {
  children: React.ReactNode;
  onButtonClick?: () => void;
}

const Button: React.FC<IProps> = ({ children, onButtonClick }) => {
  return <button onClick={onButtonClick}>{children}</button>;
};

export default Button;
