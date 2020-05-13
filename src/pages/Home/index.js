import React from 'react';
import { Layout, PageHeader, Row, Col } from 'antd';
import VimmSettingsCard from '../../components/VimmSettingsCard'
import ThreeSpeakSettingsCard from '../../components/ThreeSpeakSettingsCard';

import './styles.scss';

class Home extends React.Component {
  render() {
    return (
      <Layout className="home-layout">
        <PageHeader
            className="home-page-header"
            title="Home"
            subTitle="Dashboard"
          />
          <Row gutter={[16,16]}>
            <Col span={6}>
              <VimmSettingsCard />
            </Col>
            <Col span={6}>
              <ThreeSpeakSettingsCard />
            </Col>
          </Row>
      </Layout>
    );
  }
}

export default Home;