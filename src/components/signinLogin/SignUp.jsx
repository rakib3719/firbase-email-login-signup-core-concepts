import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase.config";


const SignUp = () => {

const auth = getAuth(app)

const [show, setShow] = useState(false);

const [sucess, setSucsess] = useState('');
const [error, setError] = useState('')
    const submitHandle = e => {

        setSucsess('')
        setError('')
e.preventDefault()
const email = e.target.email.value;
const password = e.target.password.value;
console.log(email, password);

if(password.length < 6){

    setError("Password should be more then 6 character");
    return;
}

if(!/^(?=.*[A-Z])/.test(password)){

    setError("Password minimum one charactar upperCase");
    return;
}
createUserWithEmailAndPassword(auth, email, password)
.then(result => {

    const user = result.user;
    console.log(user);
    setSucsess("Account create successfully")
})

.catch(error => {

console.log(error);
const message = error.message;
setError(message)
})

    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form   onSubmit={submitHandle} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type= {

show? "text" : "password"
          } placeholder="password"
          className="input input-bordered relative" 
          required />


<button  className="absolute top-2/4 mt-4 right-10" onClick={()=> {

    setShow(!show)
}} >
{!show? <FaEye /> : <FaEyeSlash />}

</button>



          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        {



sucess && <p  className="text-green-800" > {sucess} </p>
}

{


error && <p  className="text-red-700" > {error}  </p>
}
      </form>
    </div>
  </div>
</div>


        </div>
    );
};

export default SignUp;