import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard";


export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
		<>
			<div className="container text-center">
				<h1>Contac List</h1>

				<div className="list-group">
					{store.agenda.map((contact) => (
						<ContactCard cardData={contact} />
					))}
				</div>
			</div>
		
		</>

	)
};
