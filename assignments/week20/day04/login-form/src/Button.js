import React from 'react';
function Button(props) {
    return (
        <button className={"btn" + props.class}>Submit</button>
    );
}

export default Button;
