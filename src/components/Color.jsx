function Color ({setColor}) {
    const colorArr = ["red", "yellow", "green", "pink"];
    function handleColor(textColor){
       
        if (textColor === "red") {
            setColor("red");
        } else if (textColor === "yellow") {
            setColor("yellow");
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
                <button className="colorButton" onClick={()=>handleColor(textColor)} style = {{background: textColor}}>{textColor}</button>
            )
        })}
        </>
    )
}

export default Color;