import React from "react";

const DetailsBids = ({ bid,index }) => {
  return (
    <tr className="hover:bg-gray-50 hover:cursor-pointer border border-gray-200">
      {/* SL No */}
      <td className="text-gray-700 font-medium">{index +1}</td>

      {/* Product */}
      <td>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-md overflow-hidden">
            <img
              src="https://example.com/images/default-product.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-gray-800">{bid.product}</p>
            <p className="text-xs text-gray-500">${bid.bid_price}</p>
          </div>
        </div>
      </td>

      {/* Seller (Buyer Info) */}
      <td>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img
              src={bid.buyer_image}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-gray-800">{bid.buyer_name}</p>
            <p className="text-xs text-gray-500">{bid.buyer_email}</p>
          </div>
        </div>
      </td>

      {/* Bid Price */}
      <td className="text-gray-700 font-semibold">${bid.bid_price}</td>

      {/* Actions */}
      <td>
        <div className="flex gap-2">
          <button className="btn btn-xs bg-green-100 text-green-600 border border-green-400 hover:bg-green-200">
            Accept Offer
          </button>
          <button className="btn btn-xs bg-red-100 text-red-600 border border-red-400 hover:bg-red-200">
            Reject Offer
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DetailsBids;
