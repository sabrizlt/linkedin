import { Container } from "react-bootstrap";
import { FaInfoCircle,FaRegCircle } from "react-icons/fa";
const LinkedinNotice = () =>{
    return(
  <div>
    <Container className="border border-2 rounded-3 mt-3 p-2 bg-white">
<div className="d-flex justify-content-between">
    <p>Linkedin Notizie</p>
    <FaInfoCircle/>
</div>

<div className="d-flex">
<div className="d-flex  wrap-nowrap">
    <FaRegCircle className="Iconsmall align-items-center"/>
    <p>Le top Companies del 2023 in italia</p>
</div>

</div>
    </Container>
  </div>
    )
}
export default LinkedinNotice