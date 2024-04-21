import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const ContactCard = ({cardData}) => {
    const { store, actions } = useContext(Context);
    const [picture, setPicture] = useState("")

    const loadPictures = async () => {
        const response = await fetch("https://randomuser.me/api/?inc=picture");
        const data = await response.json();
        setPicture(data.results[0].picture.large)
    };

    useEffect(()=> {
        loadPictures()
    },[])
    
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Grokhen/contacts/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error("Error deleting contact");
            }

        location.reload()
        } catch (error) {
            console.error(error);
        }
    };

   
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={picture} className="float-left rounded-circle m-3" alt="cardData photo" style={{ height: "10rem", width: "10rem" }}  ></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex flex-row justify-content-between">
                            <h5 className="card-title">{cardData.name}</h5>
                            <div className="flex-row justify-content-evenly">
                                <Link to={`/contactEdit/${cardData.id}`}>
                                <span className="col fa fa-pen pe-3"></span>
                                </Link>
                                <span className="col fa fa-trash" onClick={()=>handleDelete(cardData.id)}></span>
                            </div>
                        </div>
                        <div className="card-body container text-start ps-0">
                            <p className="text-muted card-text"><IoLocationSharp /> {cardData.address}</p>
                            <p className="text-muted card-text"><FaPhone /> {cardData.phone}</p>
                            <p className="text-muted card-text"><IoMdMail /> {cardData.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactCard;