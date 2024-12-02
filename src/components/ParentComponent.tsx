import React from 'react'
import ChildComponents from './ChildComponents'

const ParentComponent = () => {
    let name = "Shahzad kiani "

   
    let fvtDish = "Seekh Kabab "
    let fvtColor ="Yellow"
  return (
    <div className=' text-center'>
        <ChildComponents 
        name ={name}
        
        fvtDish ={fvtDish}
        fvtColor ={fvtColor}
        />

    </div>
  )
}

export default ParentComponent