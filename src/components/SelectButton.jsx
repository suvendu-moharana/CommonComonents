import React, { useState } from 'react'

function SelectButton() {
    const [num,setNum]=useState(); 
    const handleSelec=(e)=>{
            setNum(e.target.value)
    }
  return (
    <div >
        <h1>you choose {num} value</h1>

        <select value={num} onChange={handleSelec} style={{width: '100px',height:'50px'}}>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
            <option value={'5'}>5</option>
        </select>
    </div>
  )
}

export default SelectButton