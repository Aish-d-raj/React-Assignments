import './css/LoginFunctioncomponent.css';
function LoginFunctioncomponent(){
    return(
        <div className="container">
            <div className="container1">
                <h1>Function Component</h1>
                <h2>Sign Up Now</h2>
                <p>Get acess for your orders and chat for support</p>
            </div>
            <div className="container2">
                <input className="c2-text" type="text" placeholder="enter name"/>
                <input className="c2-text" type="text" placeholder="enter Password"/>
                <button className="c2-button" >Sign In</button>
                <a href="#" className='terms'>Terms and Conditions</a>
            </div>
            
        </div>

    );

    
}

export default LoginFunctioncomponent;