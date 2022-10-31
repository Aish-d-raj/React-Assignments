import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class RefWithClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { fname: '',lname: '',email: '', password: ''}
        this.fnameRef = React.createRef()
        this.lnameRef = React.createRef()
        this.email = React.createRef()
        this.pwdRef = React.createRef()
        
       
    }
    handleLogin = (e) => {
        e.preventDefault();
        if(this.fnameRef.current.value==="" || this.pwdRef.current.value==="") {
            alert("Please enter required details")
        }
        else{
            alert("Logged in successfully");
        }
    }
    render() {
        return(<React.Fragment>
            <form>
                <div className="form-group">
                    <label>Firstname:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" id="fname" placeholder="Enter FirstName" name="fname" ref={this.fnameRef}/>
                </div>
                <div className="form-group">
                    <label>Lastname:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" id="lname" placeholder="Enter LastName" name="lname" ref={this.lnameRef}/>
                </div>
                <div className="form-group">
                    <label>Email ID:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" id="email" placeholder="Enter Email ID" name="email" ref={this.emailRef}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input style={{width:'40%'}} type="password" className="form-control" id="password" placeholder="Enter password" name="password" ref={this.pwdRef} />
                </div>
               <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
           </form>
        </React.Fragment>)
    }
}
export default RefWithClassComponent;