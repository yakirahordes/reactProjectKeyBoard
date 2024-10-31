function Color ({color, setColor}) {
    const colorArr = ["red", "blue", "green", "pink"];
    function handleColor(textColor){
       
        if (textColor === "red") {
            setColor("red");
        } else if (textColor === "blue") {
            setColor("blue");
        } else if (textColor === "green") {
            setColor("green");
        } else if (textColor === "pink") {
            setColor("pink");
        } 
    }

    return(
        <>
        <h1>Color</h1>
        {colorArr.map(textColor=>{
            return(
                <button onClick={()=>handleColor(textColor)} >{textColor}</button>
            )
        })}
        </>
    )
}

export default Color;