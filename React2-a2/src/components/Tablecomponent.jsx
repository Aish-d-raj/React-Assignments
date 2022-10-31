import { useState } from 'react';
import './css/FunctionComponent.css';
function Tablecomponent(props){
    
    let view = () =>{
        
               
    }
    return (
        <div className="function">
           
           
            <table className="tbl">
                <tr><th>Name</th><th>Department</th><th>Phone</th><th>Action</th></tr>
            {
                props.employees.map((employee)=>
                <tr><td>{employee.name}</td>
                <td>{employee.dept}</td><td>{employee.phone}</td>
                <td><button className='btn btn-primary' onClick={view}>view</button>
                <button className='btn btn-danger'>Delete</button></td>
                </tr>
                )
            }
            </table>
           
        </div>
    );
    }
    
    export default Tablecomponent;