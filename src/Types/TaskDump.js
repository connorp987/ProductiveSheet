import React, {useState} from 'react'
import { Input, Typography } from 'antd';

const { Title } = Typography;

const { TextArea } = Input;



export const TaskDump = () => {
  const [value, setValue] = useState('')

  function onChange({ target: { value } }) {
    setValue(value)
  };
  
  return (
    <div style={{ paddingTop: '10px' }}>
      <Title level={4}>Task Dump</Title>
      <TextArea
        value={value}
        onChange={onChange}
        placeholder=""
        autoSize={{ minRows: 10, maxRows: 20 }}
      />
    </div>
  )
}