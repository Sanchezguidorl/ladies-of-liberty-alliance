import { BrowserRouter, Routes} from 'react-router-dom'
import '../styles/main.scss'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import { Container } from 'react-bootstrap'


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Container>
      <Routes>
        
      </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
