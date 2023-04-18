import { FaQuestionCircle } from 'react-icons/fa'
import image from "./src/image/hiring.png"
import { Col } from'react-bootstrap';
import { Container } from'react-bootstrap';
import { FaUserPlus,FaAngleDown,FaLinkedin } from 'react-icons/fa'
import { Row } from'react-bootstrap';
import ModalModify from './ModalModify';

const Experiences = () =>{
    return(
        <div className='border border-2 rounded-3 my-2  p-2 bg-white'>

<div>
    <div className='d-flex justify-content-between'>
        <h2 className='ms-2'>Esperienze</h2>

<ModalModify />
    </div>

<div>
    <Container className='p-0 mb-3'>
        <Row className='mx-2'>
<Col md={3} className='d-flex align-items-center mb-3'>

<img src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg" alt="" width={30} className='rounded-5'/>
<p className='mb-1 mx-2'>functional artist</p>
</Col>

<hr className="mx-1 mt-1 mb-3"></hr>
        </Row>


<div className=''>
   <button className='v-altro bg-white btn mx-0 rounded-0'>Visualizza altro<FaAngleDown/></button>
</div>
    </Container>
  
</div>
</div>




</div>
    )
}

export default Experiences