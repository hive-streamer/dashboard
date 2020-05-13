import React from 'react';
import {Card, Input, Row, Col, Button} from 'antd'

import './styles.scss'

class ThreeSpeakSettingsCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      threespeakServer: "rtmp://rtmp.3speak.online/LiveApp",
      threespeakKey: ''
    }

    this.onChangeKey = this.onChangeKey.bind(this)
  }

  onChangeKey(e) {
    this.setState({
      threespeakKey: e.target.value
    })
  }

  render() {
    return (
      <Card id='threespeak-settings-card' title="3Speak Settings">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label>Server Address
              <Input value={this.state.threespeakServer} />
            </label>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label>Stream Key
              <Input value={this.state.threespeakKey} onChange={this.onChangeKey} />
            </label>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Button type="primary">Save</Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default ThreeSpeakSettingsCard;
