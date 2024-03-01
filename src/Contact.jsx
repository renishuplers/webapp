import React, { useState } from "react";



const Contact = ()=>{

    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        msg: '',
    })

    const formSubmit = () => {
    
    }

    return(
        <>
            <div className="contactform">
            <div className="container">

                <div className="sec-title">
                    <h2>Contact Us</h2>
                </div>

                <form onSubmit={formSubmit}>
                    <div className="form-group">
                        <input type="text" name="firstname" value={data.firstname} onChange={InputEvent} placeholder="Enter Your First Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="lastname" value={data.lastname} onChange={InputEvent} placeholder="Enter Your Last Name" />
                    </div>
                    <div className="form-group">
                        <input type="number" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" value={data.email} onChange={InputEvent} placeholder="Enter Your Email Address" />
                    </div>
                    <div className="form-group">
                        <textarea type="email" name="msg" value={data.msg} onChange={InputEvent} placeholder="Enter Your Msg here" />
                    </div>
                    <div className="form-group">
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default Contact;