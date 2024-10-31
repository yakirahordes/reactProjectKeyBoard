function English({setText, fontSize, color, changeCase, setLast }) {

    function handleAddLetter(letter) {
        let changeLetter;
        if (changeCase==='uppercase') {
            changeLetter = letter.toUpperCase()
        } else {
            changeLetter = letter.toLowerCase()
        }
        let newLetter = <span style = {{fontSize: fontSize, color: color}}>{changeLetter}</span>    

        setText(prev => [...prev, newLetter])
        setLast(prev => [...prev, {status: 'added', value: newLetter}]); 
    }

        const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", ".", ",", "/", "?"];
    return (
        <>
        {letters.map((letter) => {
        return (
            <button onClick = {() => handleAddLetter(letter)}>{letter===" "? "space" :letter}</button>
        )  })}
        </>
    )
}

export default English;
