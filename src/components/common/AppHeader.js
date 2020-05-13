import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

class AppHeader extends React.Component {
  render() {
    return (
      <Header className="site-layout-background" mode="horizontal" />
    );
  }
}

export default AppHeader;
