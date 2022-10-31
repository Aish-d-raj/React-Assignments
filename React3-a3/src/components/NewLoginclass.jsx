import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class NewLoginclass extends React.Component {
    constructor(props){
        super(props);
        this.state = { firstname: '',lastname: '',email: '', password: '',}
    }
    setEmpState = (e) => {
           const value = e.target.value;
           const field =  e.target.name;
           this.setState({[field]:value})
    }
    handleLogin = (e) => {
        e.preventDefault();
        if(this.state.firstname==="" || this.state.lastname==="" ||this.state.email==="" ){
            alert("Please enter required details")
        }else{
        alert('Logged in successfully');
        }
    }
    render() {
        return(<React.Fragment>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.firstname} id="name" placeholder="Enter FirstName" name="firstname" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <label>lastname:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.lastname} id="lastname" placeholder="Enter lastName" name="lastname" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <label>Email ID:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.email} id="email" placeholder="Enter email" name="email" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input style={{width:'40%'}} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
                </div>
               <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
           </form>
        </React.Fragment>)
    }
}
export default NewLoginclass;