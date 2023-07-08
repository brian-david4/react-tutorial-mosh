import React, { ReactNode } from 'react';

interface AlertProps {              // declaring type of props needed.
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose } : AlertProps) => {         //destructuring the props
  return (
    <div className='alert alert-secondary alert-dimissible'>
      {children}
      <button onClick={onClose} type="button" className='btn-close' data-bs-dismiss="alert" aria-label='Close'></button>
    </div>
  )
}

export default Alert;