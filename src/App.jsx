import Navbar from "./components/Navbar"
import Card from "./components/Card"
import "./App.css";

function App() {


  return (
    <>
    <Navbar />
    <div className="card-container">
      <Card name='rahul' dept='cse' year='III' />
      <Card name='rickshan' dept='Mech' year='V' />
      <Card name='hamath' dept='IT' year='IV' />
      <Card name='jason' dept='ECE' year='II' />
      </div>
    </>
  )
}

export default App
