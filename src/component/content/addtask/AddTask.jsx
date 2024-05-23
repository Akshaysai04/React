import React, { useEffect, useState } from "react";


function AddTask(){
    const [newtask,setnewtask]=useState('')
    const [tasklist,settaskList]=useState([])
    const handleInputChange=(event)=>{
        setnewtask(event.target.value)
    }
    const handleNewtask=()=>{
        settaskList((prev)=>[...prev,newtask])
        setnewtask('')
    }
    useEffect(()=>{console.log(tasklist)},[tasklist])
    return(
        <>
        <input type='text' onChange={handleInputChange} value={newtask}></input> 
        <button onClick={handleNewtask}>Submit</button>
      {tasklist}
        
        </>
    )
}
export default AddTask