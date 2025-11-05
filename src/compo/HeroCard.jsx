import React from 'react';
import heroImg from '.././assets/Img.png'
import { FaSearch } from "react-icons/fa";


const HeroCard = () => {
    return (
        <div>
            <div
                className="min-h-[70vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroImg})`,
                }}
            >
                {/* Text Section */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Deal Your <span className="text-st">Products</span> <br />
                        In A <span className="text-st">Smart Way !</span>
                    </h1>

                    <p className="text-gray-500 text-sm md:text-base">
                        SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
                    </p>

                    {/* Search Bar */}
                    <div className="flex items-center bg-white rounded-full shadow-sm px-3 py-2 mt-5 w-[90%] max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Search for Products, Categories..."
                            className="flex-1 outline-none text-sm text-gray-600 px-2"
                        />
                        <button className="btn btn-sm btn-gradient rounded-full px-4 text-white">
                            <FaSearch className="text-base" />
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        <button className="btn btn-sm btn-gradient rounded-full px-6">
                            Watch All Products
                        </button>
                        <button className="btn btn-sm border border-primary rounded-full px-6 text-[#632EE3] hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white transition-all">
                            Post an Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;