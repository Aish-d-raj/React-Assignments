import logo from './logo.svg';
import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  const sty = {
    backgroundColor: "black",
    color: "white",
    fontWeight:"bold",
    marginBottom:"20px",
    paddingBottom: "30px",
    borderRadius: "50%",
    border: "5px solid blue",
    textAlign: "center",
    borderStyle:"double"
  };
  return (
    <div className='App'>
    <FunctionComponent s={sty} f="Function Component"></FunctionComponent>
    <ClassComponent s={sty} c="Class Component"></ClassComponent>
    </div>
   
  );
}

export default App;
