import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronUp,
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "react-bootstrap";
function Footer() {
  return (
    <footer id="Footer" className="bg-secondaryDark">
      <Container>
        <Row className='d-flex justify-content-center'>
          <Col xs={12} sm={5} className="">
            <div className="inner-footer links-footer ps-0">
              <h4 className="text-light mb-3">QUICK LINKS</h4>
              <ul className="p-0">
                <li className="mb-1">
                  <a href="">Donations</a>
                </li>
                <li className="mb-1">
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} className="column-contact">
            <div className=" constact-data-footer inner-footer">
              <h4 className="text-light mb-3">GET IN TOUCH</h4>
              <ul className="p-0">
                <li className="mb-1">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-2"
                    style={{ fontSize: 14 }}
                  />
                  712 H Street NE Suite 1644, Washington, DC 20002
                </li>
                <li className="mb-1">
                    <FontAwesomeIcon
                      icon={faMobileScreenButton}
                      className="me-2"
                      style={{ fontSize: 14 }}
                    />
                  <a href="">
                    335332135
                  </a>
                </li>
                <li>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="me-2"
                      style={{ fontSize: 14 }}
                    />
                  <a href="">
                    example@gmail.com
                  </a>
                </li>
                <div className="mt-4 d-flex social-media-icons">
                  <a href="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </ul>
            </div>
          </Col>
        </Row>
        </Container>
        <a
          href="#main"
          className="arrow-up-anchor d-flex justify-content-center align-items-center"
        >
          <FontAwesomeIcon icon={faChevronUp} style={{ color: "#ffffff" }} />
        </a>
        
    </footer>
  );
}

export default Footer;
