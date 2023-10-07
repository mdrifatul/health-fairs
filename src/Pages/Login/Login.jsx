import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate(); 
    const [loginError, setLoginError] = useState("");


    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        setLoginError('')

        login(email, password)
        .then(result =>{
            console.log(result.user);
            navigate('/')
        })
        .catch(error =>{
            console.error(error);
            setLoginError('The email address and password is wrong.')
        })
    }
  return (
    <div>
      <div>
                <h2 className="text-3xl my-5 text-center">Login</h2>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue hover:bg-blue text-white">Login</button>
                    </div>
                </form>
                {loginError && <p className="text-center text-red mt-2">{loginError}</p>}
                <p className="text-center mt-4">Do not have an account? <Link className="text-blue font-bold" to="/register">Register</Link></p>
            </div>
    </div>
  );
};

export default Login;