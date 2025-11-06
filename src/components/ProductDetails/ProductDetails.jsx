import { ArrowLeft } from "lucide-react";
import React, { use, useEffect, useRef, useState } from "react";

import { Link, useLoaderData } from "react-router";
import Form from "../../compo/Form";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import DetailsBids from "../../compo/DetailsBids";

const ProductDetails = () => {
    const product = useLoaderData(); // single product object
    const [bids, setBids] = useState([]);
    const { _id: productId } = product
    const { user } = use(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:3000/products/bids/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBids(data)
            })
    }, [productId])

    const bidModalRef = useRef(null);

    const hnadleBidModal = () => {
        bidModalRef.current.showModal()
    }

    const handleBidSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const bid = e.target.bid.value;
        const url = e.target.url.value;
        const contact = e.target.contact.value;
        console.log(productId, name, email, bid, url, contact);
        const newBid = {
            product: productId,
            buyer_image:user? user.photoURL: url,
            buyer_name: name,
            buyer_contact: contact,
            buyer_email: email,
            bid_price: bid,
            status: "pending"
        }
        fetch('http://localhost:3000/bids', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    bidModalRef.current.close();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your bid has been placed.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    // add the new bit to the ui
                    newBid.id = data.insertedId;
                    const newBids = [...bids, newBid]
                    newBids.sort((a,b)=> b.bid_price- a.bid_price)
                    setBids(newBids)
                }

            })

    }

    return (
        <div className="mt-20">
            <div className="container mx-auto px-6 py-8 text-gray-800">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Section */}
                    <div className="space-y-4">
                        {/* Product Image */}
                        <div className="w-full h-100 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Description */}
                        <div className="bg-white shadow-md rounded-xl p-5">
                            <h2 className="text-lg font-semibold mb-3">
                                Product Description
                            </h2>
                            <div className="flex justify-between text-sm font-medium mb-2 border-b py-2 border-gray-300">
                                <p>
                                    Condition:{" "}
                                    <span className="text-st capitalize">{product.condition}</span>
                                </p>
                                <p>
                                    Usage Time:{" "}
                                    <span className="text-st">{product.usage}</span>
                                </p>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-600 mt-3">
                                {product.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-5">
                        <Link to={'/allproducts'} className="flex items-center gap-2 mb-4 cursor-pointer hover:text-gray-500 hover:transition-transform hover:scale-x-105">
                            <ArrowLeft size={18} />
                            <p className="font-medium">Back To Products</p>
                        </Link>
                        {/* Title */}
                        <h1 className="text-3xl font-bold mb-2">
                            {product.title}
                        </h1>

                        {/* Category */}
                        <div className="badge badge-ghost text-xs mb-5">
                            {product.category}
                        </div>
                        {/* Price */}
                        <div className="bg-white shadow-md rounded-xl p-5">
                            <p className="text-green-600 text-xl font-semibold">
                                ${product.price_min} - {product.price_max}
                            </p>
                            <p className="text-sm text-gray-500">Price starts from</p>
                        </div>

                        {/* Product Details */}
                        <div className="bg-white shadow-md rounded-xl p-5">
                            <h3 className="text-lg font-semibold mb-3">Product Details</h3>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium text-gray-800">Product ID:</span>{" "}
                                {product._id}
                            </p>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium text-gray-800">Posted:</span>{" "}
                                {new Date(product.created_at).toLocaleDateString()}
                            </p>
                        </div>

                        {/* Seller Info */}
                        <div className="bg-white shadow-md rounded-xl p-5">
                            <h3 className="text-lg font-semibold mb-3">Seller Information</h3>
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src={product.seller_image}
                                    alt={product.seller_name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-medium">{product.seller_name}</p>
                                    <p className="text-sm text-gray-500">{product.email}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">Location:</span> {product.location}
                            </p>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">Contact:</span>{" "}
                                {product.seller_contact}
                            </p>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">Status:</span>{" "}
                                {product.status === "sold" ? (
                                    <span className="badge badge-error text-white badge-sm capitalize">
                                        {product.status}
                                    </span>
                                ) : product.status === "pending" ? (
                                    <span className="badge badge-warning text-white badge-sm capitalize">
                                        {product.status}
                                    </span>
                                ) : (
                                    <span className="badge badge-success text-white badge-sm capitalize">
                                        {product.status}
                                    </span>
                                )}
                            </p>
                        </div>

                        {/* Button */}
                        <button onClick={hnadleBidModal} className="btn btn-st w-full text-white text-base font-semibold">
                            I Want Buy This Product
                        </button>

                        {/* Open the modal */}
                        <dialog ref={bidModalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box ">
                                <h3 className="font-bold text-xl text-center mt-10">Give Seller Your Offered Price</h3>
                                <div>
                                    <Form key={product._id} handleBidSubmit={handleBidSubmit} user={user}></Form>
                                </div>
                                <div className="modal-action px-5 py-15">
                                    <form method="dialog">
                                        <button className="btn border-primary text-st">Cancel Bid</button>
                                    </form>

                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>



                {/* bids section */}
                <div className="overflow-x-auto mt-30 mb-10">
                    <h1 className="text-4xl font-semibold mb-4">
                        Bids For this Product: <span>{bids.length}</span>
                    </h1>

                    <table className="table w-full bg-white shadow-md">
                        <thead>
                            <tr className="text-gray-700 text-sm bg-gray-200 border border-gray-200">
                                <th>SL No</th>
                                <th>Product</th>
                                <th>Seller</th>
                                <th>Bid Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {bids.map((bid,index) => (
                                <DetailsBids key={bid._id} bid={bid} index={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
