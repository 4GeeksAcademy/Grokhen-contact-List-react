import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
		<>
			<div className="container text-center">
				<h1>Contac List</h1>
				{console.log(store.pictures)}

				<div className="container justify-content-center">
					{store.agenda.map((contact) => (
						<div className="card mb-3" style={{ maxWidth: '540px' }} key={contact.id}>
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
										<p className="text-muted card-text"><span className="fa-solid fa-location-dot"></span>{contact.address}</p>
										<p className="text-muted card-text">{contact.phone}</p>
										<p className="text-muted card-text">{contact.email}</p>

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
