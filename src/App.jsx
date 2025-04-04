import './App.css'
import { FaGithubSquare } from "react-icons/fa";
import Linkedin from './components/Linkedin';
function App() {

  return (
    <div className='container-app'>
      <h1>Links</h1>

      <a href="https://github.com/alexandre-anabuki" className='links' target='blank'>
        <FaGithubSquare />
        Github
        <FaGithubSquare />
      </a>

      <Linkedin />

    </div>
  )
}

export default App
