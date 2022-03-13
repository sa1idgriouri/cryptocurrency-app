import React from 'react'
import { Typography, Avatar, Card } from 'antd';
import moment from 'moment';
const { Text, Title } = Typography;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


function NewsCard({ news }) {
    return (
        <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                    <Title className="news-title" level={4}>{news.name}</Title>
                    <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                </div>
                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="provider-container">
                    <div>
                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                    </div>
                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
            </a>
        </Card>
    )
}

export default NewsCard