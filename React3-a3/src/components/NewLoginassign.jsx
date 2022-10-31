import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const NewLogin = () => {
    const [username,setUsername] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if(username===""||password===""||lastname===""||email==="") {
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
            <label htmlFor="name">Username:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="name"
              value={username}
              onChange={(event)=>setUsername(event.target.value)}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Lastname:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="name"
              value={lastname}
              onChange={(event)=>setLastname(event.target.value)}
              className="form-control"
              placeholder="Enter lastname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="name"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
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
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
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
export default NewLogin;