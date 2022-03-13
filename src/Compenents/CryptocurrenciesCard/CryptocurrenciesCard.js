import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';

function CryptocurrenciesCard({ currency }) {

    return (
        <>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                <Card
                    title={`${currency.rank}. ${currency.name}`}
                    extra={<img className="crypto-image" src={currency.iconUrl} />}
                    hoverable
                >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {currency.change}%</p>
                </Card>
            </Link>

        </>
    )


}

export default CryptocurrenciesCard