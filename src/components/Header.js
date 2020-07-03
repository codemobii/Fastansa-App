// eslint-disable-next-line
import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { StarFilled } from '@ant-design/icons';

export default function Header() {
    return (
        <div className="header">
            <div className="logo"><span role="img" aria-label="fastansa">⚡</span> Fastansa App</div>
            <Button icon={<StarFilled />} type="primary">Rate me</Button>
        </div>
    )
}
