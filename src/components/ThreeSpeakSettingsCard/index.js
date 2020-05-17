import React from 'react';
import {message, Card, Input, Row, Col, Button} from 'antd'
import axios from 'axios';

import './styles.scss'

class ThreeSpeakSettingsCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      threespeakServer: "rtmp://rtmp.3speak.online/LiveApp",
      threespeakKey: '',
      loading: false
    }

    this.onChangeKey = this.onChangeKey.bind(this)
    this.onSaveSettings = this.onSaveSettings.bind(this);
  }

  onChangeKey(e) {
    this.setState({
      threespeakKey: e.target.value
    })
  }

  onSaveSettings(e) {
    e.preventDefault()

    this.setState({
      loading: true
    })

    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/save`, {
      service: 'threespeak',
      key: this.state.threespeakKey,
    }).then((res) => {
      message.success('Saved!')
      this.setState({
        loading: false
      })
    }).catch((err) => {
      message.error('Something went wrong!')
      this.setState({
        loading: false
      })
      console.log(err)
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
            <Button type="primary" onClick={this.onSaveSettings}>Save</Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default ThreeSpeakSettingsCard;
