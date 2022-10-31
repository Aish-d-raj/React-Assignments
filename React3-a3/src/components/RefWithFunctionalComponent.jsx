import {useState,useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const RefWithFunctionalComponent = () => {
    const fnameRef = useRef('')
    const lnameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if(fnameRef.current.value===""||passwordRef.current.value==="") {
            setError("Enter required details")
            setSuccess("")
        }
        else {
            setSuccess("Login successful")
            setError("")
        }
    }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fname">Firstname:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="fname"
              ref={fnameRef}
              className="form-control"
              placeholder="Enter FirstName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Lastname:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="lname"
              ref={lnameRef}
              className="form-control"
              placeholder="Enter LastName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email ID:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="email"
              ref={emailRef}
              className="form-control"
              placeholder="Enter Email ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              style={{ width: "40%" }}
              type="password"
              id="pwd"
              ref={passwordRef}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {success?<div className="text-success">{success}</div>:null}
          {error?<div className="text-danger">{error}</div>:null}
        </form>
      </div>
    </>
  );
};
export default RefWithFunctionalComponent;