
import { Container } from 'react-bootstrap'
import Banner from './../layouts/Banner'
import imagen from '../assets/images/img-lola.jpg'

function AboutUs() {
  return (
    <div>
<Banner/>
<Container className='about-us-content my-4'>
  <img src={imagen} className='img-fluid' alt="" />
</Container>
    </div>
  )
}

export default AboutUs
