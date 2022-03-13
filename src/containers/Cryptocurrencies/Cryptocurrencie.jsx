import React, { useEffect, useState } from 'react';

import { Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../../services/CryptoApi';
import CryptocurrenciesCard from '../../Compenents/CryptocurrenciesCard/CryptocurrenciesCard';

function Cryptocurrencie({ simplified }) {
    const count = simplified ? 8 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)

    const [cryptos, setCryptos] = useState();
    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);
    }, [cryptosList])
    if (isFetching) return "loading ..........";

    return (
        <>

            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={currency.uuid}
                    >
                        <CryptocurrenciesCard currency={currency} />
                    </Col >
                ))}
            </Row>


        </>
    )

}

export default Cryptocurrencie





