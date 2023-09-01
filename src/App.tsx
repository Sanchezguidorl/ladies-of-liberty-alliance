import { BrowserRouter, Routes} from 'react-router-dom'
import '../styles/main.scss'
import Header from './layouts/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
