function Hebrew({ text, setText, fontSize, color }) {

    function handleAddLetter(letter) {
        let newLetter = <span style = {{fontSize: fontSize, color: color}}>{letter}</span>    
        setText(prev => [...prev, newLetter])
    }

        const letters = [" ", "א", "ב"];
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