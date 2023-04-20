import React, { useState } from 'react';

function Welcome() {
   const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Password: ${password}`);
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (

    <div className='my-5 d-flex align-items-center justify-content-center'>
<div className='my-5 border border-success'>
     <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input type="password" value={password} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
</div>
        

    </div>
   
  );
}
export default Welcome