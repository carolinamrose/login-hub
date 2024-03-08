import { forwardRef } from "react";

export const Option = forwardRef(({label, id, value, ...rest}, ref) => {
    return (
      <>
        <label htmlFor={id} className="form__label">{label}</label>
        <select 
          id={id}
          ref={ref} 
          {...rest} 
          className="form__input">
            <option value="" disabled></option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
        </select>
   </>
    )
 });