import './css/sidecomponent.css';
function Sidecomponent(props){
    return(
        <div className="side">
           <h3>{props.list}</h3>
           <table>
               <tr><td>{props.i1}</td></tr>
               <tr><td>{props.i2}</td></tr>
               <tr><td>{props.i3}</td></tr>
               <tr><td>{props.i4}</td></tr>
           </table>
        </div>
    )
}

export default Sidecomponent;