
import './App.css';

import Headercomponent from './components/Headercomponent';
import Navcomponent from './components/Navcomponent';
import Maincomponent from './components/maincomponent';
import Sidecomponent from './components/sidecomponent';
import FooterComponent from './components/Footercomponent';

function App() {
  return (
    <div className="App">
      <Headercomponent name="Employee Management System"></Headercomponent>
      <Navcomponent home="Home" m1="Menu1" m2="Menu2" m3="Menu3" m4="Menu4"></Navcomponent>
      
      <Maincomponent m="Content Header"></Maincomponent>
      <FooterComponent c="Dialog"></FooterComponent>
      
     </div> 
    
  );
}

export default App;
