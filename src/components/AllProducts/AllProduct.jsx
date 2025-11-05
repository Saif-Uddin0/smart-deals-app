import React, { use } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const promise = fetch('http://localhost:3000/products')
.then(res => res.json())

const AllProduct = () => {
    const products = use(promise);
    // console.log(products);
    
    return (
        <div className='my-15'>
             <h3 className='text-center font-bold text-4xl '>All <span className='text-st'>Products</span></h3>
             <div className='grid gap-5 w-11/12 mx-auto py-8 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product=> <ProductCard key={product._id} product={product}></ProductCard>)
                }
             </div>
        </div>
    );
};

export default AllProduct;