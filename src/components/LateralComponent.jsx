import { FaQuestionCircle } from 'react-icons/fa'
import image from "./src/image/hiring.png"
import { Col } from'react-bootstrap';
import { Container } from'react-bootstrap';
import { FaUserPlus,FaAngleDown,FaLinkedin } from 'react-icons/fa'
import { Row } from'react-bootstrap';
const LateralComponent = () =>{
    return(
<>
{/*prima parte della lateral bar, */}
<div className="border border-2 rounded-3 mb-3 p-2 bg-white ColorTextGrey">
    <div className="ms-2 d-flex justify-content-between me-2">
<p>modifica il profilo pubblico e L'URL</p>
<i><FaQuestionCircle></FaQuestionCircle></i>
    </div>
    <hr className="mx-2"></hr>
    <div className="ms-2 d-flex justify-content-between me-2 mb-3 ColorTextGrey">
aggiungi il tuo profilo in un'altra lingua
<i><FaQuestionCircle></FaQuestionCircle></i>
    </div>
</div>
{/*fine prima parte della lateral bar, */}



{/*seconda parte della lateral bar,contenente un banner ! */}
<div className="">
<img src={image} alt=""  className='rounded-3 img-fluid mb-3' />
</div>
{/*seconda parte della lateral bar,contenente un banner ! */}




{/*terza parte della lateral bar,contenente una lista di persone che puoi conoscere ! */}
<div className='border border-2 rounded-3 my-2  bg-white'>

<div>
<p className='ms-4'>persone che potresti conoscere</p>

<div>
    <Container className='p-0 mb-3'>
        <Row className='mx-2'>
<Col md={3}>
<img src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg" alt="" width={55} className='rounded-5'/>
</Col>

<Col className='d-flex flex-column '>

<p className='my-0'>Rachel Montanés</p>
<p className='mb-1'>functional artist</p>
<button className='PersoneButton  rounded-4 d-flex align-items-center mb-3'><FaUserPlus className='mx-1'/>Collegati</button>
</Col>
<hr className="mx-1 mt-1 mb-3"></hr>

<Col md={3}>
<img src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg" alt="" width={55} className='rounded-5'/>
</Col>

<Col className='d-flex flex-column ms-2 '>

<p className='my-0'>Rachel Montanés</p>
<p className='mb-1'>functional artist</p>
<button className='PersoneButton  rounded-4 d-flex align-items-center mb-3'> <FaUserPlus className='mx-1'/>Collegati</button>
</Col>
<hr className="mx-1 my-0 "></hr>
        </Row>


<div className='p-0'>
   <button className='v-altro bg-white btn mx-0 rounded-0'>Visualizza altro<FaAngleDown/></button>
</div>
    </Container>
  
</div>
</div>




</div>
{/*fine terza parte della lateral bar,contenente una lista di persone che puoi conoscere ! */}




{/*inzio 4 parte della lateral bar,contenente una lista di corsi da poter seguire! */}

<div>
    <Container className='border border-2 rounded-3 mt-3 p-0 bg-white'>
        <div className='px-2 mt-2 '>
            <p className='mb-0 d-flex align-items-center'><FaLinkedin className='Linkedin'/>Learning</p>
            <p>Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore</p>
        </div>

        <div className='d-flex p-2 '>
            <div>
                <img src="https://medusajs.com/images/video-game-cover-min.jpg" alt="" width={100}/>
            </div>
            <div className='ms-2'>
                <p>Formazione essenziale su javascript</p>
            </div>
        </div>
        <div className='p-0'>
   <button className='v-altro bg-white btn mx-0 rounded-0'>Visualizza altro<FaAngleDown/></button>
</div>
    </Container>
</div>
{/*fine 4 parte della lateral bar,contenente una lista di corsi da poter seguire! */}


{/*inzio 5 parte della lateral bar,contenente la stesso banner al punto 2* */}
<div className="my-3 sticky-top">
<img src={image} alt=""  className='rounded-3 img-fluid' />
</div>
</>
    )
}

export default LateralComponent;