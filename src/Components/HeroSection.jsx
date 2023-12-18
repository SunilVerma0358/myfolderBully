import Container from 'react-bootstrap/Container';

const HeroSection = () => {

    function menulist() {
      document.querySelector("#view").classList.toggle("end-0");
      document.querySelector("body").classList.toggle("overflow-hidden");

    }
  
    function navbar2() {
      document.querySelector("#view").classList.toggle("end-0");
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  return (
    <section className="overflow bg_img ">
    <div className="d-flex justify-content-center min_height flex-column">
      <div className=" ff_poppins">
        <nav className=" d-flex justify-content-center height-50">
          <Container className=" ff_poppins d-flex justify-content-between align-items-center pt-3">
            <p className="fs_xl text_white fw-bold">logo</p>
            <input type="checkbox" id="mobileview" hidden />
            <div
              className=" icon  d-flex d-md-none flex-column justify-content-between"
              onClick={menulist}
            >
              <span className=" span1"></span>
              <span className=" position-relative span2"></span>
              <span className=" span3"></span>
            </div>
            <ul className="px-0 mb-0 d-flex flex-column flex-md-row justify-content-center align-items-center view gap-5" id="view">
              <li>
                <a href="#mint" onClick={navbar2}>Minting</a>
              </li>
              <li>
                <a href="#roadmap" onClick={navbar2}>Road Map</a>
              </li>
              <li>
                <a href="#faqs" onClick={navbar2}>Faq</a>
              </li>
              <li>
                <a href="#team" onClick={navbar2}>Team</a>
              </li>
              <li>
                <a href="#join" onClick={navbar2}>Join Us</a>
              </li>
            </ul>
          </Container>
        </nav>
      </div>
      <div className=" flex-grow-1 d-flex flex-column justify-content-center align-items-center ">
        <Container className=" mw_1320 mx-auto">
          <h1 className="text_white fs_5xl fw_normal mw_515 ff_poppins">
            Vitae nunc,
            <span className="text_white fs_5xl fw-bold "> blandit a odio</span>
          </h1>
          <p
            data-aos="fade-up"
            className="mw_500 fs_lg fw_medium gray_prime py-3 "
          >
            Semper in egestas risus id tempus. Pellentesque dolor eros
            sollicitudin feugiat ut odio semper. Mattis fermentum eget ut
            vestibulum dolor diam
          </p>
          <div className="banner">
            <a
              href="http://"
              className="hero_btn dark_blue butn butn__new mt-3"
              data-aos="fade-up" >
              Get Started
            </a>
          </div>
        </Container>
      </div>
    </div>
    <div className="bg_color"></div>
  </section>
  )
}

export default HeroSection;