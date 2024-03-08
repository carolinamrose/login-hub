import { forwardRef } from "react";

export const Selection = forwardRef(({label, id, value, ...rest}, ref) => {
    return (
      <>
        <label htmlFor={id} className="form__label">{label}</label>
        <select 
          id={id}
          ref={ref} 
          {...rest} 
          className="form__input">
            <option value="" disabled></option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
        </select>
   </>
    )
 });