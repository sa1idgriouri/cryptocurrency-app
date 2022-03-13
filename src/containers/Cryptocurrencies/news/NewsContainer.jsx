import React, { useState } from 'react'
import { Select, Row, Col, } from 'antd';
import { useGetCryptosQuery } from "../../../services/CryptoApi";
import { useGetCryptoNewsQuery } from "../../../services/NewsApi";

import NewsCard from '../../../Compenents/newsCard/newsCard';

const { Option } = Select;


function NewsContainer({ simplified }) {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

    if (!cryptoNews?.value) return "loading ....";
    return (
        <>
            <Row gutter={[24, 24]}>
                {!simplified && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="Select a Crypto"
                            optionFilterProp="children"
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="Cryptocurency">Cryptocurrency</Option>
                            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
                        </Select>
                    </Col>
                )}
                {cryptoNews.value.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <NewsCard news={news} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default NewsContainer