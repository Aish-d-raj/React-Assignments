import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NewLogin from './components/NewLoginassign';
import Accordioncomponent from './components/Accordioncomponent';
import Loginclasscomponent from './components/Loginclasscomponent';
import NewLoginclass from './components/NewLoginclass';
import RefWithClassComponent from './components/RefWithClassComponent';
import RefWithC from './components/RefWithC';
import RefWithFunctionalComponent from './components/RefWithFunctionalComponent';
import AddEmployee from './components/RestApicall/AddEmployee';

function App() {
  let employeearr=[{
    name:"Jhon",
    profileimage: "/images/jhonimg.jpeg",
    about: "Hi I am a web developer working currently in xyz project"
  }]
  return (

    
    
    <AddEmployee/>
    

     /*<NewLogin/>
       <NewLoginclass/>
     <RefWithClassComponent/>
     <RefWithFunctionalComponent/>
     <Accordioncomponent employee={employeearr}></Accordioncomponent>
     <Loginclasscomponent/>
     <RefWithC/>
     <Accordioncomponent/>*/
  );
}

export default App;
