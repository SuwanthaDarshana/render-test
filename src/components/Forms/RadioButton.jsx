import React, { useState } from 'react'

function RadioButton() {

    const[gender, setGender] = useState('');


  return (
    <div>
        <h3>RadioButton</h3>
        <input
         type="radio"
         name='gender'
         value="male"
         checked={gender==="male"}
            onChange={e => setGender(e.target.value)}

         />
    </div>
  )
}

export default RadioButton