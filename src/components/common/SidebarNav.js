import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;

class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
      >
        <img
          style={{ height: 64 }}
          alt="Hive Streamer"
          src="/images/logo.png"
        />
        <Menu mode="inline" defaultSelectedKeys={[1]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SidebarNav;
