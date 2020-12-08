import React from 'react';
/*
 'Experiment' component.
 Testing forwardRef, passing of props.
*/
function Input({type, id, name, onKeyDown, onChange, placeholder}, ref) {
    return (
        <input 
            type={type}
            id={id}
            name={name}
            onKeyDown={onKeyDown}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
        />
    );
}
const forwardInput = React.forwardRef(Input);
export default forwardInput;