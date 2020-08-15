import React from 'react';

// importing styles
import "./styles.css";

const Button = ({href = "#", target="", text="Button", download=false, style}) => {

    return <a class="button" style={style} href={href} target={target} download={download}>{text}</a>;
}

export default Button;
