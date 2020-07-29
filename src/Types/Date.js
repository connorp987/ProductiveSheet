import React from 'react'
import { Input, Row, Col, Typography } from 'antd';


const { Title } = Typography;


export const Date = () => {
  return (
    <div>
      <Row style={{ marginLeft: '25%' }}>
        <Col span={12}><Title style={{ width: '50px' }} level={4}>:00</Title></Col>
        <Col span={12}><Title style={{ width: '50px' }} level={4}>:30</Title></Col>
      </Row>

      <Input addonBefore={<div style={{ padding: '5px' }}>6</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>7</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>8</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>9</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '1px' }}>10</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '1px' }}>11</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '1px' }}>12</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>1</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>2</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>3</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>4</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>5</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>6</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>7</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>8</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '5px' }}>9</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '1px' }}>10</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '1px' }}>11</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
      <Input addonBefore={<div style={{ padding: '1px' }}>12</div>} style={{ width: '50%' }} /><Input style={{ width: '50%' }} />
    </div>
  )
}