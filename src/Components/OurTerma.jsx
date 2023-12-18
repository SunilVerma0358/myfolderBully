import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bullister from'../Assets/Image/bullister.webp';
import Bullie from'../Assets/Image/bullie.webp';
import Meta from'../Assets/Image/meta.webp';
import { Image } from 'react-bootstrap';

const OurTerma = () => {
  return (
    <section  className="overflow" id="team">
    <div  className="d-flex justify-content-center bg_dark_prime mt_1 pb-lg-5 ">
        <Container  className=" ff_poppins py-sm-5">
            <h2 className="fs_3xl text_white fw_bold text-center py-5">Our Team</h2>
            <Row  className=" justify-content-center pb-5">
                <Col lg={4} md={6}   className=" three_hover">
                    <div  className="text-center pb-2 pt-3"><Image  className="w-100 h-auto" src={Bullister}
                            alt="bulliester"/>
                    </div>
                    <h3  className="fs_2xl text_white fw-medium text-center pt-4">Prime Bullister </h3>
                    <p  className="fs_md text_white fw-normal pt_2 text-center phara">Pruduct Designer</p>
                </Col>
                <Col lg={4} md={6} className=" three_hover pt-5 pt-md-0">
                    <div  className="text-center pb-2 pt-3"><Image  className="w-100 h-auto" src={Bullie} alt="bullie"/>
                    </div>
                    <h3  className="fs_2xl text_white fw-medium text-center pt-4">Solvador Bulli </h3>
                    <p  className="fs_md  fw-normal text-center pt_2 text_white phara">Artist</p>
                </Col>
                <Col  lg={4} md={6}  className=" three_hover pt-5 pt-lg-0 ">
                    <div  className="text-center pb-2"><Image  className=" h-auto w-100" src={Meta} alt="meta"/></div>
                    <h3  className="fs_2xl text_white fw-medium text-center pt-4">Meta Bully </h3>
                    <p  className="fs_md  fw-normal text-center pt_2 text_white phara">Developer</p>
                </Col>
            </Row>
        </Container>
    </div>
</section>
  )
}

export default OurTerma;