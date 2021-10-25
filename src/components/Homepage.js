import React from 'react';
import millify from 'millify';
import { useState, useEffect} from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCrytosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCrytosQuery();
    const test = useGetCrytosQuery();
    
    console.log(test)
    // const globalStats = data?.data?.stats
    
    const [coins, setCoins] = useState();
    
    useEffect(() =>{
        setCoins(data?.data?.stats)
    }, [data]);

    if(isFetching) return 'Loading....'
    return (
        <div>
            <>  
                <Title level={2} className="heading"> Global Crypto Statistics</Title>
                <Row>
                    <Col span={2}><Statistic title="Total Crypto Currency" value={coins.total}></Statistic></Col>
                    <Col span={2}><Statistic title="Total Exchanges" value={millify(coins.totalexchanges)}></Statistic></Col>
                    <Col span={2}><Statistic title="Total Market Cap" value={millify(coins.totalMarketCap)}></Statistic></Col>
                    <Col span={2}><Statistic title="Total 24th Volume" value={millify(coins.total24hVolume)}></Statistic></Col>
                    <Col span={2}><Statistic title="Total Markets" value={millify(coins.totalMarkets)}></Statistic></Col>
                </Row>
            </>
        </div>
    )
}

export default Homepage
