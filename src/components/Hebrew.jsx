function Hebrew({ setText, fontSize, color, setLast }) {

    function handleAddLetter(letter) {
        let newLetter = <span style = {{fontSize: fontSize, color: color}}>{letter}</span>    
        setText(prev => [...prev, newLetter])
        setLast(prev => [...prev, {status: 'added', value: newLetter}]);  
    }

        const letters = [ "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת", "ף", "ץ", "ך", "ם", " ", ".", ",", "/", "?"];
    return (
        <>
        {letters.map((letter) => {
        return (
            <button onClick = {() => handleAddLetter(letter)}>{letter===" "? "space" :letter}</button>

        )  })}
        </>
    )
}
export default Hebrew;