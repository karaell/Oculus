import React from 'react';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = props => {
  const { children } = props;

  return (
      <main className="main">{children}</main>
  );
};

export default Layout;
