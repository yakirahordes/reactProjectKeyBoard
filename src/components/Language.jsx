function Language({ boolean, setBoolean, changeCase, setChangeCase, text, setText, last, setLast}) {
    function handleLanguageChange(){
        setBoolean(!boolean);
    }
    function handleCase() {
        setChangeCase(changeCase==='lowercase'? 'uppercase': 'lowercase')
    }
    function handleDelete() {
        setText(text.slice(0,-1));
    }
    function handleUndo() {
        last === text[text.length-1] ? handleDelete() : setText(prev => [...prev, last])
        console.log('text[text.length-1]: ', text[text.length-1]);
        console.log('last: ', last);
    }
    return (
        <>
         <h1>Language</h1>
        <button onClick = {handleLanguageChange}>English/עברית</button>
        <button onClick = {handleCase}>Change Case</button>
        <button onClick = {handleDelete}>Delete</button>
        <button onClick = {handleUndo}>Undo Last</button>
        </>
    )
}

export default Language;