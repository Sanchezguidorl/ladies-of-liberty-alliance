import { BrowserRouter, Route, Routes} from 'react-router-dom'
import '../styles/main.scss'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import AboutUs from './components/AboutUs'


function App() {

  return (
    <BrowserRouter>
    <Header/>
   <Routes>
    <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
