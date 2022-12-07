import React from 'react';
import classes from './Buttons.module.css';

function Buttons({value,handler}) {
  return (
    <div className={value === "C" || value === "=" ? `${classes.calcBtns} ${classes.res}` : classes.calcBtns} onClick={()=>handler(value)}>
        {value}
    </div>
  )
}

export default Buttons;