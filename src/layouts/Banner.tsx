import dividerImg from "../assets/images/star-divider.png";
function Banner() {
  return (
    <div className="text-light banner-container position-relative">
        <div className="position-absolute mx-3 text-banner d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center">ABOUT <strong>US</strong></h2>
          <img
            src={dividerImg}
            className="img-fluid"
            alt="Divisor con estrellas"
          />
      </div>
    </div>
  );
}

export default Banner;
