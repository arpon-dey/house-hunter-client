// import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import gem from '../../../assets/others/diamond.png';


const Navbar = () => {
    // const axiosPublic = useAxiosPublic()
    // const { user, logout } = useAuth()

    // const { data: gems = [] } = useQuery({
    //     queryKey: ['gems'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/vote')
    //         return res.data;
    //     }

    // })
    // console.log('gems: ', gems);




    // const userGemsObjects = gems.filter(item => item.voterEmail === user?.email);
    // console.log('User Gems Objects: ', userGemsObjects);
    // const userGemsValues = userGemsObjects.map(item => item.gems ?? 0);
    // console.log('User Gems Values: ', userGemsValues);
    // const totalUserGemsValue = userGemsValues.reduce((total, value) => total + value, 0);
    // console.log('Total User Gems Value: ', totalUserGemsValue);



    // const handleSignOut = () => {
    //     logout()
    // }
    const navItems = <>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='/shop'> Shop</Link></li>
        <li><Link to='/about'> About us</Link></li>
        <li><Link to='/contact'>Contact </Link></li>
        {/* <li><Link to='/dashboard/payment'>Pro</Link></li> */}
        {/* <li><Link to='/dashboard'>Dashboard </Link></li> */}
        {/* {
            user ? <><li> <Link onClick={handleSignOut} className="">Logout</Link></li></> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signUp'>SignUp</Link></li>
                </>
        } */}



    </>


    return (
        <div>
            <div className="navbar rounded-b-lg  z-50   text-black   ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <p className="text-2xl font-semibold">House Hunter</p>
                    {/* <a className="btn btn-ghost normal-case text-2xl ">

                        <img src={logo} alt="" />Woodcraft </a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-semibold menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="font-semibold">Login</Link>

                    {/* <div>
                        {
                            user ? <div className="flex items-center">
                                <div className="mr-2">
                                    <button className="flex btn btn-sm rounded-2xl bg-gray-200 border-0">
                                        <img src={gem} className="w-6" alt="" />
                                        <p>{totalUserGemsValue?totalUserGemsValue : 0 }</p>
                                    </button>
                                </div>
                                <div className="flex gap-4 items-center mr-4">
                                    <p className="font-bold">{user.displayName}</p>
                                    <img src={user?.photoURL} className="w-10 rounded-full" alt="" />
                                </div></div> : <></>
                        }
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default Navbar;