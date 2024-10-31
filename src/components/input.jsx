function Input({ text, textCase}) {
    
    return (
        <div style = {{textTransform: textCase}}>{text}</div>   
    )
}

export default Input;