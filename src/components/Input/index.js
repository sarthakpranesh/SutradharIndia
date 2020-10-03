import React from 'react';

const Input = ({title, placeholder, type, setValue, radioArr, name}) => {
    if (type === "radio") {
        return (
            <div style={{...styles.InputDivWrapper, flexDirection: 'row'}}>
                <label style={styles.InputLabelStyle}>{title}</label>
                {
                    radioArr.map((val) => {
                        return (
                            <div style={{marginLeft: '20px'}}>
                                <input onChange={(e) => setValue(e.target.value)} name={name} type="radio" style={styles.InputStyle} required value={val.value}/>
                                <label style={{...styles.InputLabelStyle, fontSize: '18px'}}>{val.title}</label>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
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
