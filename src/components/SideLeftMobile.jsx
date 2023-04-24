import { render } from '@testing-library/react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiTwotoneSetting, AiFillAppstore } from "react-icons/ai";



function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <Button variant="light" onClick={handleShow} className="me-2 fixed-top bg-transparent border-none" style={{width: "20px"}}>
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} className="w-75" >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body  >
            <div id="myNav">
          <h4>Sabri Zaltni</h4>
          <span className='text-secondary mt-0'>Visualizza profilo</span>
          </div>
          <div className="d-flex">
            <p className='mt-3'>9</p>
            <span className='mx-1 text-secondary mt-3'>visualizzazioni del profilo</span>
            
          </div>
          <hr />
          <h2>Gruppi</h2>
          <br />
          <h2 >Eventi</h2>
          <hr className='hrSide'/>
          <div className="d-flex">
          <AiFillAppstore className='fs-5 text-warning'/>
          <h6 className='mx-2'>Prova Premium gratis</h6>
          </div>
          <br />
          <div className="d-flex">
            <AiTwotoneSetting className='fs-5 text-secondary'/>
          <h6 className='mx-2'>Impostazioni</h6>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function Example() {
  return (
    <>
      {['start'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

render(<Example />);

export default OffCanvasExample;