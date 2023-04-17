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
<div className="border border-2 rounded-3 my-3 p-2 bg-white">
    <div className="ms-2 d-flex justify-content-between me-2">
<p>modifica il profilo pubblico e L'URL</p>
<i><FaQuestionCircle></FaQuestionCircle></i>
    </div>
    <hr className="mx-2"></hr>
    <div className="ms-2 d-flex justify-content-between me-2">
aggiungi il tuo profilo in un'altra lingua
<i><FaQuestionCircle></FaQuestionCircle></i>
    </div>
</div>
{/*fine prima parte della lateral bar, */}



{/*seconda parte della lateral bar,contenente un banner ! */}
<div className="">
<img src={image} alt=""  className='rounded-3 img-fluid' />
</div>
{/*seconda parte della lateral bar,contenente un banner ! */}




{/*terza parte della lateral bar,contenente una lista di persone che puoi conoscere ! */}
<div className='border border-2 rounded-3 my-2  bg-white'>

<div>
<p className='ms-4'>persone che potresti conoscere</p>

<div>
    <Container className='p-0'>
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
<div>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores ducimus tempora quo aliquam minima nisi repellat eos facilis sunt fuga, itaque pariatur vero aperiam modi debitis iste quae nam.
Corrupti necessitatibus laborum expedita alias quidem voluptatem esse veniam vero, natus vitae voluptate inventore. Minus, doloribus cumque. Unde placeat at aliquam, nulla debitis rem incidunt aliquid deserunt suscipit, dolor in.
Laudantium dignissimos eos voluptas eveniet facilis sapiente voluptatem architecto beatae vero. Voluptatem soluta quidem possimus labore sed dolore porro cum voluptatibus aspernatur, deserunt debitis sapiente animi voluptatum eius, eveniet veniam!
Deleniti explicabo perspiciatis dolorem exercitationem, laudantium rerum nam dicta architecto possimus fugit sit quia sapiente? Quae, praesentium saepe? Necessitatibus, iste quos libero nisi alias unde expedita ab asperiores obcaecati commodi.
Sed temporibus dolor officia, cumque cupiditate doloribus, nam iure possimus ab esse et excepturi deleniti rem quos nesciunt aspernatur! Unde libero veniam neque eos laborum distinctio repellendus dicta sed architecto!
Aspernatur optio aliquid incidunt deleniti neque vel, fugit illum natus! Quaerat dolorem quam incidunt ducimus. Aliquam adipisci sit, explicabo debitis non accusantium corrupti quae laboriosam? Facere, id? Similique, aspernatur voluptatibus!
Esse eum deleniti ab eaque commodi nobis sapiente magni quos optio perferendis non consequuntur dolor quidem odio fuga, officia nulla impedit? Iste, non. Tenetur rerum autem, possimus facere tempore aut!
Commodi voluptatum alias, quisquam odio debitis laborum unde modi. Alias sapiente, quae ipsum nihil tempore mollitia incidunt. Consectetur omnis officiis quaerat dolore tenetur. Obcaecati doloribus ipsum aspernatur possimus cum quibusdam?
Tempore saepe architecto, itaque quam esse adipisci voluptate inventore nam quasi error. Perspiciatis, dolorem, sequi delectus temporibus vero ipsa sed eos libero, error ullam tenetur at corrupti odio accusamus modi.
Ipsam fugit distinctio id ipsum quisquam quia voluptates consequatur doloribus quibusdam, optio eveniet voluptatibus sed nulla dolores natus nobis nostrum quas? Rem facilis corrupti tenetur obcaecati. Sint amet debitis maxime.
</div>
</>
    )
}

export default LateralComponent;