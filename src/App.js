import React from 'react';
import { Layout } from 'antd';
import AppRouter from './AppRouter';
import SidebarNav from './components/common/SidebarNav';

import './App.css';
import AppHeader from './components/common/AppHeader';

const { Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout>
        <SidebarNav />
        <Layout
          className="site-layout"
          style={{ height: '100vh', maxHeight: '100vh' }}
        >
          <AppHeader />
          <Content
            style={{
              padding: 24,
              backgroundColor: '#222',
            }}
          >
            <AppRouter />
          </Content>
          <Footer style={{ textAlign: 'right' }}>
            Hive Streamer Dashboard v{process.env.REACT_APP_VERSION} |{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hive-streamer"
            >
              GitHub
            </a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
