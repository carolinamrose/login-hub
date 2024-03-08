import { forwardRef } from "react";

export const Input = forwardRef(({label, id, helper, ...rest}, ref) => {
    return (
       <>
          <label htmlFor={id} className="form__label">{label}</label>
          <input 
          id={id}
          ref={ref} 
          {...rest}
          className="form__input" />
          {helper ? <p className="form__error">{helper}</p> : null}
          
       </>
    )
 });