import React from "react";

function About({ src='https://via.placeholder.com/215', aboutText }){
    return(
        <aside>
            <img src={src} alt="blog logo"></img>
            <p>{aboutText}</p>
        </aside>
    )
}

export default About