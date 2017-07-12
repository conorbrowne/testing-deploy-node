function autocomplete (input, latInput, longInput) {
//lat comes first, then long with Google maps (this is the opposite of MongoDB)
	if (!input) return; 	//skip this function from running if there is no input(address) on the page

	const dropdown = new google.maps.places.Autocomplete(input);

	dropdown.addListener('place_changed', () => {
		const place = dropdown.getPlace();
		latInput.value = place.geometry.location.lat(); 
		longInput.value = place.geometry.location.lng();  
	});

	//if someone hits enter on the address field, don't submit the form 
	// '.on' comes from out bling.js file 
	input.on('keydown', (e) => {
		if(e.keyCode === 13) e.preventDefault(); 
	})
}

export default autocomplete;
