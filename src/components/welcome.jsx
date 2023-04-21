import React, { useState } from 'react';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Welcome() {
   
   const [password, setPassword] = useState(localStorage.getItem("APY_KEY"));
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Password: ${password}`);
    localStorage.setItem('APY_KEY',"Bearer"+" "+password)
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  
  };

  return (
    <div
    className="modal show my-5"
    style={{ display: 'block', position: 'initial' }}>
    <Modal.Dialog>
      <Modal.Header closeButton className="bg-primary text-light">
        <Modal.Title className=''>Welcome on LinkedIn</Modal.Title>
      </Modal.Header>

      <Modal.Body className=''>
      
      <form onSubmit={handleSubmit} className='d-flex flex-column'>
      <InputGroup.Text id="inputGroup-sizing-default" className='bg-primary text-light' value={password} onChange={handleChange} placeholder='insert your apikey '>
          Bearer
          <Form.Control
          className='ms-2'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default wthitout Bearer"
          placeholder='Insert your apikey'
        />
        </InputGroup.Text>
       
        <button type="submit" className='btn btn-primary my-2'><Link to={"/profile"}>Login</Link></button>
        <Link to="https://strive.school/linkedin-registration">
          <p className='btn btn-warning w-100'>Register and get your apikey!</p>
        </Link>
    </form>

      </Modal.Body>

     
    </Modal.Dialog>
  </div>

  
   
  );
}
export default Welcome