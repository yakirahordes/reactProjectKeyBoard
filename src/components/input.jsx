function Input({ text, textCase}) {

    return (
        <div style = {{textTransform: textCase, border: "1px solid grey"}}>{text}</div>   
    )
}

export default Input;