import { useRef, useState } from "react";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";


const SignIn = () => {

  const emailRef = useRef()
  const auth = getAuth(app)
    const [sucess, setSucsess] = useState('');
    const [error, setError] = useState('')


    const handle = e => {

       
        e.preventDefault();
        setSucsess('')
        setError('')
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
signInWithEmailAndPassword(auth, email, password)
.then(result => {

  console.log(result.user);
  setSucsess("Log in Successfully")
})
.catch(error => {


  setError(error.message)
  return
})


    }


    const forgett = ()=> {

      setError('');
      const email = emailRef.current.value;
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){

  setError('Please provide a valid email adress');
  return
}
sendPasswordResetEmail(auth, email)
.then(result=> {
  console.log(result);
  setSucsess("Check your email adress and reset your password")
})
.catch(error => {

  setError(error.message)
})
      
    }
    return (
        <div>
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handle} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label  onClick={forgett}  className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
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

export default SignIn;