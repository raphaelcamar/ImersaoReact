import React from 'react';

function FormField({type, valores, name, onChange, label}){
    return (
    <div>
        <label>
            {label}:
        <input
            type={type}
            name={name}
            value={valores.nome}
            onChange={onChange}/>
        </label>
    </div>
    )    
}

export default FormField;