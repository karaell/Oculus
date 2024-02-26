import React from 'react';
import './Container.scss';

interface IContainer {
  children: React.ReactNode;
  isResultPage?: boolean;
}

const Container: React.FC<IContainer> = (props) => {
  const { children } = props;

  return <div className="container">{children}</div>;
};

export default Container;
