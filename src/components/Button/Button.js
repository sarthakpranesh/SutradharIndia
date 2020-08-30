import React from 'react';

// importing styles
import "./button.css";

const Button = ({href = "#", target="", download=false, style, children}) => {

    return <a class="button" style={style} href={href} target={target} download={download}>{children}</a>;
}

export default Button;
