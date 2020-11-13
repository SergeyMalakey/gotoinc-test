import React from "react";
import {Link} from 'react-router-dom';


const FirstPage=()=>{
    return(
        <div className={"page-first"}>
            <Link to="/colorPicker"> Link to the colorPicker </Link>
        </div>
    )
}
export default FirstPage