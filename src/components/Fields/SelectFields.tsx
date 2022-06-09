import React from 'react'
import {ErrorMessage, useField} from 'formik'
import {SelectContainer, SelectRegister,OptionRegister,LabelSelect} from './SelectFieldsElements'


type propTypes = {
    options:string[];
    name:string;

} 


const SelectFields = ({options,name}:propTypes) => {
  const [field,meta] = useField({name})
  

  return (
      <SelectContainer>
        <LabelSelect>{name.charAt(0).toUpperCase() + name.slice(1)}</LabelSelect>
    <SelectRegister  invalid={meta.touched && meta.error && "invalid"} {...field} >
        {options.map((opt,i)=>
            <OptionRegister value={i === 0 ? "" : opt} key={opt}>{opt}</OptionRegister>
        )}
    </SelectRegister>
       <ErrorMessage component='div' name={field.name} className="error"/>
    </SelectContainer>
  )
}

export default SelectFields