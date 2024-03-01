import React from "react";

const Card = (props)=>{
    return (
        <>
            <div className="col_4">
                <div className="sup-box" title="">
                    <img src={props.imgsrc} alt="1_1" />
                    <h4>{props.title}</h4>
                </div>
            </div>
        </>
    )
}

export default Card;