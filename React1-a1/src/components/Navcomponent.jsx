import './css/Navcomponent.css';
function Navcomponent(props){
    return(
        <div className="nav">
          <a href='#href'>{props.home}</a>
           <a href='#href'>{props.m1}</a>
           <a href='#href'>{props.m2}</a>
           <a href='#href'>{props.m3}</a>
           <a href='#href'>{props.m4}</a>
            

        </div>
    )
}

export default Navcomponent;