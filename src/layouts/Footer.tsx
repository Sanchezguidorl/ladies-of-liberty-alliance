import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "react-bootstrap";
function Footer() {
  return (
    <footer id="Footer" className="bg-secondaryDark">
      <Container>
        <Row>
          <Col xs={12} sm={5} className="px-2">
            <div className="inner-footer links-footer">
            <h4 className="text-light mb-3">QUICK LINKS</h4>
            <ul>
              <li className="mb-1">
                Donations</li>
              <li className="mb-1">Contact Us</li>
            </ul>
            </div>
          </Col>
          <Col xs={12} sm={7} className="px-2 column-contact">
<div className=" constact-data-footer inner-footer">
<h4 className="text-light mb-3">GET IN TOUCH</h4>
            <ul>
              <li className="mb-1">
              <FontAwesomeIcon icon={faLocationDot} className="me-2" style={{fontSize:14}}/>
                712 H Street NE Suite 1644, Washington, DC 20002</li>
              <li className="mb-1">
              <FontAwesomeIcon icon={faMobileScreenButton} className="me-2" style={{fontSize:14}}/>
                335332135</li>
              <li>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" style={{fontSize:14}}/>
                example@gmail.com</li>
              <div className="mt-4 d-flex social-media-icons">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </ul>
</div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </footer>
  );
}

export default Footer;
