function Size ({setFontSize}) {
    const sizeArr = [12, 14, 16, 18];
    function handleSize(size){
       
        if (size === 12) {
            setFontSize("20px");
        } else if (size === 14) {
            setFontSize("30px");
        } else if (size === 16) {
            setFontSize("40px");
        } else if (size === 18) {
            setFontSize("50px");
        } 
    }

    return(
        <>
        <h1>Size</h1>
        {sizeArr.map(size=>{
            return(
                <button onClick={()=>handleSize(size)} >{size}</button>
            )
        })}
        </>
    )
}

export default Size;