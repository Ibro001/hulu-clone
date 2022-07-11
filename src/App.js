import Header from "./component/Header/Header"
import './App.css'
import Navbar from "./component/NavBar/Navbar"
import { useState } from "react"
import requests from "./helpers/requests"
import Result from './component/Result/Result'



const App = () => {
  const [selectedOption,setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Result selectedOption={selectedOption} />
    </div>
  )
}

export default App
