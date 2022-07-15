import React, { useEffect } from 'react';

const Modal = ({ modalContent , close}) => {
  useEffect(()=>{
   setTimeout(() => {
    close()
   }, 3000); 
  })
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
