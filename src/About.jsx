import React from "react";
import web from "../src/images/about.png";
import Common from "./Common";

const About = ()=>{
    return(
        <>
            <Common name="About us Share some of our journy." imgurl={web} bturl='/contact' btname='Get in Touch' />
        </>
    )
}

export default About;