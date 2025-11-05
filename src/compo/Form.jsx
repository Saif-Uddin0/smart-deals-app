import React from 'react';

const Form = ({ handleBidSubmit, user }) => {
    return (
        <div className='mt-5'>
            <form onSubmit={handleBidSubmit} className=''>
                <fieldset className='fieldset  text-sm text-gray-800 space-y-3'>
                    <div className='flex items-center justify-center gap-4  '>
                        {/* name */}
                        <div className='space-y-1.5'>
                            <label className="label text-gray-800">Buyer Name</label>
                            <input
                                defaultValue={user?.displayName}
                                required
                                name='name'
                                type="text"
                                className="input outline-none"
                                placeholder="Your name" />
                        </div>
                        {/* email */}
                        <div className='space-y-1.5'>
                            <label className="label text-gray-800">Buyer Email</label>
                            <input
                                readOnly defaultValue={user?.email}
                                required
                                name='email'
                                type="email"
                                className="input outline-none"
                                placeholder="Your  Email" />
                        </div>
                    </div>
                    {/* URL */}
                    <div className='space-y-1.5'>
                        <label className="label text-gray-800">Buyer Imge-URL</label>
                        <input
                            required
                            name='url'
                            type="text"
                            className="input w-full outline-none"
                            placeholder="https://...your_img_urll" />
                    </div>
                    {/* price */}
                    <div className='space-y-1.5'>
                        <label className="label text-gray-800">Place Your Price</label>
                        <input
                            required
                            name='bid'
                            type="text"
                            className="input w-full outline-none"
                            placeholder="e.g. Artisan Roasters" />
                    </div>
                    {/* contact */}
                    <div className='space-y-1.5'>
                        <label className="label text-gray-800">Contact Info</label>
                        <input
                            required
                            name='contact'
                            type="text"
                            className="input w-full outline-none"
                            placeholder="e.g. +1-555-1234" />
                    </div>
                    <input className='btn btn-st ' type="submit" value='Place Your Bid'/>
                </fieldset>
            </form>
        </div>
    );
};

export default Form;