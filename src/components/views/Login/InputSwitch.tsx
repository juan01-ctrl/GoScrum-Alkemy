import React from 'react'


type propTypes ={
    setHaveTeam: React.Dispatch<React.SetStateAction<boolean>>
}
const InputSwitch = ({setHaveTeam}:propTypes) => {
  return (
    <div className="swtich-container" >
    <input type="checkbox" id="switch" onClick={()=>setHaveTeam(prev=>!prev)}/>
    <label htmlFor="switch" className="lbl"></label>
  </div>
  )
}

export default InputSwitch