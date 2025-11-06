import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const MyBids = () => {
    const { user } = use(AuthContext);
    const [bids, setBids] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/bids?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBids(data);
                })
        }
    }, [user?.email])


    const handleDeleteBid = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('now dlelete');
                fetch(`http://localhost:3000/bids/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your bid has been deleted.",
                                icon: "success"
                            });
                            // c
                            const remaingBid = bids.filter(bid => bid._id !== _id);
                            setBids(remaingBid);
                        }

                    })

            }
        });
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-10'><span>My Bids: <span className='text-st'>({bids.length})</span></span></h1>




            <div className="overflow-x-auto w-11/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='border-r border-l border-t border-gray-200 bg-gray-100'>
                            <th>
                                SL NO
                            </th>
                            <th>Seller</th>
                            <th>Product</th>
                            <th>Bid Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* row 4 */}
                        {
                            bids.map((bid, index) => <tr key={bid._id} className='border border-gray-200'>
                                <td className=''>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{bid.buyer_name}</div>
                                            <div className="text-sm opacity-50">Brazil</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Wyman-Ledner
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{bid._id}</span>
                                </td>
                                <td>{bid.bid_price}$</td>
                                <td ><div className={bid.status === 'success' ? 'badge badge-success ' : 'bg-amber-400 text-gray-800 py-1.5 px-1 text-center text-xs font-semibold rounded-full'}>{bid.status}
                                </div></td>
                                <th>
                                    <button onClick={() => handleDeleteBid(bid._id)} className="btn btn-secondary btn-outline btn-xs">Remove Bid</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default MyBids;