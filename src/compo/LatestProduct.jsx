import React, { use } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

const LatestProduct = ({ latestProductPromise }) => {
    const products = use(latestProductPromise);
    // console.log(products);

    return (
        <div className='mt-10'>
            <h3 className='text-center font-bold text-4xl '>Recent <span className='text-st'>Products</span></h3>
            <div className='grid gap-5 w-11/12 mx-auto py-8 sm:grid-cols-2 lg:grid-cols-3'>
                
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default LatestProduct;