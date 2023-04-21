import React, { useState } from 'react';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Welcome() {
   
   const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Password: ${password}`);
    localStorage.setItem('APY_KEY',password)
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  
  };

  return (
<Row className='my-5'>  
<div className='d-flex justify-content-center my-5 border login '>
  <form onSubmit={handleSubmit}>
        <input type="password" value={password} onChange={handleChange} placeholder='insert your apikey' />
      <button type="submit">Submit</button>
    </form>
</div>
     

</Row>
  
        

  
   
  );
}
export default Welcome