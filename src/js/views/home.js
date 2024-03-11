import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
		<>
			<div className="container text-center">
				<h1>Contac List</h1>
				{console.log(store.pictures)}

				<div className="list-group">
					{store.agenda.map((contact) => (
						<div className="card mb-3" key={contact.id}>
							<div className="row g-0">
								<div className="col-md-4">
									<img src="..." className="img-fluid rounded-start" alt="..."></img>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<div className="d-flex flex-row justify-content-between">
											<h5 className="card-title">{contact.full_name}</h5>
											<div className="flex-row justify-content-evenly">
												<span className="col fa fa-pen pe-3"></span>
												<span className="col fa fa-trash"></span>
											</div>
										</div>
										<div className="card-body">
											<p className="text-muted card-text"><IoLocationSharp /> {contact.address}</p>
											<p className="text-muted card-text"><FaPhone /> {contact.phone}</p>
											<p className="text-muted card-text"><IoMdMail /> {contact.email}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{console.log(store.agenda)}
		</>

	)
};
