import './css/maincomponent.css';
import Sidecomponent from './sidecomponent';
function Maincomponent(props){
    return(
        <div className="container">
            <div className="row">
                <div className='col1'>
                <h3 className='main'>{props.m}</h3>
                </div>
                <div className='col2'>
                <Sidecomponent list="List Header" i1="Item1" i2="Item2" i3="Item3" i4="Item4"></Sidecomponent>
                </div>
            </div>
            
            
        </div>
    )
}

export default Maincomponent;