import React from 'react';
import {Card, Input, Row, Col, Button} from 'antd';
import axios from 'axios';

import './styles.scss';

class VimmSettingsCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vimmServer: "rtmp://us.vimm.tv/live",
      vimmKey: ''
    }

    this.onChangeKey = this.onChangeKey.bind(this);
    this.onSaveSettings = this.onSaveSettings.bind(this);
  }

  onChangeKey(e) {
    this.setState({
      vimmKey: e.target.value
    })
  }

  onSaveSettings(e) {
    e.preventDefault()

    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/save`, {
      service: 'vimm',
      key: this.state.vimmKey,
    }).then((res) => {
      console.log(res)
    }).catch((err) => console.log(err))
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
            <Button type="primary" onClick={this.onSaveSettings}>Save</Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default VimmSettingsCard;
