import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        setRegisterError('');

        
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password)){
            setRegisterError("password should be at least 6 characters, a capital letter and a special character")
        }else{
            createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast("Successfully Register");
            })
            .catch(error =>{
                console.error(error);
            }) 
        }


        
    }
  return (
    <div>
      <div className='mb-10'>
                <h2 className="text-3xl my-3 text-center">Register</h2>
                <form  onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
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
                        <button className="btn bg-blue hover:bg-blue text-white ">Register</button>
                    </div>
                </form>
                {registerError && <p className="text-center text-red mt-2">{registerError}</p>}
                <p className="text-center mt-4">Already have an account? <Link className="text-blue font-bold" to="/login">Login</Link></p>
                <ToastContainer />
            </div>
    </div>
  );
};

export default Register;