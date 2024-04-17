import React, { useState } from "react";

import AddIcon from '@mui/icons-material/Add';


function Create_note(props){


   const [hover,sethover]=useState(false)
   

    const [input_note,setinput_note]=useState({
        title:"",
        content:""
    })

    function mouseover(){
        sethover(true)
    }

    function mouseout(){
        sethover(false)
    }

    

    function handleChange(event){
        const {name,value}=event.target
        setinput_note(prevNote=>{
            return {
                ...prevNote,
                [name]:value
            };
        });
      }

      function SubmitNote(event){
        props.onAdd(input_note);
        setinput_note({
            title:"",
            content:""

        })
        event.preventDefault();
      }

   


    return(
        <div >
            <form>
                <input onChange={handleChange} value={input_note.title} name="title" placeholder="Title"  />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={input_note.content} />
                <button onMouseOver={mouseover} onMouseOut={mouseout} onClick={SubmitNote} style={{backgroundColor: hover ? "black" :"#155263" }}><AddIcon/></button>
                
            </form>
            
        </div>
    )


}


export default Create_note;