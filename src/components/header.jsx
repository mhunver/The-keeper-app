import React from "react";

import LightbulbIcon from '@mui/icons-material/Lightbulb';

function Header(){
    return (
        <div className="headerClass">
            <header>
                <h1 > Sticky Note</h1>
                <a  href="https://mui.com/material-ui/material-icons/?query=information" target="_blank" rel="noreferrer noopener">  <LightbulbIcon/> </a>

            </header>
        </div>
    )
}

export default Header;