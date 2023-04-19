import { Container } from "react-bootstrap";
import { FaInfoCircle,FaRegCircle,FaAngleDown } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const LinkedinNotice = () =>{
    return(
  <div>
    <Container className="border border-2 rounded-3  p-2 bg-white">
<div className="d-flex justify-content-between">
    <p className="">Linkedin Notizie</p>
    <FaInfoCircle/>
</div>

{/*liste di notizie */}
<Container>


<Row>
    <Col md={2} className="mx-0">
    <FaRegCircle className="Iconsmall d-flex my-2"></FaRegCircle>
    </Col>

    <Col md={10} className="mx-0">
        <p className="NoticeText my-0">Le top Companies del 2023 in italia</p>
        <p className="my-0 NoticeTextsec text-secondary">Notizie principali * 130 lettori</p>
    </Col>
    <button className="v-altro bg-white btn mx-0 rounded-0 NoticeText text-start">
        Visualizza altro 
        <FaAngleDown />

        
        </button>
</Row>

</Container>
{/*liste di notizie */}

    </Container>
  </div>
    )
}
export default LinkedinNotice