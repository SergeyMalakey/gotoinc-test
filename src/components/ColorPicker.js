import React, {useState} from "react";

const ColorPicker = ()=>{
    const [colorRedInputValue, setColorRedInputValue] = useState(50)
    const [colorGreenInputValue, setColorGreenInputValue] = useState(185)
    const [colorBlueInputValue, setColorBlueInputValue] = useState(25)
    const [appliedColor,setAppliedColor] = useState([colorRedInputValue,colorGreenInputValue,colorBlueInputValue])

    function applySelectedColor(){
        setAppliedColor([colorRedInputValue,colorGreenInputValue,colorBlueInputValue])
    }
    function setSelectedColor(){
        setColorRedInputValue(appliedColor[0])
        setColorGreenInputValue(appliedColor[1])
        setColorBlueInputValue(appliedColor[2])
    }
    return(
        <div
        className={"color-picker"}>
            <div className={"indicator"}
                 style={{backgroundColor: `rgb(${colorRedInputValue},${colorGreenInputValue},${colorBlueInputValue})`,height:"200px"}}
            >
                {`Submitted color: RGB ${appliedColor[0]} ${appliedColor[1]} ${appliedColor[2]}`}
            </div>
            <div className={"range-wrapper"}>
                <input
                    value={colorRedInputValue}
                    min={0}
                    max={255}
                    type={"range"}
                    label={"red"}
                    onChange={(e)=>setColorRedInputValue(e.target.valueAsNumber)}
                />
                <input
                    value={colorGreenInputValue}
                    min={0}
                    max={255}
                    type={"range"}
                    onChange={(e)=>setColorGreenInputValue(e.target.valueAsNumber)}
                />
                <input
                    value={colorBlueInputValue}
                    min={0}
                    max={255}
                    type={"range"}
                    onChange={(e)=>setColorBlueInputValue(e.target.valueAsNumber)}
                />
                <div>
                    {`RGB: ${colorRedInputValue} ${colorGreenInputValue} ${colorBlueInputValue} `}
                </div>
                <input
                    type={"button"}
                    value={"Submit"}
                    onClick={()=>applySelectedColor()}
                />
                <input
                    type={"button"}
                    value={"Cancel"}
                    onClick={()=>setSelectedColor()}
                />
            </div>
        </div>
    )
}
export default ColorPicker