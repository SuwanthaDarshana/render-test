import React, { useState } from 'react'

function DropDown() {

    const[role,setRole] = useState('');

    const handleChange = (e) => {
        setRole(e.target.value);
    }

  return (
    <div>
        <h3>DropDown</h3>
        <select value={role} onChange={handleChange}>
            <option value="">Select</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
        </select>
        <p>Selected Role: {role}</p>
    </div>
  )
}

export default DropDown