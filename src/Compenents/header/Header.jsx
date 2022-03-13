import React from 'react'
import { Typography, Menu, Button, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons/lib/icons'
import icon from "../../assets/images/blanc.png"
const Header = () => {
    return (
        <div className='nav-container'>
            <div className="avatar-logo">
                <Avatar src={icon} />
                <Typography.Title level={2} className="logo" >
                    <Link to="/">Your Logo</Link>
                </Typography.Title>
            </div>

            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Header