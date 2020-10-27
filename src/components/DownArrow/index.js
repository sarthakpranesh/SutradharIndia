import React, { useEffect } from 'react';

// importing styles
import "./styles.css";

// importing Image
const arrowImage = require('../../assets/da.png');

const DownArrow = ({navigateTo = null, style = {},}) => {
    useEffect(() => {
        // navigate to about section when arrow clicked
        if (navigateTo != null){
            document.querySelector(".downArrow").addEventListener("click", ()=>{
                window.location.href = navigateTo;
            });
            document.querySelector(".downArrow").addEventListener("touch", ()=>{
                window.location.href = navigateTo;
            });
        }
    })
    return <img className="downArrow" style={style} src={arrowImage} alt="Down Arrow" />;
}

export default DownArrow;
