
export async function fetchCars(){

    const headers = {
        'x-rapidapi-key': '798d87ab95mshff6b72e67e682cdp108948jsnd8cc63817ad3',
		'x-rapidapi-host': 'car-api2.p.rapidapi.com'
	
    }

    const response = await fetch('https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305' , {
		headers: headers,
	})

	const result = await response.json();
	return result;
}


// const url = 'https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '798d87ab95mshff6b72e67e682cdp108948jsnd8cc63817ad3',
// 		'x-rapidapi-host': 'car-api2.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }