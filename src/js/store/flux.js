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
			
			loadSomeData: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/contact_carlos")
				.then(response => response.json())
				.then(response => setStore({agenda:response}))
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			editContact: () => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`)
			},
			loadPictures: () => {
				fetch("https://randomuser.me/api/?inc=picture")
				.then(response => response.json())
				.then(response => console.log(response))
				.then(response => setStore({pictures:response}))
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
