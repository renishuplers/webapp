import React from "react";
import web from "../src/images/hero-intro.jpg";
import Common from "./Common";

const Home = ()=>{
    return(
        <>
            <Common name="Check Our Mobile Products for Grow your Lifestyle." imgurl={web} bturl='/products' btname='Our Products' />
        </>
    )
}

export default Home;