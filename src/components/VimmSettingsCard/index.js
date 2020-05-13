import React from 'react';
import {Card, Input, Row, Col, Button} from 'antd'

import './styles.scss'

class VimmSettingsCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vimmServer: "rtmp://us.vimm.tv/live",
      vimmKey: ''
    }

    this.onChangeKey = this.onChangeKey.bind(this)
  }

  onChangeKey(e) {
    this.setState({
      vimmKey: e.target.value
    })
  }

  render() {
    return (
      <Card id='vimm-settings-card' title="Vimm Settings">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label>Server Address
              <Input value={this.state.vimmServer} />
            </label>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label>Stream Key
              <Input value={this.state.vimmKey} onChange={this.onChangeKey} />
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

export default VimmSettingsCard;
