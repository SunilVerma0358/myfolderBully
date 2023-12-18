import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArtImg from "../Assets/Image/art_img.webp";
import Bullies from "../Assets/Image/bullies.webp";
import Breeding from "../Assets/Image/breeding.webp";
import Digtalmarkect from "../Assets/Image/digtalmarkect.webp";
import Merch from "../Assets/Image/merch.webp";
import Charity from "../Assets/Image/charity.webp";
import { Image } from 'react-bootstrap';

const cardData = [
    {
      src: ArtImg,
      h2: "ART COLLECTION",
      para: "Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.",
    },
    {
      src: Bullies,
      h2: "SPECIAL BULLIES",
      para: "<b class=fw-medium>20 Buddybullies</b> (out of 10k) will have a very <b class=fw-medium>special and ersonalized</b> resembling of <b class=fw-medium>famous people</b> who are into NFTs (those will be available after the minting).",
    },
    {
      src: Breeding,
      h2: "BREEDING",
      para: "Our <b class=fw-medium>BuddyBullies</b> will not come alone, as we will announce the breeding function after the minting and you will be able to get <b class=fw-medium>a PuppyBully</b> (for free).",
    },
  
    {
      src: Digtalmarkect,
      h2: "DIGITALMARKETS",
      para: "<b class=fw-medium>Communicate with all the digital markets</b> available in the <b class=fw-medium>Solana NFT</b> world for getting our collection <b class=fw-medium>successfully listed</b>.",
    },
  
    {
      src: Merch,
      h2: "MERCH",
      para: "<b class=fw-medium>The team is working on the future merch</b> thet will be available for the community members directly on our webpage.",
    },
  
    {
      src: Charity,
      h2: "CHARITY",
      para: "We will be giving <b class=fw-medium >30% of the royalties to charity</b> permanently and we will keep spending on marketing, promotions and partnership.<b class=fw-medium >50% of the riyalties</b> will go back to <b class=fw-medium>the community</b> as rewards.",
    },
  ];
const CardSection = () => {
      const card = cardData.map((e) => {
        return (
          <Col lg={4} md={6} className="pt-4 pt_41 ">
            <div className="card_art card_hover">
              <Image src={e.src} alt="art" />
              <h2 className="text_white fs_2xl fw-medium pt-sm-5 pt-4 phara">
                {e.h2}
              </h2>
              <p
                className="fs_sm fw-normal gray pt-3 phara pb-sm-5"
                dangerouslySetInnerHTML={{ __html: e.para }}
              ></p>
            </div>
          </Col>
        );

      });
  return (
    <section className="bg_dark_prime mt_1">
    <div className="d-flex justify-content-center ff_poppins">
      <Container className=" position-relative z_2">
        <Row className="py-5">{card}</Row>
      </Container>
    </div>
  </section>
  )
}

export default CardSection;