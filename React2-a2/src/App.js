import logo from './logo.svg';
import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import Tablecomponent from './components/Tablecomponent';
import Tablecomponentn from './components/Tablecomponentn';


function App() {
  const employeesArr = [
    {
      id:101,
      name:"John",
      dept:"IT",
      phone: 123456789
    },
    {
      id:102,
      name:"Foo",
      dept:"Admin",
      phone: 234567891
    },
    {
      id:103,
      name:"BAR",
      dept:"HR",
      phone: 345678912
    },
    {
      id:104,
      name:"Elle",
      dept:"IT",
      phone:456789123
    }
  ];
  const booksarr =[
    { id:"A-001",
      name:"A",
      author:"Kanitkar",
      publication:"world-publications"

    },
    { id:"B-004",
    name:"B",
    author:"Jhon",
    publication:"world-publications"

  },
  { id:"C-002",
  name:"C",
  author:"Kanitkar",
  publication:"world-publications"

  },
  { id:"D-009",
  name:"D",
  author:"Jane",
  publication:"Jane-publications"

},
{ id:"E-006",
name:"E",
author:"Ram",
publication:"Ram-publications"

}];
  return (
    <div className="App">
      <FunctionComponent books={booksarr}></FunctionComponent>
       

      {/*  <FunctionComponent books={booksarr}></FunctionComponent>
      <ClassComponent books={booksarr}></ClassComponent>
      <Tablecomponent employees={employeesArr}></Tablecomponent>
      <Tablecomponentn/> */}
        
      </div>
    
  );
}

export default App;
