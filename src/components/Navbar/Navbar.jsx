import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
    const { user,SignOut } = use(AuthContext);

    const handleSignOut =()=>{
        SignOut()
        .then(() =>{
            alert('Sign Out successfully')
        })
        .catch(() =>{
            alert("something went wrong")
        })
    }

    const links = <>
        <li><NavLink to={'/'} className={({isActive})=> isActive? 'text-st px-3 py-2':''}> Home</NavLink></li>
        <li><NavLink to={'/allproducts'} className={({isActive})=> isActive? 'text-st px-3 py-2':''}>All Products</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to={'/myproducts'} className={({isActive})=> isActive? 'text-st px-3 py-2':''}>MyProducts</NavLink></li>
                <li><NavLink to={'/mybids'} className={({isActive})=> isActive? 'text-st px-3 py-2':''}>My Bids</NavLink></li>
                <li><NavLink to={'/createproducts'} className={({isActive})=> isActive? 'text-st px-3 py-2':''}>Create Product</NavLink></li>
            </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl font-bold">Smart <span className='text-st'>Deals</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user ?
                            <button onClick={handleSignOut}><Link to={'/login'} className="btn border border-primary text-st">Logout</Link></button>
                            :
                            <div className='flex gap-2 items-center'>
                                <Link to={'/login'} className="btn border border-primary text-st">Login</Link><Link to={'/register'} className="btn border-none bg-st text-white">Register</Link></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;