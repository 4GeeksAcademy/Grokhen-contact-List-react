import React, { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const ContactForm = () => {

    const navigate = useNavigate();
    const params = useParams();
    

    const [contact, setContact] = useState({
        "name": "",
        "email": "",
        "address": "",
        "phone": ""
    })

    const sendContact = async () => {
        
        try {
        if (typeof params.id === `undefined`) {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/Grokhen/contacts", {
                method: "POST",
                body: JSON.stringify(contact),
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.json();
            console.log("post");
            navigate("/")
        } else {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Grokhen/contacts/${params.id}`, {
                method: "PUT",
                body: JSON.stringify(contact),
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.json();
            console.log("put");
            navigate("/")
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

    return (
        <>
            <form /* onSubmit={sendContact} */ className="container">
                <div className="col-12">
                    <label htmlFor="inputName" className="form-label text-start">Full Name</label>
                    <input
                        onChange={(e) => { setContact({ ...contact, name: e.target.value }) }}
                        type="text"
                        className="form-control"
                        id="inputFullName"
                        placeholder="Enter Name">
                    </input>
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input
                        onChange={(e) => { setContact({ ...contact, email: e.target.value }) }}
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Enter email">
                    </input>
                </div>
                <div className="col-12">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input
                        onChange={(e) => { setContact({ ...contact, phone: e.target.value }) }}
                        type="number"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Enter phone number">
                    </input>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Adress</label>
                    <input
                        onChange={(e) => { setContact({ ...contact, address: e.target.value }) }}
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Enter adress">
                    </input>
                </div>
                <div className="d-grid mt-3">
                    <button /* type="submit" */ className="btn btn-primary">Save1</button>

                </div>
            </form>
            <button onClick={()=>sendContact()}>save2</button>
        </>
    )
}

export default ContactForm;