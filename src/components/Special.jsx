function Special({ textCase, setTextCase, setText, setChangeCase }) {
    function handleClearAll() {
        setText([]);
    }
    function handleUpperAll() {  
        setTextCase('uppercase')
    }
    function handleLowerAll() {
        setTextCase('lowercase')
    }
    return (
        <>
        <h1>Special</h1>
        <button onClick = {handleClearAll}>CLEAR ALL</button>
        <button onClick = {handleUpperAll}>UPPER-CASE ALL</button>
        <button onClick = {handleLowerAll}>LOWER-CASE ALL</button>
        </>
    )
}

export default Special