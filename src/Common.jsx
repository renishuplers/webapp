import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props)=>{
    return(
        <>
            <section className="hero-intro line-title">
                <div className="container">
                    <div className="row">
                        <div className="col_5">
                            <div >
                                <img src={props.imgurl} />
                            </div>
                                        
                        </div>
                        <div className="col_7">
                            <div className="hero-intro-text">
                                <h2>{props.name}</h2>
                                <p>With over 25 years of experience managing complex operations and supply chains across the globe, Macquarie Consulting is the name you can trust to take your business further. By combining extensive industry expertise with a practical approach and highly personal service, our qualified consultants will support you to achieve significant and sustainable improvements across your operations and logistics ecosystem Our refreshingly realistic outlook and ‘on-the-ground’ understanding of aspects such as warehousing and delivery means we go beyond surface-level gains. Instead, we delve deeper into the processes that underpin your business, as well as the existing and emerging challenges facing supply chains in today’s uncertain world.</p>
                                <NavLink to={props.bturl} className='button'>{props.btname}</NavLink>                                  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;