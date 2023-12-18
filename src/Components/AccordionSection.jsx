import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
const AccordionSection = () => {
  return (
    <section className="overflow" id="faqs">
    <div className="d-flex justify-content-center bg_dark_prime mt_1 position-relative z_2">
        <Container className=" ff_poppins">
            <h2  className="fs_3xl fw_bold text_white text-center py-5">FAQs</h2>
            <Accordion defaultActiveKey="0" className='mw_830 mx-auto'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>       What’s the blockchain the buddybullies call home ?</Accordion.Header>
        <Accordion.Body className='fs_sm fw-medium gray'>
        Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='w-100 mt-4'>
        <Accordion.Header> What’s the blockchain the buddybullies call home ?</Accordion.Header>
        <Accordion.Body className='fs_sm fw-medium gray'>
        Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='w-100 mt-4'>
        <Accordion.Header> What’s the blockchain the buddybullies call home ?</Accordion.Header>
        <Accordion.Body className='fs_sm fw-medium gray'>
        Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='w-100 mt-4'>
        <Accordion.Header> What’s the blockchain the buddybullies call home ?</Accordion.Header>
        <Accordion.Body className='fs_sm fw-medium gray'>
        Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
          
        </Container>
        <div className="accordion_e d-none d-sm-block"></div>
    </div>
</section>
  )
}

export default AccordionSection;