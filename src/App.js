import React, { useState, useReducer } from 'react';
import Modal from './Modal';

// reducer function
const reducer = (state,action)=>{
switch (action.type) {
  case "ADD_ITEM":
    const newItems = [...state.people, action.payload ]
    return {
    ...state,
    people: newItems ,
    isModalOpen: true,
    modalContent : "اضافه شد!"
  }
  case "NO_VALUE":
    return {
      ...state, isModalOpen:true,modalContent:'یک نام وارد کن!'
    }
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false
      }
    case "REMOVE_ITEM":
      const newPeople = state.people.filter(item => item.id !== action.payload)
      return {...state, people : newPeople}


throw new Error("مقادیر صحیح نیست")
}
}



const Index = () => {
  
  const cloeModal =()=>{
   return dispatch({type:"CLOSE_MODAL"})
  }

  const defaultState ={
    people : [],
    isModalOpen : false,
    modalContent: ""
  }

const [name,setName] = useState("")
const [state, dispatch] = useReducer(reducer,defaultState)

const handelSubmit = (e) => {
  e.preventDefault()
  if(name){
    const newPeople = {id:new Date().getTime().toString(),name}
    dispatch({type:"ADD_ITEM", payload: newPeople})
    setName("")
  }else{
    dispatch({type:"NO_VALUE"})
  }
}
  return (
    <div className='container'>

   { state.isModalOpen && <Modal modalContent={state.modalContent} close={cloeModal} /> }

      <form  className='form' onSubmit={handelSubmit}>
        <div>
          <input type='text' value={name} onChange={e => setName(e.target.value) } />
        </div>
        <button type='submit'>اضافه کن</button>
      </form>
      {state.people.length > 0 ? (
        state.people.map(person =>(
         <div id={person.id} className="item">
           <h4>{person.name}</h4>
           <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:person.id})}>حذف کردن</button>
         </div>
       ))) : (<h4>موردی برای نمایش وجود ندارد</h4>) 
      }
      </div>
  );
};

export default Index;