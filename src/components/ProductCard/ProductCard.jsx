import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
    const { title, price_min, price_max, image ,_id } = product;

    return (
        <div className="card w-full bg-base-100 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 rounded-xl">
            {/* image */}
            <figure className="px-4 pt-4">
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl object-cover h-48 w-full"
                />
            </figure>

            {/* content */}
            <div className="card-body px-4 py-3 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 leading-snug">
                    {title}
                </h2>

                <p className="text-sm text-violet-600 font-semibold">
                    ${price_min} – {price_max}
                </p>

                <div className="card-actions mt-2">
                    <Link to={`/product-details/${_id}`} className="w-full btn btn-sm border border-[#9F62F2] text-[#9F62F2] hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:text-white rounded-md transition-all">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
