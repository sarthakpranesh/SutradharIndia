import React from 'react';

const Input = ({title, placeholder, type, setValue}) => {
    return (
        <div style={styles.InputDivWrapper}>
            <label style={styles.InputLabelStyle}>{title}</label>
            <input onKeyUp={(e) => setValue(e.target.value)} type={type} placeholder={placeholder} style={styles.InputStyle} required/>
        </div>
    )
}

const styles = {
    InputDivWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
    InputLabelStyle: {
        fontSize: '28px',
        fontWeight: '800',
        color: '#ff971d'
    },
    InputStyle: {
        fontSize: '18px',
        marginTop: '6px',
        padding: '6px',
    },
}

Input.defaultProps = {
    title: "Input Title",
    placeholder: "Input placeholder",
    type: "text",
    setValue: () => {},
}

export default Input;
