import React from 'react';
import LatestProduct from '../../compo/LatestProduct';
import HeroCard from '../../compo/HeroCard';

const latestProductPromise = fetch('http://localhost:3000/latest-product')
.then(res=> res.json())


const Home = () => {
    return (
        <div>
            <HeroCard></HeroCard>
            <div>
                <LatestProduct latestProductPromise={latestProductPromise}></LatestProduct>
            </div>
        </div>
    );
};

export default Home;