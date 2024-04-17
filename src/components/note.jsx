import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props){
    const [hover2,sethover2]=useState(false)

    

    return(
        <div className="note">
    
            <h1>{props.title}</h1>
            
            <p>{props.content}</p>

            <button onClick={()=>{
                props.onClick(props.id);
            }} onMouseOver={()=>{
                sethover2(true)
            }} onMouseOut={()=>{
                sethover2(false)
            }} style={{backgroundColor:hover2 ? "#c51350" : "#c24d2c",
            height:hover2 ? "70px" : "36px",
            width:hover2 ? "70px" : "60px"
            }}><DeleteIcon /></button>
            
            
            
        </div>
        
    )
}

export default Note;
