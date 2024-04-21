import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard";
import { useParams, Link, useNavigate } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(()=> {
		actions.loadSomeData();
	},[])

	return (
		<>
			<div className="container text-center">
				<div className="gap-2">
					<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						<button className="btn btn-success m-10" type="button" onClick={() => navigate("/newContact")}>New Contact</button>
					</div>

					<div className="list-group">
						{store.agenda.map((contact) => (
							<ContactCard key={contact.id} cardData={contact} />
						))}
					</div>
				</div>
			</div>

		</>

	)
};
