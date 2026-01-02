import React, { useState } from 'react'

function MyForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
        <form>
            <label>Enter Your Name:</label>
            <input type="text" id="name" name="name" />
            <input type='text' ></input>
        </form>
    </div>
  )
}

export default MyForm