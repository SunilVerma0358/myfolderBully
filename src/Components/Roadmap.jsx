import Container from 'react-bootstrap/Container';
const Roadmap = () => {
  return (
    <div>
    <div className=" position-relative z_2 " id="roadmap">
    <div className="d-flex justify-content-center  bg_dark_prime mt_1">
        <Container className=" ff_poppins py-5">
            <h3  className="py-sm-5 py-4 fs_3xl fw_bold text_white text-center">Roadmap</h3>
            <div className="main-timeline pt-5">
                <div className="timeline right">
                    <div  className="card">
                        <div className="card-body p-4">
                            <h3 className="text_white fs_lg fw-bold pb-4 heading_h">Q-4, 2021</h3>
                            <p className="mb-0 gray_light fs_sm fw-normal mw_385 f_phara ">Blandit sed penatibus elit
                                tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat
                                sed auctor non in commodo, felis viverra risus tristique.</p>
                        </div>
                    </div>
                </div>
                <div className="timeline left">
                    <div  className="card">
                        <div className="card-body p-4">
                            <h3 className="text_white fs_lg fw-bold text-sm-end pb-4 heading_h">Q-1, 2022</h3>
                            <p className="mb-0 gray_light fs_sm fw-normal mw_385 text-sm-end ms-auto f_phara">Blandit
                                sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat dolor netus
                                auctor at. Volutpat sed auctor non in commodo, felis viverra risus tristique.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline right">
                    <div  className="card">
                        <div className="card-body p-4">
                            <h3 className="text_white fs_lg fw-bold pb-4 heading_h">Q-2, 2022</h3>
                            <p className="mb-0 gray_light fs_sm fw-normal mw_385 f_phara">Blandit sed penatibus elit
                                tortor fermentum velit donec. Id eleifend volutpat dolor netus auctor at. Volutpat
                                sed auctor non in commodo, felis viverra risus tristique.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <div className="roadmap_e d-none d-sm-block"></div>
    </div>
</div>
<div className=" overflow py-4 py-sm-5 bg_dark_prime mt_1 px-2 ">
    <p className="fs_2xl text_white fw-medium mw-500 text-center mw_786 mx-auto py-4 py-sm-5 ff_poppins phara px-1">And this just the
        begining , the team is working on more suprises for our community. Buddybullies stronger together !!</p>
</div>
</div>
  )
}

export default Roadmap