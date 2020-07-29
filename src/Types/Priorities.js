import React from 'react'
import { Input, Typography } from 'antd';

const { Title } = Typography;

export const Priorities = () => {
    return (
        <div>
            <Title level={4}>Today's Priorities</Title>
            <Input defaultValue="0571" />
            <Input defaultValue="26888888" />
        </div>
    )
}