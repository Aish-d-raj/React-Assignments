import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Counterclasscomponent extends React.Component{
    constructor(){
        super();
        this.state ={
            counter: 0
        }
    }
    increment = () => {
        this.setState({counter:++this.state.counter});
    }

    decrement = () => {
        this.setState({counter:--this.state.counter});
    }

    render(){
        return(
            <div>
                <h1>Counter : {this.state.counter}</h1>
                <button className="btn btn-primary" onClick={this.increment}>Increment</button>
                <button className="btn btn-primary" onClick={this.decrement}>Decrement</button>

            </div>
        )
    }

}