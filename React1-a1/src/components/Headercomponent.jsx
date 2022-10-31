import './css/Headercomponent.css';
function Headercomponent(props){
    return(
        <div className="header">
            <h2>{props.name}</h2>
        </div>
    )
}

export default Headercomponent;