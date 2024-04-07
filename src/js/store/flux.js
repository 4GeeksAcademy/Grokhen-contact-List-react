const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			agenda: [],
			pictures: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadSomeData: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Grokhen");
					const data = await response.json();
					setStore({agenda: data.contacts});
				} catch (error) {
					console.error(error);
				}
			},
			editContact: () => {
				fetch(`https://playground.4geeks.com/contact/agendas/Grokhen/contacts/${contactId}`)
			},
			loadPictures: async () => {
				const response = await fetch("https://randomuser.me/api/?inc=picture");
				const data = await response.json();
				setStore({pictures: data.results[0].picture.large})
			},
	
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo } );
			}
		}
	};
};

export default getState;
