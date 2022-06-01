import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined} from '@ant-design/icons';

const Navbar = () => {
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Avatar src={icon} size='large' />
				<Typography.Title level={2} className='logo'>
					<Link to='/'> Crypto-Verse </Link>
				<Typography.Title>
			</div>
		</div>

	)
}

export default Navbar;