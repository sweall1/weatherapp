import React from 'react';

const Form = props => {
    return (
        <div>
<form> 
    <input type= "text"
     value={props.value}
     onChange={props.change}
    placeholder="Wpisz miasto"
     />
  
</form>
        
        </div>
    );
}

export default Form;