function Language({ boolean, setBoolean, changeCase, setChangeCase, text, setText}) {
    function handleLanguageChange(){
        setBoolean(!boolean);
    }
    function handleCase() {
        setChangeCase(changeCase==='lowercase'? 'uppercase': 'lowercase')
    }
    function handleDelete() {
        
        setText(text.slice(0,-1));
        // if (text.length > 0) {
        //     setText(text.substring(0, text.length - 1)); // Remove the last character
        //   }
        // setText( text );
        console.log('text: ', text);
        console.log('text.length: ', text.length);
    }
    return (
        <>
         <h1>Language</h1>
        <button onClick = {handleLanguageChange}>English/עברית</button>
        <button onClick = {handleCase}>Change Case</button>
        <button onClick = {handleDelete}>Delete</button>
        </>
    )
}

export default Language;