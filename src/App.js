import React, { useState } from 'react';
import { Input,  Col, Row, Select,   Typography, Divider } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons'
import { Priorities } from './Types/Priorities'
import { Date } from './Types/Date'
import { TaskDump } from './Types/TaskDump'


import 'antd/dist/antd.css';
import './css/App.css';

const { Option } = Select;
const { Text } = Typography;
document.body.style = 'background: #dfe1e6;';


export default function App() {

  const [addNewBox, setAddNewBox] = useState(false)
  const [testComp, setTestComp] = useState([<Divider key={11111111} />])


  function flip() {
    setAddNewBox(!addNewBox)
  }

  function test(target) {
    if (target === 'Priorities') {
      setTestComp(testComp.concat(<Priorities />))
      flip()
    } else if(target === 'Date') {
      setTestComp(testComp.concat(<Date />))
      flip()
    } else if (target === 'TaskDump') {
      setTestComp(testComp.concat(<TaskDump />))
      flip()
    }
  }

  let icon = ((addNewBox) ? (
    <Select onSelect={test} placeholder="Select new" style={{ width: 120 }} allowClear>
      <Option value="Priorities">Priorities</Option>
      <Option value="Date">Date</Option>
      <Option value="TaskDump">TaskDump</Option>
    </Select>
  ) : (<AppstoreAddOutlined onClick={flip} style={{ fontSize: '55px' }} />))

  return (
    <div className="App">

      <div style={{ width: '65%', margin: 'auto' }}>
        <Text style={{ float: 'left', paddingTop: '2px' }} strong>Date: </Text>
        <Input style={{ float: 'left', width: '20%' }} placeholder="Enter a date" bordered={false} />
      </div>


      <Row style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '15px' }}>
        <Col span={12}>
          <div style={{ width: '80%', margin: 'auto' }}>
            <Priorities />
            <TaskDump />

            {testComp}
            {icon}
          </div>
        </Col>
        <Col span={12}>
          <Date />
        </Col>
      </Row>



    </div>
  );
}