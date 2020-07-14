import React, { useState, useEffect } from 'react';
import { Card, Avatar, Row, Col, Typography } from 'antd';
import axios from 'axios';
import RenderImages from './Sns_RenderImages';
import './Sns_LandingPage.scss';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';
const { Meta } = Card;
const { Title } = Typography;
//snapshots , name, text
function Sns_LandingPage() {
	const [posts, setPosts] = useState([]);

	const getPosts = (data) => {
		axios.post('/api/sns/getProduct').then((response) => {
			if (response.data.success) {
				setPosts(response.data.posts);
			}
		});
	};
	useEffect(() => {
		getPosts();
	}, []);
	// xs: 8, sm: 16, md: 24, lg: 32
	const renderPosts = (posts) =>
		posts.map((post) => (
			<Col key={post._id} lg={6} xs={24}>
				<Card
					style={{
						width: 250,
						border: '2px solid #e8ebed',
					}}
					cover={<RenderImages snapshots={post.snapshots} />}
					actions={[
						<SettingOutlined key="setting" />,
						<EditOutlined key="edit" />,
						<EllipsisOutlined key="ellipsis" />,
					]}
				>
					<Meta
						avatar={
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						}
						description={post.text}
					/>
				</Card>
			</Col>
		));

	return (
		<div className="posts">
			<Title level={3} style={{ marginBottom: '3rem' }}>
				지금의 트렌드
			</Title>
			<Row gutter={[16, 32]}>{renderPosts(posts)}</Row>
		</div>
	);
}

export default Sns_LandingPage;
