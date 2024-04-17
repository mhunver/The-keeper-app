import React from "react";



const a=new Date();
const year=a.getFullYear();
console.log(year);

function footer(){
    return(
        <div>
            <footer>
            
            <p>

            @copyright {year}
            <br />
            By Mehmet Huzeyfe Ünver
            </p>
            </footer>
        </div>
    )
}

export default footer;