window.addEventListener('load', evt => {
	document.getElementById('button_save').addEventListener('click', saveTransition)
	document.getElementById('button_load').addEventListener('click', loadTransition)
})

function loadTransition() {
	fetch('konten/' + 1 + '/')
	.then(res => res.json())
		.then(konto => {

	const property_trans1 = document.getElementById("property_trans1")
	const property_trans2 = document.getElementById("property_trans2")
	const property_trans3 = document.getElementById("property_trans3")
	console.log("property: " + property_trans1 + property_trans2 + property_trans3)

	const duration_trans1 = document.getElementById("duration_trans1")
	const duration_trans2 = document.getElementById("duration_trans2")
	const duration_trans3 = document.getElementById("duration_trans3")
	console.log("duration: " + duration_trans1 + duration_trans2 + duration_trans3)

	const timing_trans1 = document.getElementById("timing_trans1")
	const timing_trans2 = document.getElementById("timing_trans2")
	const timing_trans3 = document.getElementById("timing_trans3")
	console.log("timing: " + timing_trans1 + timing_trans2 + timing_trans3)

	const delay_trans1 = document.getElementById("delay_trans1")
	const delay_trans2 = document.getElementById("delay_trans2")
	const delay_trans3 = document.getElementById("delay_trans3")
	console.log("delay: " + delay_trans1 + delay_trans2 + delay_trans3)

	property_trans1.value = konto.property_trans1;
	property_trans2.value = konto.property_trans2;
	property_trans3.value = konto.property_trans3;		

	duration_trans1.value = konto.duration_trans1;
	duration_trans2.value = konto.duration_trans2;
	duration_trans3.value = konto.duration_trans3;
	
	timing_trans1.value = konto.timing_trans1;
	timing_trans2.value = konto.timing_trans2;
	timing_trans3.value = konto.timing_trans3;

	delay_trans1.value = konto.delay_trans1;
	delay_trans2.value = konto.delay_trans2;
	delay_trans3.value = konto.delay_trans3;

	alert("Ladevorgang abgeschlossen!")

		})
		.catch(err => zeigeFehler(err))
}


function saveTransition(evt) {

	const property_trans1 = document.getElementById("property_trans1")
	const property_trans2 = document.getElementById("property_trans2")
	const property_trans3 = document.getElementById("property_trans3")
	console.log("property: " + property_trans1 + property_trans2 + property_trans3)

	const duration_trans1 = document.getElementById("duration_trans1")
	const duration_trans2 = document.getElementById("duration_trans2")
	const duration_trans3 = document.getElementById("duration_trans3")
	console.log("duration: " + duration_trans1 + duration_trans2 + duration_trans3)

	const timing_trans1 = document.getElementById("timing_trans1")
	const timing_trans2 = document.getElementById("timing_trans2")
	const timing_trans3 = document.getElementById("timing_trans3")
	console.log("timing: " + timing_trans1 + timing_trans2 + timing_trans3)

	const delay_trans1 = document.getElementById("delay_trans1")
	const delay_trans2 = document.getElementById("delay_trans2")
	const delay_trans3 = document.getElementById("delay_trans3")
	console.log("delay: " + delay_trans1 + delay_trans2 + delay_trans3)

	/* Erst konto 1 löschen, dann geht's weiter */
	fetch('konten/' + 1 + '/', { method: 'DELETE' })
	.then(res => {   })
	.catch(err => zeigeFehler(err))
	
	
	/* Jetzt konto 1 neu erstellen */	
	fetch('konten/', {
		method: 'POST',
		body: JSON.stringify({ 		
		"Property_trans1": property_trans1.value,
		"Property_trans2": property_trans2.value,
		"Property_trans3": property_trans3.value,
		"Duration_trans1": duration_trans1.value,
		"Duration_trans2": duration_trans2.value,
		"Duration_trans3": duration_trans3.value,
		"Timing_trans1": timing_trans1.value,
		"Timing_trans2": timing_trans2.value,
		"Timing_trans3": timing_trans3.value,
		"Delay_trans1": delay_trans1.value,
		"Delay_trans2": delay_trans2.value,
		"Delay_trans3": delay_trans3.value
		 }),
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then()
		.catch(err => zeigeFehler(err))

		alert("Speichervorgang abgeschlossen!")

	evt.preventDefault();
}

function zeigeFehler(fehlertext) {
	const err_out = document.getElementById('error_out')
	const div = document.createElement('div')
	div.classList.add('alert')
	div.classList.add('alert-danger')
	div.setAttribute('role', 'alert')
	div.innerText = fehlertext
	err_out.appendChild(div)

	setTimeout(() => err_out.removeChild(div), 5000)
}