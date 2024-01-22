import { Link } from 'react-router-dom';
import registration from '../../assets/house2.png';
const Registration = () => {
    const handleRegister = (e) =>{
        e.preventDefault(); // Corrected typo
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const userData = {name,email, password}
        console.log(userData);
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="   ">
                       <img src={registration} className='' alt="" />  
                    </div>
                    <div className="card shrink-0 w-full max-w-sm ">
                    <div className='flex gap-4 justify-center my-4'>
                            <Link to='/login' className='btn bg-gray-600 w-40  text-white font-semibold'>Login</Link>
                            <Link to='/register' className='btn bg-gray-800  w-40  text-white font-semibold'>Register</Link>
                        </div>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                               
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                               
                                <input type="file" placeholder="email" className="input input-bordered pt-2" required />
                            </div>
                            <div className="form-control">
                               
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-emerald-900 hover:bg-emerald-800 text-white" type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;