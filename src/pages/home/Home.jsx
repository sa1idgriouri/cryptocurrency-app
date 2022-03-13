import React from 'react'
import { Typography, Row, Col, Statistic } from "antd"
import { useGetCryptosQuery } from '../../services/CryptoApi'
import millify from 'millify';
import { Link } from "react-router-dom"
import { News, Cryptocurrencies } from "./../../pages"



const Home = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    if (isFetching) return "loading ....."
    console.log(data)
    return (
        <>
            <Typography.Title level={2} className="heading">Total Markets</Typography.Title>
            <Row gutter={[32, 32]}>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>

            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Top 10 Cryptos In The World</Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Typography.Title>
            </div>
            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
                <Typography.Title level={3}><Link to="/news">Show more</Link></Typography.Title>
            </div>
            <News simplified />
        </>
    )
}

export default Home