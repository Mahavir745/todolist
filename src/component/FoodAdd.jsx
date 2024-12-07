import React, { useRef, useState } from 'react'

const FoodAdd = ({todoinfo}) => {

  const todonameElement = useRef()
  const dueDateElement = useRef()

  function Addbtn(){
    let todoname = todonameElement.current.value;
    let duedate = dueDateElement.current.value;

    todonameElement.current.value = ""
    dueDateElement.current.value = ""
    todoinfo(todoname,duedate);
  };

  return (
    <div className='foodAdd'>
      <input type="text"
       placeholder='add a item'
       ref={todonameElement}

       />
      <input type="date"  
      ref={dueDateElement}
      />
      <button onClick={Addbtn}>Add</button>
    </div>

  )
}

export default FoodAdd