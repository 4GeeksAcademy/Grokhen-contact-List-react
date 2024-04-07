import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const ContactCard = ({cardData}) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card mb-3" key={cardData.id}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={store.pictures} className="float-left rounded-circle m-3" alt="cardData photo" style={{ height: "10rem", width: "10rem" }}  ></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex flex-row justify-content-between">
                            <h5 className="card-title">{cardData.name}</h5>
                            <div className="flex-row justify-content-evenly">
                                <span className="col fa fa-pen pe-3"></span>
                                <span className="col fa fa-trash"></span>
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