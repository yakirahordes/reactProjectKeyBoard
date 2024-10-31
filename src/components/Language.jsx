import handleAddLetter from './Hebrew'

function Language({ boolean, setBoolean, changeCase, setChangeCase, text, setText, last, setLast}) {
    function handleLanguageChange(){
        setBoolean(!boolean);
    }
    function handleCase() {
        setChangeCase(changeCase==='lowercase'? 'uppercase': 'lowercase')
    }
    function handleDelete() {
        setLast(prev => [...prev, {status: 'deleted', value: text[text.length-1]}])
        setText(text.slice(0,-1));
    }
    function handleUndo() {
        let lastObj = last[last.length-1];
        setLast(last.slice(0,-1));
        switch(lastObj.status) {
            case 'added':
                setText(text.slice(0,-1))
              break;
            case 'deleted':
                setText(prev => [...prev, lastObj.value])
              break;
            case 'clear':
                setText(lastObj.value);
            
          }
        // lastObj.status === 'added' ? setText(text.slice(0,-1)) : setText(prev => [...prev, lastObj.value])
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