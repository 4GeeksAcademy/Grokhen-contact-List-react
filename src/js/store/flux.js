const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: [],
			pictures: []
		},
		actions: {
			
			loadSomeData: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Grokhen");
					const data = await response.json();
					setStore({ agenda: data.contacts });
				} catch (error) {
					console.error(error);
				}
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
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
